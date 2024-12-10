import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { createServer } from "http";

// routes
import authRoutes from "./routes/authRoutes.js";

import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();
const httpServer = createServer(app);
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);

httpServer.listen(PORT, () => {
  console.log("Server started at this port:" + PORT);
  connectDB();
});

