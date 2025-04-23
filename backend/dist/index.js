"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const config_1 = require("./config");
const database_1 = require("./config/database");
const analytics_routes_1 = __importDefault(require("./routes/analytics.routes"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const dashboard_routes_1 = __importDefault(require("./routes/dashboard.routes"));
// Initialize express app
const app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('dev'));
// Routes
app.use('/api/analytics', analytics_routes_1.default);
app.use('/api/users', user_routes_1.default);
app.use('/api/auth', auth_routes_1.default);
app.use('/api/dashboard', dashboard_routes_1.default);
// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', message: 'Server is running' });
});
// Start server
const PORT = config_1.config.port;
app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`);
    // Connect to MongoDB
    try {
        await (0, database_1.connectDatabase)();
        console.log('Connected to database');
    }
    catch (error) {
        console.error('Failed to connect to database:', error);
    }
});
//# sourceMappingURL=index.js.map