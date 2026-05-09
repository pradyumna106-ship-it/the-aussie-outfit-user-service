// routes/newsletterPreference.routes.js

import express from "express";

import {
  createNewsletterPreference,
  getNewsletterPreferences,
  getNewsletterPreferenceById,
  updateNewsletterPreference,
  deleteNewsletterPreference
} from "../controller/newsletterPreference.js";

const router = express.Router();

router.route("/")
    .get(getNewsletterPreferences)
    .post(createNewsletterPreference);

router.route("/:id")
    .get(getNewsletterPreferenceById)
    .put(updateNewsletterPreference)
    .delete(deleteNewsletterPreference);
export default router;