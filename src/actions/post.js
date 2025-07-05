import PostStory from '@/models/Challenge';

export const CreatePost = async (formData)=>{
    
    'use server'

    try {
        const post = await PostStory.create(formData);
        return post;
    } catch (error) {
        console.log(error);
        throw error;
    }
}