import NextAuth from "next-auth";
import type { JWT } from "next-auth/jwt";
import type { Session, User } from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code",
                    scope: "openid email profile https://www.googleapis.com/auth/books",
                },
            },
        }),
    ],
    callbacks: {
        async jwt({ token, account, profile }: { token: JWT; account: any; profile?: any }) {
            if (account) {
                // First login, save the `access_token`, `refresh_token`, and other
                // details into the JWT

                const userProfile: User = {
                    id: token.sub,
                    name: profile?.name,
                    email: profile?.email,
                    image: token?.picture,
                };

                return {
                    access_token: account.access_token,
                    expires_at: account.expires_at,
                    refresh_token: account.refresh_token,
                    user: userProfile,
                };
            } else if (Date.now() < token.expires_at * 1000) {
                // Subsequent logins, if the `access_token` is still valid, return the JWT
                return token;
            } else {
                // Subsequent logins, if the `access_token` has expired, try to refresh it
                if (!token.refresh_token) throw new Error("Missing refresh token");

                try {
                    const response = await fetch("https://oauth2.googleapis.com/token", {
                        headers: { "Content-Type": "application/x-www-form-urlencoded" },
                        body: new URLSearchParams({
                            client_id: process.env.AUTH_GOOGLE_ID!,
                            client_secret: process.env.AUTH_GOOGLE_SECRET!,
                            grant_type: "refresh_token",
                            refresh_token: token.refresh_token!,
                        }),
                        method: "POST",
                    });

                    const responseTokens = await response.json();

                    if (!response.ok) throw responseTokens;

                    return {
                        // Keep the previous token properties
                        ...token,
                        access_token: responseTokens.access_token,
                        expires_at: Math.floor(Date.now() / 1000 + (responseTokens.expires_in as number)),
                        // Fall back to old refresh token, but note that
                        // many providers may only allow using a refresh token once.
                        refresh_token: responseTokens.refresh_token ?? token.refresh_token,
                    };
                } catch (error) {
                    console.error("Error refreshing access token", error);
                    // The error property can be used client-side to handle the refresh token error
                    return { ...token, error: "RefreshAccessTokenError" as const };
                }
            }
        },
        async session({ session, token }: { session: Session; token: JWT }) {
            if (token.user) {
                session.user = token.user as User;
            }
            session.access_token = token.access_token;
            session.error = token.error;

            return session;
        },
    },
});

declare module "next-auth" {
    interface Session {
        access_token?: string;
        error?: "RefreshAccessTokenError";
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        access_token: string;
        expires_at: number;
        refresh_token: string;
        error?: "RefreshAccessTokenError";
    }
}
