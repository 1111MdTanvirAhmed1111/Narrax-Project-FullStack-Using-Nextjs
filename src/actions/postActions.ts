'use server'
import { session } from '@/lib/auth';
import { imageUpload } from '@/lib/ImageUpload';
import Story from '@/models/Story';
import { revalidatePath } from 'next/cache';


export const createPost = async (userId:string,formData: FormData) => {
  const file = formData.get('image') as File;
  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const content = formData.get('content') as string;



  




  try {

    if(!userId){
      throw new Error('User not authenticated');
    }

    const post = await Story.create({
      createdBy: userId,
      title,
      description,
      content,  

    });
    if(file){
  const imageUrl = await imageUpload(file)
      post.image = imageUrl;
      await post.save();
    }

    console.log(post)
    revalidatePath('/home')
return post

  } catch (error) {
    console.log(error)
  }

return null
  
};


export const getPosts = async () => {
return await Story.find().populate('createdBy').sort({createdAt:-1})
};

