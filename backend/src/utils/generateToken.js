import jwt from 'jsonwebtoken';

export const generateToken = async (id, role, secret) => {
	const token = jwt.sign({ id, role }, secret, { expiresIn: '1d' });
	return token;
};
