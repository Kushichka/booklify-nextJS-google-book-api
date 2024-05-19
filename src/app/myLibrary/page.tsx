import { BookshelfContent } from "@/components/bookshelfContent";
import { BookshelvesMenu } from "@/components/bookshelvesMenu";

import styles from "./myLibrary.module.scss";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function MyLibrary({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const bookshelfId = searchParams.bookshelf as string;
    const page = searchParams.page as string;
    const session = await auth();

    if (!session?.user) {
        return redirect("/");
    }

    return (
        <section className={styles.myLibrary}>
            <BookshelvesMenu bookshelfId={bookshelfId} />
            <BookshelfContent
                bookshelfId={bookshelfId}
                page={page}
            />
        </section>
    );
}
