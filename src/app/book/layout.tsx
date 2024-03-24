import { Suspense } from "react";

import { BookPageSkeleton } from "@/components/ui/bookPageSkeleton";

export default function BookPageLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <Suspense fallback={<BookPageSkeleton />}>{children}</Suspense>;
}
