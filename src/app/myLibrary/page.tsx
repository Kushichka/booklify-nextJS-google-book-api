import { redirect } from "next/navigation";

import { auth } from "@/auth";
import { BookshelfContent } from "@/components/bookshelfContent";
import { BookshelvesMenu } from "@/components/bookshelvesMenu";
import { fetchBookshelf } from "@/api/fetchBookshelf";
import { getStartIndex } from "@/utils/getStartIndex";
import { fetchBookshelves } from "@/api/fetchBookshelves";

import styles from "./myLibrary.module.scss";

export default async function MyLibrary({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const session = await auth();
    if (!session?.user) {
        return redirect("/");
    }

    const bookshelfId = searchParams.bookshelf as string;
    const page = searchParams.page as string;
    const startIndex = getStartIndex(page);
    const token = session.access_token!;

    const [books, bookshelves] = await Promise.all([
        fetchBookshelf({ token, id: bookshelfId, startIndex }),
        fetchBookshelves(token),
    ]);

    return (
        <section className={styles.myLibrary}>
            <BookshelvesMenu
                bookshelves={bookshelves}
                bookshelfId={bookshelfId}
            />
            <BookshelfContent books={books} />
        </section>
    );
}
