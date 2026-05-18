// controllers/user.controller.js

import UserProfile from "../models/userProfile.js";


// ==============================
// CREATE USER PROFILE
// ==============================
export const createUser = async (req, res) => {
  try {

    const user = await UserProfile.create(req.body);

    return res.status(201).json({
      success: true,
      message: "User profile created successfully",
      data: user
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


// ==============================
// GET ALL USERS
// ==============================
export const getUsers = async (req, res) => {
  try {

    const users = await UserProfile.find();

    return res.status(200).json({
      success: true,
      count: users.length,
      data: users
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


// ==============================
// GET USER BY ID
// ==============================
export const getUserById = async (req, res) => {
  try {

    const user = await UserProfile.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    return res.status(200).json({
      success: true,
      data: user
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const getUserByUserId = async (req, res) => {
  try {

    const user = await UserProfile.findOne({ userId: req.params.userId });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    return res.status(200).json({
      success: true,
      data: user
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// ==============================
// UPDATE USER
// ==============================
export const updateUser = async (req, res) => {
  try {

    const updatedUser = await UserProfile.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    return res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: updatedUser
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


// ==============================
// DELETE USER
// ==============================
export const deleteUser = async (req, res) => {
  try {

    const deletedUser = await UserProfile.findByIdAndDelete(req.params.id);

    if (!deletedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    return res.status(200).json({
      success: true,
      message: "User deleted successfully"
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};