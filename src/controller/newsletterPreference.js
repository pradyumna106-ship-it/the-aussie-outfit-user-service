// controllers/newsletterPreference.controller.js

import NewsletterPreference from "../models/newsletterPreference.js";


// ==============================
// CREATE NEWSLETTER PREFERENCE
// ==============================
export const subscribeNewsletter = async (
  req,
  res
) => {
  try {
    const { email, category } = req.body;

    const existing =
      await NewsletterSubscriber.findOne({
        email
      });

    if (existing) {
      return res.status(400).json({
        success: false,
        message:
          "Email already subscribed"
      });
    }

    const subscriber =
      await NewsletterSubscriber.create({
        email,
        category
      });

    return res.status(201).json({
      success: true,
      data: subscriber
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


// ==============================
// GET ALL NEWSLETTER PREFERENCES
// ==============================
export const getNewsletterPreferences = async (req, res) => {
  try {

    const preferences = await NewsletterPreference.find();

    return res.status(200).json({
      success: true,
      count: preferences.length,
      data: preferences
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


// ==============================
// GET NEWSLETTER PREFERENCE BY ID
// ==============================
export const getNewsletterPreferenceById = async (req, res) => {
  try {

    const preference = await NewsletterPreference.findById(req.params.id);

    if (!preference) {
      return res.status(404).json({
        success: false,
        message: "Newsletter preference not found"
      });
    }

    return res.status(200).json({
      success: true,
      data: preference
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


// ==============================
// UPDATE NEWSLETTER PREFERENCE
// ==============================
export const updateNewsletterPreference = async (req, res) => {
  try {

    const updatedPreference = await NewsletterPreference.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!updatedPreference) {
      return res.status(404).json({
        success: false,
        message: "Newsletter preference not found"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Newsletter preference updated successfully",
      data: updatedPreference
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


// ==============================
// DELETE NEWSLETTER PREFERENCE
// ==============================
export const deleteNewsletterPreference = async (req, res) => {
  try {

    const deletedPreference = await NewsletterPreference.findByIdAndDelete(req.params.id);

    if (!deletedPreference) {
      return res.status(404).json({
        success: false,
        message: "Newsletter preference not found"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Newsletter preference deleted successfully"
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};