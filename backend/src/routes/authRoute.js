import express from "express";
import { userValidator } from "../validator/userValidator.js";
import { signUp } from "../controllers/authController.js";

const router = express.Router();

router.post("/", userValidator, signUp);

export default router;
