import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    user:[{type:mongoose.Schema.Types.ObjectId, ref: 'User'}],
    content:String,
    createdAt:{
        type:Date,
        default:Date.now
    }


})


export default mongoose.model('Post', postSchema)