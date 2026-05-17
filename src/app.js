import express from "express";
import userRouter from "./route/user.js";
import addressRouter from "./route/address.js";
import newsRouter from "./route/newsletterPreference.js";
import cors from "cors"
const app = express();

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
  credentials: true}));
app.use(express.urlencoded({ extended: true })); // for form
app.use("/uploads", express.static("uploads"));

app.use(express.json());

app.use("/address",addressRouter);
app.use("/newsLetterPreference",newsRouter)
app.use("/", userRouter);
export default app;