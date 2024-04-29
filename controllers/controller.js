const Product = require("../models/model.js"); // Importing the Product model

// Controller function to get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({}); // Finding all products
    res.status(200).json(products); // Sending the products as a JSON response
  } catch (error) {
    res.status(500).json({ message: error.message }); // Handling errors
  }
};

// Controller function to get a specific product by ID
const getProduct = async (req, res) => {
  try {
    const { id } = req.params; // Extracting the product ID from the request parameters
    const product = await Product.findById(id); // Finding the product by ID
    res.status(200).json(product); // Sending the product as a JSON response
  } catch (error) {
    res.status(500).json({ message: error.message }); // Handling errors
  }
};

// Controller function to create a new product
const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body); // Creating a new product from the request body
    res.status(200).json(product); // Sending the created product as a JSON response
  } catch (error) {
    res.status(500).json({ message: error.message }); // Handling errors
  }
};

// Controller function to update a product
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params; // Extracting the product ID from the request parameters
    const product = await Product.findByIdAndUpdate(id, req.body); // Finding and updating the product
    if (!product) {
      return res.status(404).json({ message: "Product not found" }); // Handling case where product is not found
    }
    const updatedProduct = await Product.findById(id); // Finding the updated product
    res.status(200).json(updatedProduct); // Sending the updated product as a JSON response
  } catch (error) {
    res.status(500).json({ message: error.message }); // Handling errors
  }
};

// Controller function to delete a product
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params; // Extracting the product ID from the request parameters
    const product = await Product.findByIdAndDelete(id); // Finding and deleting the product
    if (!product) {
      return res.status(404).json({ message: "Product not found" }); // Handling case where product is not found
    }
    res.status(200).json({ message: "Product deleted successfully" }); // Sending success message
  } catch (error) {
    res.status(500).json({ message: error.message }); // Handling errors
  }
};

// Exporting all controller functions
module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
