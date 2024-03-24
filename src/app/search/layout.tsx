import { Suspense } from "react";

import SearchPageSkeleton from "@/components/ui/searchPageSkeleton";

export default function SearchPageLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <Suspense fallback={<SearchPageSkeleton />}>{children}</Suspense>;
}
