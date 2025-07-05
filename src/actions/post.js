import PostStory from '@/models/Challenge';

export const CreatePost = async (formData,userId)=>{
    

    
const title = formData.get('title');
const content = formData.get('content');
const description = formData.get('description');
const image = formData.get('image');


    'use server'

    try {
   
        const newPost =     await PostStory.create({
            title,
            content,
            description,
            image,
            createdBy:userId
        })  

        return post;
    } catch (error) {
        console.log(error);
        throw error;
    }
}