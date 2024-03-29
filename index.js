import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import customerRoute from "./src/routes/customer.js";
import cardRoute from "./src/routes/card.js";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

//middlewares
app.use(express.json());

app.use("/api/customer", customerRoute);
app.use("/api/card", cardRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    // stack: err.stack,
  });
});

app.listen(3000, () => {
  connect();
  console.log("Connected to Backend.");
});