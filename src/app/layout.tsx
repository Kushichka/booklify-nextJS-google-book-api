import { Suspense } from "react";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import { Header } from "@/components/header";
import Loading from "./loading";

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
        <html lang="en">
            <body className={roboto.className}>
                <Header />
                <main className="container">
                    <Suspense fallback={<Loading />}>{children}</Suspense>
                </main>
            </body>
        </html>
    );
}
