import express from "express";
import { connectToMongoDB } from "./config/db";

dotenv.config();

connectToMongoDB(process.env.MONGO_URI);

const app = express();
const port = 3000;

// Define a route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
