import mongoose from "mongoose";

const newsletterPreferenceSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
      index: true
    },

    isSubscribed: {
      type: Boolean,
      default: true
    },

    emailNotifications: {
      type: Boolean,
      default: true
    },

    smsNotifications: {
      type: Boolean,
      default: false
    },

    promotionalOffers: {
      type: Boolean,
      default: true
    },

    newArrivals: {
      type: Boolean,
      default: true
    },

    orderUpdates: {
      type: Boolean,
      default: true
    },

    preferredCategories: [
      {
        type: String
      }
    ]
  },
  {
    timestamps: true,
    collection: "newsletterPreferences"
  }
);

const NewsletterPreference = mongoose.model(
  "NewsletterPreference",
  newsletterPreferenceSchema
);

export default NewsletterPreference;