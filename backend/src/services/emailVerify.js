import { generateToken } from '../utils/generateToken.js';
import { createAndSendEmail } from './createAndSendEmail.js';
import { getEmailVerifyTemplate } from './emailVerifyTemplate.js';

const emailVerify = async (user) => {
	const token = await generateToken(user.id, user.role, process.env.JWT_SECRET);

	const emailTemplate = getEmailVerifyTemplate(token);

	const htmlContent = emailTemplate.html;

	const mailOptions = {
		from: process.env.EMAIL_USEREMAIL,
		to: user.email,
		subject: 'Email Verification',
		html: htmlContent,
	};

	createAndSendEmail(mailOptions);
};

export default emailVerify;
