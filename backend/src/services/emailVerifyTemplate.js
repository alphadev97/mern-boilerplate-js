export const getEmailVerifyTemplate = (token) => {
  return {
    html: `
        <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; border-radius: 10px;">
          <h2 style="color: #333;">Verify Your Email Address</h2>
          <p style="font-size: 16px; color: #666;">Thank you for signing up! Please click the following link to verify your email address:</p>
          <a href=http://${process.env.FRONTEND_URL}/verify-email?token=${token}" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: #fff; text-decoration: none; border-radius: 5px;">Verify Email</a>
        </div>
      `,
  };
};
