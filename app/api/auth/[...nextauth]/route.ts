import NextAuth from "next-auth/next";
import Auth0Provider from 'next-auth/providers/auth0';
import SpotifyProvider from "next-auth/providers/spotify"
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma"
import { randomBytes } from 'crypto';

export const authOptions = {
    adapter : PrismaAdapter(prisma),
    providers : [
        Auth0Provider({
            clientId : process.env.AUTH0_CLIENT_ID || '',
            clientSecret : process.env.AUTH0_CLIENT_SECRET || '',
            issuer : process.env.AUTH0_ISSUER_BASE_URL || ''
        }),
        SpotifyProvider({
            clientId : process.env.SPOTIFY_CLIENT_ID || '',
            clientSecret : process.env.SPOTIFY_CLIENT_SECRET || '',
        })
    ],
    secret : process.env.NEXT_AUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }