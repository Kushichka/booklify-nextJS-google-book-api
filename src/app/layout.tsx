import { Suspense } from "react";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { SessionProvider } from "next-auth/react";

import { Header } from "@/components/header";

import "@/styles/global.scss";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
    title: "Booklify",
    description: "Find your world",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <SessionProvider>
            <html lang="en">
                <body className={roboto.className}>
                    <Header />
                    <main className="container">
                        <Suspense fallback={<div>..Loading</div>}>{children}</Suspense>
                    </main>
                </body>
            </html>
        </SessionProvider>
    );
}
