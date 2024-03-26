import { nodeMailer } from '../config/nodemailer';

export const createAndSendEmail = (mailOptions) => {
	const transporter = nodeMailer(
		process.env.EMAIL_SERVICE,
		process.env.EMAIL_USERNAME,
		process.env.EMAIL_PASSWORD
	);

	// Send email
	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.error('Error sending email:', error);
		} else {
			console.log('Email sent:', info.response);
		}
	});
};
