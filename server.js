// Importing required modules
const express = require("express"); // Express.js for creating server
const mongoose = require("mongoose"); // Mongoose for MongoDB object modeling
const Product = require("./models/model.js"); // Importing the Product model
const productRoute = require("./routes/route.js"); // Importing routes for products
const app = express(); // Creating an instance of the Express application

// Middleware setup
app.use(express.json()); // Parsing incoming JSON data
app.use(express.urlencoded({extended: false})); // Parsing incoming URL-encoded data

// Routing setup
app.use("/api/products", productRoute); // Using product routes for URLs starting with "/api/products"

// Default route
app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated"); // Sending a response for the root URL
});

// Connecting to MongoDB Atlas cluster and starting the server
mongoose
  .connect("mongodb+srv://admin:mdb90ADC@cluster0.hxfvrck.mongodb.net/")
  .then(() => {
    console.log("Connected to database!"); // Success message upon connection
    app.listen(3000, () => {
      console.log("Server is running on port 3000"); // Listening on port 3000 once connected
    });
  })
  .catch(() => {
    console.log("Connection failed!"); // Failure message if connection fails
  });
