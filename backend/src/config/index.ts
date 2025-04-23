import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

export const config = {
  // Server configuration
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  
  // Database configuration
  mongoUri: process.env.MONGO_URI || 'mongodb://localhost:27017/dashboard-showcase',
  
  // JWT configuration
  jwtSecret: process.env.JWT_SECRET || 'default-jwt-secret-key-for-dev',
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '1d',
  
  // API configuration
  apiPrefix: process.env.API_PREFIX || '/api',
  
  // CORS configuration
  corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  
  // Logging configuration
  logLevel: process.env.LOG_LEVEL || 'dev',
};
