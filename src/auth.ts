import NextAuth from "next-auth";
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
        async jwt({ token, account }) {
            if (account) {
                // Save the access token and refresh token in the JWT on the initial login, as well as the user details
                return {
                    access_token: account.access_token,
                    expires_at: account.expires_at,
                    refresh_token: account.refresh_token,
                    user: token,
                };
            } else if (Date.now() < (token.expires_at as number) * 1000) {
                // If the access token has not expired yet, return it
                return token;
            } else {
                if (!token.refresh_token) throw new Error("Missing refresh token");

                // If the access token has expired, try to refresh it
                try {
                    // https://accounts.google.com/.well-known/openid-configuration
                    // We need the `token_endpoint`.
                    const response = await fetch("https://oauth2.googleapis.com/token", {
                        headers: { "Content-Type": "application/x-www-form-urlencoded" },
                        body: new URLSearchParams({
                            client_id: process.env.AUTH_GOOGLE_ID!,
                            client_secret: process.env.AUTH_GOOGLE_SECRET!,
                            grant_type: "refresh_token",
                            refresh_token: token.refresh_token as string, // Cast refresh_token to string
                        }),
                        method: "POST",
                    });

                    const tokens = await response.json();

                    if (!response.ok) throw tokens;

                    return {
                        ...token, // Keep the previous token properties
                        access_token: tokens.access_token,
                        expires_at: Math.floor(Date.now() / 1000 + tokens.expires_in),
                        // Fall back to old refresh token, but note that
                        // many providers may only allow using a refresh token once.
                        refresh_token: tokens.refresh_token ?? token.refresh_token,
                    };
                } catch (error) {
                    console.error("Error refreshing access token", error);
                    // The error property will be used client-side to handle the refresh token error
                    return { ...token, error: "RefreshAccessTokenError" as const };
                }
            }
        },
        async session({ session, token }) {
            session.error = token.error as "RefreshAccessTokenError" | undefined;
            return {
                ...session,
                ...token,
            };
        },
    },
});

declare module "next-auth" {
    interface Session {
        access_token?: string;
        expires_at?: number;
        refresh_token?: string;
        error?: "RefreshAccessTokenError";
    }
}
