// routes/NewsletterSubscriber.routes.js

import express from "express";

import {
  createNewsletterSubscriber,
  getNewsletterSubscribers,
  getNewsletterSubscriberById,
  updateNewsletterSubscriber,
  deleteNewsletterSubscriber,
  subscribeNewsletter
} from "../controller/newsletterPreference.js";

const router = express.Router();

router.route("/")
    .get(getNewsletterSubscribers)
    .post(createNewsletterSubscriber);
router.route("/subscribe")
    .post(subscribeNewsletter);
router.route("/:id")
    .get(getNewsletterSubscriberById)
    .put(updateNewsletterSubscriber)
    .delete(deleteNewsletterSubscriber);
export default router;