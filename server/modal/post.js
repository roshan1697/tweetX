import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    createdBy:String,
    content:String,
    createdAt:{
        type:Date,
        default:Date.now
    }


})


export default mongoose.model('Post', postSchema)