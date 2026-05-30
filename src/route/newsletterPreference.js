// routes/newsletterPreference.routes.js

import express from "express";

import {
  getNewsletterPreferences,
  getNewsletterPreferenceById,
  updateNewsletterPreference,
  deleteNewsletterPreference,
  subscribeNewsletter
} from "../controller/newsletterPreference.js";

const router = express.Router();

router.route("/")
    .get(getNewsletterPreferences)
    .post(subscribeNewsletter);

router.route("/:id")
    .get(getNewsletterPreferenceById)
    .put(updateNewsletterPreference)
    .delete(deleteNewsletterPreference);
export default router;