"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFound = exports.errorHandler = exports.ApiError = void 0;
// Interface for API Error
class ApiError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.ApiError = ApiError;
// Error handler middleware
const errorHandler = (err, req, res, next) => {
    // If it's an ApiError, use its status code
    const statusCode = 'statusCode' in err ? err.statusCode : 500;
    const message = err.message || 'Internal server error';
    console.error(`[ERROR] ${statusCode} - ${message}`);
    if (statusCode === 500) {
        console.error(err.stack);
    }
    res.status(statusCode).json({
        success: false,
        message,
        stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
    });
};
exports.errorHandler = errorHandler;
// Not found middleware
const notFound = (req, res, next) => {
    const error = new ApiError(`Not found - ${req.originalUrl}`, 404);
    next(error);
};
exports.notFound = notFound;
//# sourceMappingURL=error.middleware.js.map