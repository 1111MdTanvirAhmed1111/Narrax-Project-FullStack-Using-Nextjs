import { redirect } from "next/navigation";
import { session } from '@/lib/auth';

const SessionData = await session();


export const nonAuthRedirect =async  ()=>{
    if(!SessionData){
        redirect('/');
    }
}

export const authRedirect = async () => {
    if(SessionData){
        redirect('/home');
    }
}