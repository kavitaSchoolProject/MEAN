const mongoose=require("mongoose");
const { Schema } = mongoose;
const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    isAdmin:Boolean
})

module.exports = mongoose.model('User', userSchema);
