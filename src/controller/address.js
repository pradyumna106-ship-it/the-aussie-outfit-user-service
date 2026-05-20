// controllers/address.controller.js

import Address from "../models/address.js";


// ==============================
// CREATE ADDRESS
// ==============================
export const createAddress = async (req, res) => {
  try {

    const address = await Address.create(req.body);

    return res.status(201).json({
      success: true,
      message: "Address created successfully",
      data: address
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


// ==============================
// GET ALL ADDRESSES
// ==============================
export const getAddresses = async (req, res) => {
  try {

    const addresses = await Address.find();

    return res.status(200).json({
      success: true,
      count: addresses.length,
      data: addresses
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// ==============================
// GET ADDRESSES By USER ID
// ==============================
export const getAddressesByUserId = async (req, res) => {
  try {

    const addresses = await Address.find({ userId: req.params.userId });

    return res.status(200).json({
      success: true,
      count: addresses.length,
      data: addresses
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


// ==============================
// GET ADDRESS BY ID
// ==============================
export const getAddressById = async (req, res) => {
  try {

    const address = await Address.findById(req.params.id);

    if (!address) {
      return res.status(404).json({
        success: false,
        message: "Address not found"
      });
    }

    return res.status(200).json({
      success: true,
      data: address
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


// ==============================
// UPDATE ADDRESS
// ==============================
export const updateAddress = async (req, res) => {
  try {

    const updatedAddress = await Address.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!updatedAddress) {
      return res.status(404).json({
        success: false,
        message: "Address not found"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Address updated successfully",
      data: updatedAddress
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


// ==============================
// DELETE ADDRESS
// ==============================
export const deleteAddress = async (req, res) => {
  try {

    const deletedAddress = await Address.findByIdAndDelete(req.params.id);

    if (!deletedAddress) {
      return res.status(404).json({
        success: false,
        message: "Address not found"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Address deleted successfully"
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};