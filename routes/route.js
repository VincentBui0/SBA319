const express = require("express"); // Importing Express.js
const Product = require("../models/model.js"); // Importing the Product model
const router = express.Router(); // Creating a router instance
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/controller.js'); // Importing controller functions

// Route definitions
router.get('/', getProducts); // Route for getting all products
router.get("/:id", getProduct); // Route for getting a specific product by ID

router.post("/", createProduct); // Route for creating a new product

// Route for updating a product
router.put("/:id", updateProduct);

// Route for deleting a product
router.delete("/:id", deleteProduct);

module.exports = router; // Exporting the router
