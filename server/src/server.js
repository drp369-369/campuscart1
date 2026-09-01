// Server - Main Express Application
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/database.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
connectDB();

// Routes
app.use('/api/auth', (req, res) => {
  res.json({ message: 'Auth routes coming soon' });
});

app.use('/api/listings', (req, res) => {
  res.json({ message: 'Listings routes coming soon' });
});

app.use('/api/categories', (req, res) => {
  res.json({ message: 'Categories routes coming soon' });
});

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
