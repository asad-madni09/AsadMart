const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  categoryName: { type: String, unique: true, required: true,lowercase:true },
  count :{type:Number,default:0},
  status :{type:Boolean,default:true}

});

const categoryModel = mongoose.model("categories", categorySchema);
module.exports = categoryModel;
