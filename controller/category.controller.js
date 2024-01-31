const mongoose = require("mongoose");

const categoryService = require("../service/category.service");

const addCategory = async function (req, res) {
  const data = req.body;
  try {
    const allCategories = await categoryService.addCategory(data);
    res.status(200).json({ message: "Category Added", allCategories });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to add Category " + error.message });
  }
};
const getAllCategories = async function (req, res) {
  try {
    const allCategories = await categoryService.getAllCategories();

    res.status(200).json({ message: "Showing All Categories", allCategories });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to show Category " + error.message });
  }
};
const getCategoryById = async function (req, res) {
  const id = req.params.id;
  try {
    const oneCategory = await categoryService.getCategoryById(id);
    res.status(200).json({
      message: "here is the category you searched for ",
      oneCategory,
    });
  } catch (error) {
    res.status(500).json({ message: "failed to get ID" });
  }
};
module.exports = { addCategory, getAllCategories, getCategoryById };
