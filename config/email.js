import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

let transporter = null;

export const initEmailTransporter = () => {
  if (transporter) return transporter;

  const emailUser = process.env.EMAIL_USER ? process.env.EMAIL_USER.trim() : null;
  const rawPass = process.env.EMAIL_PASS ? process.env.EMAIL_PASS : null;
  const emailPass = rawPass ? rawPass.replace(/\s+/g, '') : null;

  if (emailUser && emailPass && emailUser !== 'your_email@gmail.com') {
    transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });
    console.log(`[Email Service] Production Gmail SMTP initialized for ${emailUser}`);
  } else {
    console.log(`[Email Service] Awaiting EMAIL_USER & EMAIL_PASS configuration in .env file.`);
  }

  return transporter;
};

// Send 2FA OTP Email
export const sendOTPEmail = async (toEmail, otpCode, userName = 'User') => {
  try {
    const activeTransporter = initEmailTransporter();
    const emailUser = process.env.EMAIL_USER;

    if (!activeTransporter || !emailUser || emailUser === 'your_email@gmail.com') {
      console.log(`[Email 2FA] OTP for ${toEmail}: ${otpCode} (Configure EMAIL_USER & EMAIL_PASS in .env to dispatch live emails)`);
      return { success: true, pendingConfig: true };
    }

    const mailOptions = {
      from: `"Decorate3D Security" <${emailUser}>`,
      to: toEmail,
      subject: `[Decorate3D] Your 2FA Email Verification OTP Code: ${otpCode}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 24px; background-color: #FBF9F5; color: #1E232A;">
          <div style="max-width: 500px; margin: 0 auto; background: #ffffff; border: 1px solid #E5DEC9; border-radius: 16px; padding: 32px;">
            <div style="text-align: center; margin-bottom: 20px;">
              <span style="font-size: 24px; font-weight: bold; color: #A17A16;">Decorate3D</span>
            </div>
            <h2 style="font-size: 20px; font-weight: bold; margin-bottom: 12px;">Email 2FA Verification Code</h2>
            <p style="font-size: 14px; color: #555555; line-height: 1.5;">
              Hello <strong>${userName}</strong>,<br/>
              Use the following 6-digit One-Time Password (OTP) to verify your account:
            </p>
            <div style="text-align: center; margin: 24px 0; background: #F9F4E9; border: 1px solid #E9D3A4; border-radius: 12px; padding: 16px;">
              <span style="font-family: monospace; font-size: 32px; font-weight: bold; letter-spacing: 8px; color: #A17A16;">${otpCode}</span>
            </div>
            <p style="font-size: 12px; color: #888888; text-align: center;">
              This OTP is valid for 10 minutes. If you did not request this verification, please ignore this email.
            </p>
          </div>
        </div>
      `,
    };

    const info = await activeTransporter.sendMail(mailOptions);
    console.log(`[Email Sent] Live 2FA Email sent to ${toEmail}. Response: ${info.response}`);
    return { success: true };
  } catch (error) {
    console.error(`[Email Error] Failed to send email to ${toEmail}:`, error.message);
    return { success: false, error: error.message };
  }
};
