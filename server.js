require("dotenv").config();
console.log("🔍 Loaded MONGO_URI:", process.env.MONGO_URI);

const express = require("express");
const mongoose = require("mongoose");
const errorMiddleware = require("./src/Middlewares/error-middleware");
const cors = require("cors");
const path = require("path");
const { createServer } = require("http");
const { Server } = require("socket.io");

const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://your-vercel-domain.vercel.app', 'https://your-custom-domain.com'] 
    : "http://localhost:5173",
  methods: "POST, GET, DELETE, PATCH, HEAD, PUT",
  credentials: true,
};

const app = express();
const server = createServer(app);

// Socket.io setup
const io = new Server(server, {
  cors: {
    origin: process.env.NODE_ENV === 'production' 
      ? ['https://your-vercel-domain.vercel.app'] 
      : "http://localhost:5173",
    methods: ["GET", "POST"]
  }
});

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(errorMiddleware);

// ✅ Mount all routes
const routes = require("./src/routes/index");
routes(app, io);

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

// Serve frontend (React build)
const clientDistPath = path.resolve(__dirname, "client", "dist");
app.use(express.static(clientDistPath));

const serveIndexFile = (req, res) => {
  res.sendFile(path.join(clientDistPath, "index.html"));
};

app.get("/*", serveIndexFile);
app.get("/profile", serveIndexFile);
app.get("/projects", serveIndexFile);
app.get("/projects/:id", serveIndexFile);

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

const PORT = process.env.PORT || 5000;

connectDB().then((connected) => {
  if (connected) {
    server.listen(PORT, () => {
      console.log(`🚀 Server is running at http://localhost:${PORT}`);
      console.log(`🔌 Socket.io server is ready`);
    });
  } else {
    console.log("⚠️ Server starting without database connection");
    server.listen(PORT, () => {
      console.log(`🚀 Server is running at http://localhost:${PORT}`);
      console.log(`🔌 Socket.io server is ready`);
    });
  }
});
