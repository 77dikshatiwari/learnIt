import mongoose, {Schema} from "mongoose";

const likeSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    news: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "News"
    }

}, {timestamps: true})

export const Like = mongoose.model("Like", likeSchema)