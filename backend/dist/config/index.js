"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
// Load environment variables
dotenv_1.default.config();
exports.config = {
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
//# sourceMappingURL=index.js.map