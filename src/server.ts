import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

const corsOptions = {
	origin: '*', // Allow all origins. You can restrict this to specific domains.
	methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these HTTP methods
	allowedHeaders: ['Content-Type', 'Authorization'], // Allow these headers
};

app.use(cors(corsOptions));

app.use(express.json());

// Basic route
app.get('/', (req: Request, res: Response) => {
	res.send('Hello, TypeScript with Express!');
});

// Start the server
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
