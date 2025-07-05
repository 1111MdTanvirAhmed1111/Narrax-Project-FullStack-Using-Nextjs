import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  username:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    required:true,
    unique:true,
  },
  
 



  role:{
    type:String,
    enum:['user','admin'],
    default:'user',
  },

  profilePicture:{
    type:String,
    default:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
  },

  profileCover:{
    type:String,
    default:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
  },
  

  followers:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
  }],
  following:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
  }],
})

const User = mongoose.model('User',userSchema) || mongoose.models.User

export default User
