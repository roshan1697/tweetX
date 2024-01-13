import mongoose from "mongoose";

const user = mongoose.Schema({
    name:String,
    email:String,
    password:String,
    profileimg:String,
    followers:[{type:mongoose.Schema.Types.ObjectId, ref:'User'}],
    following:[{type:mongoose.Schema.Types.ObjectId, ref:'User'}],
})

export default mongoose.model('User', user)