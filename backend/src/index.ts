import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import UserRoute from './routes/user.route'

const app = express();
const PORT: number = 5000;

mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(() => console.log("Connected to database!"))
  .catch((error) => console.log(error));

app.use(express.json());
app.use(cors());

app.use("/api/my/user", UserRoute)

app.listen(PORT, () => {
  console.log(`server running at port:${PORT}`);
});
