
import { NextAuthOptions } from "next-auth"
import GoogleProvider from 'next-auth/providers/google';
import { getServerSession } from "next-auth";


export const authOptions: NextAuthOptions = {
  providers: [
     GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/sign-in", // Optional
  },
}





 export const session = async () => {
  const session = await getServerSession(authOptions);
  return session;
};