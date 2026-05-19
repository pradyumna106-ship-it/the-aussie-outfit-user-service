import mongoose from "mongoose";

const userProfileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
      index: true
    },

    firstName: {
      type: String,
      trim: true
    },

    lastName: {
      type: String,
      trim: true
    },

    gender: {
      type: String,
      enum: ["male", "female", "other"],
      default: "other"
    },

    dateOfBirth: {
      type: Date
    },

    profileImage: {
      type: String,
      default: null
    },

    bio: {
      type: String,
      default: null
    },

    preferredCategories: [
        {
          type: String
        }
      ],

    preferredBrands: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Brand"
      }
    ],

    favoriteColors: [
      {
        type: String,
        default: ""
      }
    ],

    sizes: {
      topWear: {
        type: String,
        enum: ["XS", "S", "M", "L", "XL", "XXL"]
      },
      bottomWear: {
        type: String,
        enum: ["XS", "S", "M", "L", "XL", "XXL"]
      },
      footwear: {
        region: {
          type: String,
          enum: ["US", "UK/INDIA", "EUR", "CM"]
        },
        size: {
          type: Number
        }
      }
    },

    lifestylePreferences: {
      budgetRange: {
        type: String,
        enum: ["low", "medium", "premium", "luxury"],
        default: "medium"
      },

      shoppingFrequency: {
        type: String,
        enum: ["weekly", "monthly", "occasionally"],
        default: "occasionally"
      }
    }
  },
  {
    timestamps: true,
    collection: "userProfiles"
  }
);

const UserProfile = mongoose.model(
  "UserProfile",
  userProfileSchema
);

export default UserProfile;