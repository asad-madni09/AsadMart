const mongoose = require("mongoose");
const Categories = require('../model/category.model')

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, lowercase: true },
  categoryId:{type: mongoose.Schema.Types.ObjectId, required:true,ref:"categories"},
  stock: { type: Number, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
});

let  productModel = mongoose.model("products", productSchema);
module.exports = productModel;
