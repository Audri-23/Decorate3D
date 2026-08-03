import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { UserModel, registeredUsersDB, activeOTPSessions } from '../models/UserModel.js';
import { sendOTPEmail } from '../config/email.js';

// Helper to generate secure 6-digit OTP code
const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// 1. Login Request -> Role Isolation & Password Check with Bcrypt
export const loginUser = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Please enter both email and password.' });
    }

    const cleanEmail = email.trim().toLowerCase();
    const targetRole = (role || 'buyer').trim().toLowerCase();

    // Query user specifically by BOTH email AND role
    let user = null;
    try {
      user = await UserModel.findOne({ email: cleanEmail, role: targetRole });
    } catch {
      user = registeredUsersDB.find(u => u.email.toLowerCase() === cleanEmail && u.role === targetRole);
    }

    if (!user) {
      user = registeredUsersDB.find(u => u.email.toLowerCase() === cleanEmail && u.role === targetRole);
    }

    if (!user) {
      return res.status(404).json({
        success: false,
        message: `No ${targetRole.toUpperCase()} account found for "${email}". Please register a ${targetRole.toUpperCase()} account first!`
      });
    }

    // Verify Password with Bcrypt or direct match
    let isMatch = false;
    if (user.password.startsWith('$2a$') || user.password.startsWith('$2b$')) {
      isMatch = await bcrypt.compare(password, user.password);
    } else {
      isMatch = (user.password === password);
    }

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: `Incorrect password for ${targetRole.toUpperCase()} account credentials!`
      });
    }

    // Generate 6-digit 2FA OTP Code & Send Real Email
    const otpCode = generateOTP();
    const sessionKey = `${cleanEmail}_${targetRole}`;
    activeOTPSessions.set(sessionKey, {
      type: 'login',
      otpCode: otpCode,
      user: user,
      role: targetRole,
      createdAt: Date.now()
    });

    // Dispatch Real Email via Nodemailer
    const emailResult = await sendOTPEmail(cleanEmail, otpCode, user.name);

    if (!emailResult.success) {
      return res.status(500).json({
        success: false,
        message: `Failed to send 2FA verification email: ${emailResult.error || 'SMTP Error'}`
      });
    }

    return res.status(200).json({
      success: true,
      requiresOTP: true,
      message: `2FA Verification OTP sent to ${cleanEmail} for ${targetRole.toUpperCase()} login`,
      email: cleanEmail,
      role: targetRole
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// 2. Registration Request -> Role-Isolated Account Creation & 2FA Email
export const registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    if (!email || !password || !name) {
      return res.status(400).json({ success: false, message: 'Please fill in all required fields.' });
    }

    const cleanEmail = email.trim().toLowerCase();
    const targetRole = (role || 'buyer').trim().toLowerCase();

    // Check if an account already exists for THIS specific role
    let existingUser = null;
    try {
      existingUser = await UserModel.findOne({ email: cleanEmail, role: targetRole });
    } catch {
      existingUser = registeredUsersDB.find(u => u.email.toLowerCase() === cleanEmail && u.role === targetRole);
    }

    if (!existingUser) {
      existingUser = registeredUsersDB.find(u => u.email.toLowerCase() === cleanEmail && u.role === targetRole);
    }

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: `A ${targetRole.toUpperCase()} account with email "${email}" is already registered. Please sign in instead.`
      });
    }

    // Hash Password with Bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Generate 6-digit 2FA OTP Code
    const otpCode = generateOTP();
    const newUserDraft = {
      name: name.trim(),
      email: cleanEmail,
      password: hashedPassword,
      role: targetRole,
      avatar: targetRole === 'seller' ? 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150' :
              (targetRole === 'courier' ? 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150' :
              'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'),
      isVerified: true
    };

    const sessionKey = `${cleanEmail}_${targetRole}`;
    activeOTPSessions.set(sessionKey, {
      type: 'signup',
      otpCode: otpCode,
      user: newUserDraft,
      role: targetRole,
      createdAt: Date.now()
    });

    // Send Real Email via Nodemailer
    const emailResult = await sendOTPEmail(cleanEmail, otpCode, name);

    if (!emailResult.success) {
      return res.status(500).json({
        success: false,
        message: `Failed to send 2FA registration email: ${emailResult.error || 'SMTP Error'}`
      });
    }

    return res.status(200).json({
      success: true,
      requiresOTP: true,
      message: `2FA Registration OTP sent to ${cleanEmail} for ${targetRole.toUpperCase()} account`,
      email: cleanEmail,
      role: targetRole
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// 3. Verify 2FA OTP -> Create Account / Issue Signed JWT Token
export const verifyOTP = async (req, res) => {
  try {
    const { email, otpCode, role } = req.body;
    if (!email || !otpCode) {
      return res.status(400).json({ success: false, message: 'Please enter the 6-digit OTP verification code.' });
    }

    const cleanEmail = email.trim().toLowerCase();
    const targetRole = (role || 'buyer').trim().toLowerCase();
    const sessionKey = `${cleanEmail}_${targetRole}`;

    const session = activeOTPSessions.get(sessionKey) || activeOTPSessions.get(cleanEmail);

    if (!session) {
      return res.status(400).json({
        success: false,
        message: 'OTP session expired or invalid. Please request a new code.'
      });
    }

    // 10-minute session expiration check
    if (Date.now() - session.createdAt > 10 * 60 * 1000) {
      activeOTPSessions.delete(sessionKey);
      return res.status(400).json({
        success: false,
        message: 'OTP verification code has expired (10 minutes limit). Please request a new code.'
      });
    }

    if (session.otpCode !== otpCode.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Incorrect 6-digit OTP code! Please check your verification code.'
      });
    }

    let finalUser = session.user;

    // If new registration, save to MongoDB & fallback database
    if (session.type === 'signup') {
      try {
        const createdUserDoc = await UserModel.create(session.user);
        finalUser = createdUserDoc.toObject();
      } catch {
        session.user.id = 'usr_' + Date.now();
        registeredUsersDB.push(session.user);
        finalUser = session.user;
      }
      registeredUsersDB.push(finalUser);
    }

    activeOTPSessions.delete(sessionKey);

    // Issue Signed JWT Token with explicit role claims
    const jwtSecret = process.env.JWT_SECRET || 'decorate3d_jwt_secret_key';
    const token = jwt.sign(
      { id: finalUser._id || finalUser.id, email: finalUser.email, role: finalUser.role },
      jwtSecret,
      { expiresIn: '7d' }
    );

    const responseUser = {
      id: finalUser._id || finalUser.id,
      name: finalUser.name,
      email: finalUser.email,
      role: finalUser.role,
      avatar: finalUser.avatar,
      token: token
    };

    return res.status(200).json({
      success: true,
      message: session.type === 'signup' ? `Account created successfully for ${finalUser.role.toUpperCase()} role!` : `Verified successfully as ${finalUser.role.toUpperCase()}!`,
      user: responseUser
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// 4. Resend 2FA OTP Code
export const resendOTP = async (req, res) => {
  try {
    const { email, role } = req.body;
    if (!email) {
      return res.status(400).json({ success: false, message: 'Email address is required.' });
    }

    const cleanEmail = email.trim().toLowerCase();
    const targetRole = (role || 'buyer').trim().toLowerCase();
    const sessionKey = `${cleanEmail}_${targetRole}`;

    const existingSession = activeOTPSessions.get(sessionKey) || activeOTPSessions.get(cleanEmail);

    if (!existingSession) {
      return res.status(400).json({
        success: false,
        message: `No active 2FA session found for ${targetRole.toUpperCase()} role. Please enter your credentials again.`
      });
    }

    const newOtpCode = generateOTP();
    existingSession.otpCode = newOtpCode;
    existingSession.createdAt = Date.now();
    activeOTPSessions.set(sessionKey, existingSession);

    const emailResult = await sendOTPEmail(cleanEmail, newOtpCode, existingSession.user?.name || 'User');

    if (!emailResult.success) {
      return res.status(500).json({
        success: false,
        message: `Failed to resend 2FA verification email: ${emailResult.error || 'SMTP Error'}`
      });
    }

    return res.status(200).json({
      success: true,
      message: `A new 2FA verification OTP has been sent to ${cleanEmail}`,
      email: cleanEmail
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const getUserProfile = async (req, res) => {
  return res.status(200).json({
    success: true,
    usersCount: registeredUsersDB.length,
    jwtConfigured: !!process.env.JWT_SECRET,
    emailConfigured: !!process.env.EMAIL_USER
  });
};
