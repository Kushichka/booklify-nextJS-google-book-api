import { fetchBooksByTitle } from "@/api/fetchBooksByTitle";
import { BookCard } from "@/components/bookCard";
import { Book } from "@/types/bookData";
import { NoResultsFound } from "@/components/noResultsFound";
import { BackNavigation } from "@/components/ui/backNavigation";
import { Pagination } from "@/components/pagination";

import styles from "./searchPage.module.scss";

export default async function SearchPage({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const books = await fetchBooksByTitle(searchParams.q as string, searchParams.page as string);

    if (!books || (books && (books.totalItems === 0 || !books.items))) {
        return <NoResultsFound />;
    }

    return (
        <section className={styles.wrapper}>
            <BackNavigation
                name="Home"
                href="/"
            />
            <div className={styles.searchList}>
                {books.items.map((book: Book) => (
                    <BookCard
                        book={book}
                        key={book.id}
                    />
                ))}
            </div>
            <Pagination totalItems={books.totalItems} />
        </section>
    );
}
