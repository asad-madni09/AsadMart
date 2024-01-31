const mongoose = require("mongoose");
const ProductService = require("../service/product.service");
const CategoryService = require("../service/category.service");

const addProducts = async function (req, res) {
  const data = req.body;
  const matchedCategory = await CategoryService.getCategoryById(
    data.categoryId
  );
  try {
    // Category exists or not
    if (matchedCategory !== null) {
      if (matchedCategory.status == true) {
        const allProducts = await ProductService.addProducts(data);
        matchedCategory.count += 1;
        await matchedCategory.save();
        res
          .status(200)
          .json({ message: "Item added successfully", allProducts });
      } else return res.json({ message: "This category is NOT ACTIVE" });
    } else {
      return res.json({ message: "CategoryId does not exist" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error while adding data " + error.message });
  }
};

// get product by ID
const getById = async function (req, res) {
  const id = req.params.id;
  try {
    const singleProduct = await ProductService.getProductById(id);
    {
      res.status(200).json({ message: "Here is the product", singleProduct });
    }
  } catch (error) {
    res.status(500).json({ message: "Error while fetching product" });
  }
};
// get all Products

const getAllProducts = async function (req, res) {
  try {
    const allProducts = await ProductService.getAllProducts();
    {
      res.status(200).json({ message: "All Products", allProducts });
    }
  } catch (error) {
    res.status(500).json({ message: "Error while fetching all products" });
  }
};

module.exports = { addProducts, getById, getAllProducts };
