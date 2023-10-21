// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Create server application
const app = express();

// Middleware for parsing JSON and form data and adding CORS headers
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

// Import routes
const productsRoutes = require('./routes/products');
const categoriesRoutes = require('./routes/categories');

// Routes middleware
app.use('/products', productsRoutes);
app.use('/categories', categoriesRoutes);

// Define a root route directly here
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Marketplace' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
 
// // arcanthedeveloper  ID
// // WgN5aJhcTq8rH0o0  Password