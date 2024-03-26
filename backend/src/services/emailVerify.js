import { generateToken } from '../utils/generateToken.js';
import { createAndSendEmail } from './createAndSendEmail.js';
import { getEmailVerifyTemplate } from './emailVerifyTemplate.js';

const emailVerify = (user) => {
	const token = generateToken(user.id, user.role, process.env.JWT_SECRET);

	const mailOptions = {
		from: process.env.EMAIL_USEREMAIL,
		to: user.email,
		subject: 'Email Verification',
		html: getEmailVerifyTemplate(token),
	};

	createAndSendEmail(mailOptions);
};

export default emailVerify;
