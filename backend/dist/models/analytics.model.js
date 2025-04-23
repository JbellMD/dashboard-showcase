"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrafficSource = exports.BrowserData = exports.PlatformData = exports.AnalyticData = void 0;
const mongoose_1 = __importStar(require("mongoose"));
// Create the analytics data points schema
const analyticDataSchema = new mongoose_1.Schema({
    date: {
        type: Date,
        required: true,
    },
    visitors: {
        type: Number,
        required: true,
        default: 0,
    },
    pageViews: {
        type: Number,
        required: true,
        default: 0,
    },
    bounceRate: {
        type: Number,
        required: true,
        default: 0,
    },
    avgSessionDuration: {
        type: Number,
        required: true,
        default: 0,
    },
    newUsers: {
        type: Number,
        required: true,
        default: 0,
    },
    revenue: {
        type: Number,
    },
    conversionRate: {
        type: Number,
    },
}, {
    timestamps: true,
});
// Create the platform data schema
const platformDataSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    value: {
        type: Number,
        required: true,
    },
    percentage: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
});
// Create the browser data schema
const browserDataSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    percentage: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
});
// Create the traffic source schema
const trafficSourceSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    visitors: {
        type: Number,
        required: true,
    },
    percentage: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
});
// Create and export the models
exports.AnalyticData = mongoose_1.default.model('AnalyticData', analyticDataSchema);
exports.PlatformData = mongoose_1.default.model('PlatformData', platformDataSchema);
exports.BrowserData = mongoose_1.default.model('BrowserData', browserDataSchema);
exports.TrafficSource = mongoose_1.default.model('TrafficSource', trafficSourceSchema);
//# sourceMappingURL=analytics.model.js.map