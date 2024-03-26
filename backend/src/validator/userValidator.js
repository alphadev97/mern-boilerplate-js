import { body, validationResult } from 'express-validator';

export const userValidator = [
	body('email')
		.notEmpty()
		.withMessage('Email is required')
		.isEmail()
		.withMessage('Invalid email address'),

	body('username').notEmpty().withMessage('Username is required'),

	body('password')
		.notEmpty()
		.withMessage('Password is required')
		.isStrongPassword()
		.withMessage(
			'Password must contain at least 8 characters, including uppercase, lowercase, number, and symbol'
		),

	(req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		next();
	},
];
