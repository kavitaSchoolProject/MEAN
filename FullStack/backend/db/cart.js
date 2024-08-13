const mongoose=require("mongoose");
const { Schema } = mongoose;
const cartSchema = new Schema({
   userId:{type:Schema.Types.ObjectIs, ref:user},
   productId:Array(Sting)
 
})

const Cart= mongoose.model('products', cartSchema);

module.exports = Cart

 