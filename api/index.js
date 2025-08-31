require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const errorMiddleware = require("../src/Middlewares/error-middleware");
const cors = require("cors");

const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://your-vercel-domain.vercel.app'] 
    : "http://localhost:5173",
  methods: "POST, GET, DELETE, PATCH, HEAD, PUT",
  credentials: true,
};

const app = express();

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(errorMiddleware);

// ✅ Mount all routes
const routes = require("../src/routes/index");
routes(app, null); // No Socket.io for serverless

// Simple test endpoint (no auth required)
app.get("/api/test", (req, res) => {
  res.json({ 
    message: "Backend is working!", 
    timestamp: new Date().toISOString(),
    status: "success",
    environment: process.env.NODE_ENV || "development"
  });
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ 
    status: "healthy",
    timestamp: new Date().toISOString(),
    mongodb: mongoose.connection.readyState === 1 ? "connected" : "disconnected"
  });
});

// ✅ MongoDB connection
const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB...");
    if (!process.env.MONGO_URI) {
      console.error("❌ MONGO_URI environment variable is not set");
      return false;
    }
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected successfully");
    return true;
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    return false;
  }
};

// Connect to MongoDB
connectDB();

// Export for Vercel serverless
module.exports = app;
