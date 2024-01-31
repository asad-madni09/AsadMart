const mongoose = require("mongoose");
const ProductModel = require("../model/product.model");

const addProducts = (data) => {
  return ProductModel.create(data);
};

const getProductById = (id)=>
{
    return ProductModel.findById(id)
}

const getAllProducts = () => {
  return ProductModel.find().populate("categoryId").select('-__v');
};


module.exports = {addProducts,getProductById,getAllProducts}
