// pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth';
// import AppleProvider from "next-auth/providers/apple"
// import GoogleProvider from "next-auth/providers/google"
// import EmailProvider from "next-auth/providers/email"

// import {} from 'next-auth'
// import type { Adapter } from 'next-auth/adapters';

// function MyAdapter(): Adapter {
//   return {
//     // your adapter methods here
//   };
// }

// export default NextAuth({
//   secret: process.env.SECRET,
//   providers: [],
// });
import NextAuth from 'next-auth';

export default NextAuth({
  callbacks: {
    session({ session, token, user }) {
      return session; // The return type will match the one returned in `useSession()`
    },
  },
});
