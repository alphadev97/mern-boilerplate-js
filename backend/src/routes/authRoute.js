import express from 'express';
import { createUser } from '../controllers/userController';
import { userValidator } from '../validator/userValidator';

const router = express.Router();

router.post('/', userValidator, createUser);

export default router;
