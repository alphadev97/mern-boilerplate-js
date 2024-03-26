import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/errorHandler";

export const signUp = (req, res, next) => {
  try {
    const { email, username, password } = req.body;

    if (!email) {
      return errorHandler(404, "Email not found!");
    }
    if (!username) {
      return errorHandler(404, "Username not found!");
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
  } catch (error) {
    next(error);
  }
};
