const mongoose = require("mongoose"); // Importing Mongoose

// Defining the schema for the Product model
const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name"], // Validation rule for name field
    },

    quantity: {
      type: Number,
      required: true,
      default: 0, // Default value for quantity
    },

    price: {
      type: Number,
      required: true,
      default: 0, // Default value for price
    },

    image: {
      type: String,
      required: false, // Image field is not required
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

// Creating the Product model based on the schema
const Product = mongoose.model("Product", ProductSchema);

module.exports = Product; // Exporting the Product model
