'use server'
import { session } from '@/lib/auth';
import { imageUpload } from '@/lib/ImageUpload';
import Story from '@/models/Story';


export const createPost = async (userId:string,formData: FormData,) => {



  const file = formData.get('image') as File;
  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const content = formData.get('content') as string;

  if (!file || file.size === 0) {
    throw new Error('No image uploaded');
  }

  const imageUrl = await imageUpload(file);




  try {

    if(!userId){
      throw new Error('User not authenticated');
    }

    const post = await Story.create({
      createdBy: userId,
      title,
      description,
      content,  
      image: imageUrl,
    });

    console.log(post)
return post

  } catch (error) {
    console.log(error)
  }


  
};