import { RoomLayoutModel } from '../models/RoomLayoutModel.js';
import { CustomAssetModel } from '../models/CustomAssetModel.js';
import path from 'path';
import fs from 'fs';

/**
 * Get all room layouts for a specific user (or guest)
 */
export const getRoomLayouts = async (req, res) => {
  try {
    const { userId = 'guest_user' } = req.query;
    const layouts = await RoomLayoutModel.find({ userId }).sort({ updatedAt: -1 });
    return res.status(200).json({
      success: true,
      count: layouts.length,
      data: layouts
    });
  } catch (error) {
    console.error('[RoomPlanner Controller Error] getRoomLayouts:', error);
    return res.status(500).json({ success: false, message: 'Server error retrieving room layouts' });
  }
};

/**
 * Get a single room layout by ID
 */
export const getRoomLayoutById = async (req, res) => {
  try {
    const { id } = req.params;
    const layout = await RoomLayoutModel.findById(id);
    if (!layout) {
      return res.status(404).json({ success: false, message: 'Room layout not found' });
    }
    return res.status(200).json({ success: true, data: layout });
  } catch (error) {
    console.error('[RoomPlanner Controller Error] getRoomLayoutById:', error);
    return res.status(500).json({ success: false, message: 'Server error retrieving room layout' });
  }
};

/**
 * Create or Update a Room Layout Design (Saves to MongoDB AND writes Disk Storage JSON in uploads/room-layouts/)
 */
export const saveRoomLayout = async (req, res) => {
  try {
    const { _id, userId = 'guest_user', layoutName, roomDimensions, wallCustomization, floorCustomization, openings, placedItems } = req.body;

    let savedLayout;

    if (_id) {
      savedLayout = await RoomLayoutModel.findByIdAndUpdate(
        _id,
        {
          userId,
          layoutName: layoutName || 'Custom Floor Plan',
          roomDimensions,
          wallCustomization,
          floorCustomization,
          openings,
          placedItems,
          updatedAt: new Date()
        },
        { new: true, runValidators: true }
      );
    }

    if (!savedLayout) {
      savedLayout = new RoomLayoutModel({
        userId,
        layoutName: layoutName || 'My Custom Floor Plan',
        roomDimensions,
        wallCustomization,
        floorCustomization,
        openings,
        placedItems
      });
      await savedLayout.save();
    }

    // Write JSON file backup to server storage directory: uploads/room-layouts/
    const storageDir = path.join(process.cwd(), 'uploads', 'room-layouts');
    if (!fs.existsSync(storageDir)) {
      fs.mkdirSync(storageDir, { recursive: true });
    }

    const jsonFilename = `layout_${savedLayout._id}.json`;
    const fullDiskPath = path.join(storageDir, jsonFilename);
    const relativeDiskPath = `uploads/room-layouts/${jsonFilename}`;

    fs.writeFileSync(fullDiskPath, JSON.stringify(savedLayout.toObject(), null, 2), 'utf-8');

    return res.status(200).json({
      success: true,
      message: 'Room layout saved successfully',
      storageLocation: {
        database: 'MongoDB Collection: RoomLayout',
        diskDirectory: relativeDiskPath,
        fullServerPath: fullDiskPath
      },
      data: savedLayout
    });

  } catch (error) {
    console.error('[RoomPlanner Controller Error] saveRoomLayout:', error);
    return res.status(500).json({ success: false, message: 'Failed to save room layout design' });
  }
};

/**
 * Delete a Room Layout by ID (Deletes from MongoDB AND removes Disk Storage JSON in uploads/room-layouts/)
 */
export const deleteRoomLayout = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await RoomLayoutModel.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: 'Room layout not found' });
    }

    // Delete associated disk storage JSON file if exists
    const diskPath = path.join(process.cwd(), 'uploads', 'room-layouts', `layout_${id}.json`);
    if (fs.existsSync(diskPath)) {
      fs.unlinkSync(diskPath);
    }

    return res.status(200).json({ success: true, message: 'Room layout deleted from database & disk storage successfully' });
  } catch (error) {
    console.error('[RoomPlanner Controller Error] deleteRoomLayout:', error);
    return res.status(500).json({ success: false, message: 'Server error deleting room layout' });
  }
};

/**
 * Upload Custom 3D Model File (.GLB / .GLTF) to Server Storage
 */
export const uploadCustomModel = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No 3D file uploaded.' });
    }

    const { title, category, placementType, width, depth, height } = req.body;
    const filename = req.file.filename;
    const relativeUrl = `/uploads/models/${filename}`;
    const customAssetId = `custom_${Date.now()}`;

    const sanitizedCategory = category && category.trim() ? category.trim() : 'Sofas & Seating';

    const newAsset = new CustomAssetModel({
      id: customAssetId,
      filename: filename,
      title: title || req.file.originalname,
      category: sanitizedCategory,
      placementType: placementType || 'FLOOR',
      modelUrl: relativeUrl,
      thumbnailUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&auto=format&fit=crop&q=80',
      dimensions: {
        width: parseFloat(width) || 1.0,
        depth: parseFloat(depth) || 1.0,
        height: parseFloat(height) || 1.0
      }
    });

    await newAsset.save();

    return res.status(201).json({
      success: true,
      message: 'Custom 3D model uploaded and saved to server storage successfully',
      data: newAsset
    });

  } catch (error) {
    console.error('[RoomPlanner Controller Error] uploadCustomModel:', error);
    return res.status(500).json({ success: false, message: 'Server error uploading custom 3D model' });
  }
};

/**
 * Get custom 3D models uploaded by users
 */
export const getCustomModels = async (req, res) => {
  try {
    const models = await CustomAssetModel.find().sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      count: models.length,
      data: models
    });
  } catch (error) {
    console.error('[RoomPlanner Controller Error] getCustomModels:', error);
    return res.status(500).json({ success: false, message: 'Server error retrieving custom 3D models' });
  }
};

/**
 * Delete a custom 3D model file from disk storage and database
 */
export const deleteCustomModel = async (req, res) => {
  try {
    const { filename } = req.params;
    if (!filename) {
      return res.status(400).json({ success: false, message: 'Filename parameter is required.' });
    }

    const deletedAsset = await CustomAssetModel.findOneAndDelete({ filename });

    const filePath = path.join(process.cwd(), 'uploads', 'models', filename);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    return res.status(200).json({
      success: true,
      message: 'Custom 3D model file deleted from server storage and database.',
      deletedFilename: filename
    });

  } catch (error) {
    console.error('[RoomPlanner Controller Error] deleteCustomModel:', error);
    return res.status(500).json({ success: false, message: 'Server error deleting custom 3D model file.' });
  }
};
