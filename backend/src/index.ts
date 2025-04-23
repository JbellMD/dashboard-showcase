import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { config } from './config';
import { connectDatabase } from './config/database';
import analyticsRoutes from './routes/analytics.routes';
import userRoutes from './routes/user.routes';
import authRoutes from './routes/auth.routes';
import dashboardRoutes from './routes/dashboard.routes';

// Initialize express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// Routes
app.use('/api/analytics', analyticsRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/dashboard', dashboardRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Server is running' });
});

// Start server
const PORT = config.port;

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  
  // Connect to MongoDB
  try {
    await connectDatabase();
    console.log('Connected to database');
  } catch (error) {
    console.error('Failed to connect to database:', error);
  }
});
