const mongoose = require("mongoose");

const categoryModel = require("../model/category.model");

const addCategory = (data) => {
  return categoryModel.create(data);
};

const getAllCategories=()=>
{
  return categoryModel.find()
}

const getCategoryById =(id)=>
{
  return categoryModel.findById(id)
}
module.exports = { addCategory,getAllCategories ,getCategoryById};
