import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import emailVerify from "../services/emailVerify.js";

export const signUp = async (req, res, next) => {
  try {
    const { email, username, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });

    await newUser.save();

    const user = await User.findOne(newUser);

    emailVerify(user);

    res.status(201).json({ message: "Verification Email Sent!" });
  } catch (error) {
    next(error);
  }
};
