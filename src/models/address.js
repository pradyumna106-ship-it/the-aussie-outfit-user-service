import mongoose from "mongoose";

const addressSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true
    },

    fullName: {
      type: String,
      required: true,
      trim: true
    },

    phoneNumber: {
      type: String,
      required: true
    },

    addressLine1: {
      type: String,
      required: true
    },

    addressLine2: {
      type: String,
      default: null
    },

    landmark: {
      type: String,
      default: null
    },

    city: {
      type: String,
      required: true
    },

    state: {
      type: String,
      required: true
    },

    country: {
      type: String,
      required: true,
      default: "India"
    },

    postalCode: {
      type: String,
      required: true
    },

    addressType: {
      type: String,
      enum: ["home", "work", "other"],
      default: "home"
    },

    isDefault: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true,
    collection: "addresses"
  }
);

const Address = mongoose.model(
  "Address",
  addressSchema
);

export default Address;