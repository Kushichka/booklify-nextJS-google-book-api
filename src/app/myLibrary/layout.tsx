import { Suspense } from "react";

import { MyLibrarySkeleton } from "@/components/ui/myLibrarySkeleton";

export default function MyLibraryPageLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <Suspense fallback={<MyLibrarySkeleton />}>{children}</Suspense>;
}
