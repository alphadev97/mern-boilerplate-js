import nodemailer from "nodemailer";

export const nodeMailer = (service, user, pass) => {
  const transporter = nodemailer.createTransport({
    service: service,
    auth: {
      user: user,
      pass: pass,
    },
  });

  return transporter;
};
