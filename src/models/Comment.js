import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema({
 createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PostStory',
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
})

const Comment = mongoose.model('Comment', commentSchema) || mongoose.models.Comment

export default Comment
