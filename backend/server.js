import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { connectDB } from './lib/db.js';
import userRoutes from './routes/user.route.js';

import authRoutes from './routes/auth.route.js';
dotenv.config();

const app = express();
if (process.env.NODE_ENV !== 'production') {
  app.use(
    cors({
      origin: 'http://localhost:5173',
      credentials: true,
    })
  );
}
const PORT = process.env.PORT || 5000;

app.use(cookieParser());
app.use(express.json({ limit: '5mb' }));

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
