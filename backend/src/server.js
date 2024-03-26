import express from "express";
import { connectToMongoDB } from "./config/db";
import authRouter from "./routes/authRoute.js";
import cookieParser from "cookie-parser";

dotenv.config();

// MONGO CONNECTION

connectToMongoDB(process.env.MONGO_URI);

const app = express();
const port = 3000;
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/user", authRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
