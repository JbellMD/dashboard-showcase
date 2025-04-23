"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDatabase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const index_1 = require("./index");
const connectDatabase = async () => {
    try {
        await mongoose_1.default.connect(index_1.config.mongoUri);
        console.log('MongoDB connected successfully');
    }
    catch (error) {
        console.error('MongoDB connection error:', error);
        // Exit process with failure
        process.exit(1);
    }
};
exports.connectDatabase = connectDatabase;
// Handle connection events
mongoose_1.default.connection.on('disconnected', () => {
    console.log('MongoDB disconnected');
});
mongoose_1.default.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});
// Handle application termination
process.on('SIGINT', async () => {
    await mongoose_1.default.connection.close();
    console.log('MongoDB connection closed due to app termination');
    process.exit(0);
});
//# sourceMappingURL=database.js.map