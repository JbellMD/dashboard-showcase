"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProfile = exports.getMe = exports.login = exports.register = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = require("../models/user.model");
const config_1 = require("../config");
const error_middleware_1 = require("../middlewares/error.middleware");
// Generate JWT token
const generateToken = (id) => {
    return jsonwebtoken_1.default.sign({ id }, config_1.config.jwtSecret, { expiresIn: config_1.config.jwtExpiresIn });
};
// Register a new user
const register = async (req, res, next) => {
    try {
        const { name, email, password, role } = req.body;
        // Check if user already exists
        const userExists = await user_model_1.User.findOne({ email });
        if (userExists) {
            throw new error_middleware_1.ApiError('User already exists', 400);
        }
        // Create new user
        const user = await user_model_1.User.create({
            name,
            email,
            password,
            role: role || 'user', // Default to user role
        });
        // Generate token
        const token = generateToken(String(user._id));
        // Return user data without password
        res.status(201).json({
            success: true,
            data: {
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                token,
            },
        });
    }
    catch (error) {
        next(error);
    }
};
exports.register = register;
// Login user
const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        // Check for user email
        const user = await user_model_1.User.findOne({ email });
        if (!user) {
            throw new error_middleware_1.ApiError('Invalid credentials', 401);
        }
        // Check if password matches
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            throw new error_middleware_1.ApiError('Invalid credentials', 401);
        }
        // Update last login time
        user.lastLogin = new Date();
        await user.save();
        // Generate token
        const token = generateToken(String(user._id));
        res.status(200).json({
            success: true,
            data: {
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                token,
            },
        });
    }
    catch (error) {
        next(error);
    }
};
exports.login = login;
// Get current user profile
const getMe = async (req, res, next) => {
    try {
        const user = await user_model_1.User.findById(req.user._id).select('-password');
        if (!user) {
            throw new error_middleware_1.ApiError('User not found', 404);
        }
        res.status(200).json({
            success: true,
            data: user,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.getMe = getMe;
// Update user profile
const updateProfile = async (req, res, next) => {
    try {
        const { name, jobTitle, location, bio } = req.body;
        // Find user by id
        const user = await user_model_1.User.findById(req.user._id);
        if (!user) {
            throw new error_middleware_1.ApiError('User not found', 404);
        }
        // Update fields
        if (name)
            user.name = name;
        if (jobTitle)
            user.jobTitle = jobTitle;
        if (location)
            user.location = location;
        if (bio)
            user.bio = bio;
        await user.save();
        res.status(200).json({
            success: true,
            data: {
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                jobTitle: user.jobTitle,
                location: user.location,
                bio: user.bio,
            },
        });
    }
    catch (error) {
        next(error);
    }
};
exports.updateProfile = updateProfile;
//# sourceMappingURL=auth.controller.js.map