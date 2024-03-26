import express from 'express';
import { connectToMongoDB } from './config/db';
import userRouter from './routes/userRoute.js';

dotenv.config();

// MONGO CONNECTION

connectToMongoDB(process.env.MONGO_URI);

const app = express();
const port = 3000;
app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.use('/api/user', userRouter);

// Start the server
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
