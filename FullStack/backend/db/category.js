const mongoose=require("mongoose");
const { Schema } = mongoose;
const categorySchema = new Schema({
    name: String
  
})

const Category= mongoose.model('categories', categorySchema);

module.exports = Category;
