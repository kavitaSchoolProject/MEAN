const mongoose=require("mongoose");
const { Schema } = mongoose;
const productsSchema = new Schema({
   name: String,
   shortDescription:String,
   description:String,
   purchasePrice:Number,
   sellingPrice:Number,
   images:Array(String),
   categroyId:{type:Schema.Types.ObjectIs, ref:categries},
 
})

const Products= mongoose.model('products', productsSchema);

module.exports = Products;

