// routes/user.routes.js

import express from "express";

import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  getUserByUserId
} from "../controller/userProfile.js";

const router = express.Router();

router.route("/").post(createUser).get(getUsers);

router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

router.route("/userAuthId/:userId").get(getUserByUserId)
export default router;