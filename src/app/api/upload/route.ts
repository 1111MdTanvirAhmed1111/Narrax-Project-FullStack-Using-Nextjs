import NextAuth, { Session } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';

// Define a custom session interface to include id and role
interface CustomSession extends Session {
  user: {
    id?: string;
    role?: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
}

// Ensure environment variables are defined
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET) {
  throw new Error('Missing Google OAuth environment variables. Please set GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET in .env');
}

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async signIn({ user }) {
      try {
        await dbConnect();

        const existingUser = await User.findOne({ email: user.email });

        if (!existingUser) {
          await User.create({
            name: user.name,
            email: user.email,
            image: user.image,
            role: 'user', // Default role
          });
        }

        return true;
      } catch (error) {
        console.error('Error in signIn callback:', error);
        return false;
      }
    },

    async jwt({ token, user }) {
      try {
        await dbConnect();

        if (user?.email) {
          const dbUser = await User.findOne({ email: user.email });

          if (dbUser) {
            token.id = dbUser._id.toString();
            token.role = dbUser.role;
          }
        }

        return token;
      } catch (error) {
        console.error('Error in jwt callback:', error);
        return token;
      }
    },

    async session({ session, token }) {
      const customSession = session as CustomSession;
      if (customSession.user) {
        customSession.user.id = token.id as string | undefined;
        customSession.user.role = token.role as string | undefined;
      }
      return customSession;
    },
  },
});

export { handler as GET, handler as POST };