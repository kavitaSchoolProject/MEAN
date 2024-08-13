const mongoose=require("mongoose");
const { Schema } = mongoose;
const wishlistSchema = new Schema({
   userId:{type:Schema.Types.ObjectIs, ref:user},
   productId:Array(Sting)
 
})

const Wishlist= mongoose.model('products', wishlistSchema);

module.exports = Wishlist

 