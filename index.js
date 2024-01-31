const express = require("express");
const app = express();
app.use(express.json());

const mongoose = require("mongoose");
const {
  addProducts,
  getById,
  getAllProducts,
} = require("./controller/product.controller");
const {
  addCategory,
  getAllCategories,
  getCategoryById
} = require("./controller/category.controller");
mongoose.connect("mongodb://localhost:27017/projectJiomart");

app.post("/category", addCategory);
app.get("/category", getAllCategories);
app.get('/category/:id',getCategoryById)

app.post("/products", addProducts);

app.get("/product/:id", getById);

app.get("/products", getAllProducts);

app.listen(8006);
console.log("App listening on ", 8006);
