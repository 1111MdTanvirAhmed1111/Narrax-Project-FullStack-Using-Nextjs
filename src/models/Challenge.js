import mongoose from 'mongoose'

const ChallengeStorySchema = new mongoose.Schema({
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  image: {
    type: String,
  },
  Posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'PostStory',
    },
  ],
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
})

const PostStory = mongoose.model('ChallengeStory', ChallengeStorySchema) || mongoose.models.ChallengeStory

export default PostStory
