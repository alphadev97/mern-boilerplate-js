import nodemailer from 'nodemailer';

export const nodeMailer = (service, user, pass) => {
	const transporter = nodemailer.createTransport({
		service: service,
		host: 'smtp.gmail.com',
		port: 465,
		secure: true,
		auth: {
			user: user,
			pass: pass,
		},
	});

	return transporter;
};
