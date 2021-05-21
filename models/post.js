import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Post = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    username: { type: String, required: true },
  },
  { timestamps: true }
)

export default mongoose.model('posts', Post)