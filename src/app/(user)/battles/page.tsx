'use client'
import { useSession } from "next-auth/react";

export default function BattlePage (){
  const { data: session } = useSession();

  console.log(session);
  /*
  {
    user: {
      name: 'XyonX YT',
      email: 'tosibahabiba@gmail.com',
      image: '...',
      id: '664dcb7bfc13ae2a2c0001df', // ← now you should see this!
      role: 'user'
    },
    expires: '...'
  }
  */
 return null
};
