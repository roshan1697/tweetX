import mongoose from "mongoose";

const user = mongoose.Schema({
    name:String,
    email:String,
    password:String,
    followers:[{type:mongoose.Schema.Types.ObjectId, ref:'User'}],
    following:[{type:mongoose.Schema.Types.ObjectId, ref:'User'}],
    imgURL:String,
    userpost:[{type:mongoose.Schema.Types.ObjectId, ref:'Post'}]
})

export default mongoose.model('User', user)