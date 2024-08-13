const mongoose=require("mongoose");
const { Schema } = mongoose;
const orderSchema = new Schema({
   date:Date,
   items:Array(any),
   status:Number
 
})

const Orders= mongoose.model('products', orderSchema);

module.exports = Orders;

 