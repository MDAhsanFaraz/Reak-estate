import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import UserRouter from "./routes/user.route.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    {
      console.log(err);
    }
  });
const app = express();
app.use("/api/user", UserRouter);

app.listen(3000, () => {
  console.log("server is running at port-3000");
});
