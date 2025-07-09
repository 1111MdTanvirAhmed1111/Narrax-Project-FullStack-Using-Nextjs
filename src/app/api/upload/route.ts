import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async signIn({ user }) {
      await dbConnect();

      const existingUser = await User.findOne({ email: user.email });

      if (!existingUser) {
        await User.create({
          name: user.name,
          email: user.email,
          image: user.image,
          role: 'user',
        });
      }

      return true;
    },

    async jwt({ token, user }) {
      await dbConnect();

      if (user) {
        // This only runs on initial login
        const dbUser = await User.findOne({ email: user.email });
        token.id = dbUser._id.toString(); // Ensure it's a string
        token.role = dbUser.role;
      }

      return token;
    },

    async session({ session, token }) {
      // Ensure these values are carried over to the session object
      if (session?.user) {
        session.user.id = token.id || null;
        session.user.role = token.role || 'user';
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
