import NextAuth from "next-auth/next";
import Auth0Provider from 'next-auth/providers/auth0';
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma"

export const authOptions = {
    adapter : PrismaAdapter(prisma),
    providers : [
        Auth0Provider({
            clientId : process.env.AUTH0_CLIENT_ID || '',
            clientSecret : process.env.AUTH0_CLIENT_SECRET || '',
            issuer : process.env.AUTH0_ISSUER_BASE_URL || ''
        })
    ],
    secret : process.env.NEXT_AUTH_SECRET
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }

// const handler = NextAuth({
//     adapter : PrismaAdapter(prisma) || '',
//     providers : [
//         Auth0Provider({
//             clientId : process.env.AUTH0_CLIENT_ID || '',
//             clientSecret : process.env.AUTH0_CLIENT_SECRET || '',
//             issuer : process.env.AUTH0_ISSUER_BASE_URL || ''
//         })
//     ],
//     secret : process.env.NEXT_AUTH_SECRET
// });

// export { handler as GET, handler as POST };