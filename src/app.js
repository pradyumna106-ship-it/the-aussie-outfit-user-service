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
app.options('/api', cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for form
app.use("/uploads", express.static("uploads"));
app.get('/', (req, res) => {
  res.status(200).json({ message: "API Connected Successfully" })
})
app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/address",addressRouter);
app.use("/api/newsLetterPreference",newsRouter)
export default app;