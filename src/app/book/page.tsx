import { fetchBookById } from "@/api/fetchBookById";
import { NoResultsFound } from "@/components/noResultsFound";
import { BackNavigation } from "@/components/ui/backNavigation";
import { Book } from "@/components/book";

import styles from "./bookPage.module.scss";

export default async function BookPage({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const book = await fetchBookById(searchParams.id as string);

    if (!book || (book && Object.entries(book).length === 0)) {
        return <NoResultsFound />;
    }

    return (
        <section className={styles.wrapper}>
            <BackNavigation
                name="< Back"
                href="back"
            />

            {book?.volumeInfo && <Book book={book} />}
        </section>
    );
}
