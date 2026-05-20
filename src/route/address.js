import express from "express";

import {
  createAddress,
  getAddresses,
  getAddressById,
  updateAddress,
  deleteAddress,
  getAddressesByUserId
} from "../controller/address.js";

const router = express.Router();

router.route("/")
    .get(getAddresses)
    .post(createAddress);

router.route("/:id")
    .get(getAddressById)
    .put(updateAddress)
    .delete(deleteAddress);

router.route("/user/:userId")
    .get(getAddressesByUserId);

export default router;