'use client'
import { Button } from '@/components/ui/button';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default  function  SignInPage() {
  const router = useRouter()
const { data: session, status } = useSession()
console.log(session,status)
if(session?.user?.name){
router.push('/home')
}
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-red-200">
      <div className="bg-white p-10 rounded-2xl shadow-xl text-center max-w-md w-full">
        <h1 className="text-3xl font-bold text-red-600 mb-6">Welcome to Narrax</h1>
        <p className="mb-4 text-gray-600">Login with your Google account to continue</p>
        <Button
           onClick={() => signIn('google', {
  callbackUrl: '/', // or wherever you want
  prompt: 'select_account',  // 👈 forces account chooser
})}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold transition"
        >
          Sign in with Google
        </Button>
      </div>
    </div>
  );
}
