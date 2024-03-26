import { BookCover } from "@/components/ui/bookCover";
import { fetchBookById } from "@/api/fetchBookById";
import { BookPageAbout } from "@/components/bookPageAbout";
import { NoResultsFound } from "@/components/noResultsFound";

import styles from "./bookPage.module.scss";
import { BackNavigation } from "@/components/ui/backNavigation";

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

            {book && (
                <div className={styles.card}>
                    <div className={styles.header}>
                        <h2>{book.volumeInfo.title}</h2>
                    </div>
                    <div className={styles.body}>
                        <div className={styles.cover}>
                            <BookCover
                                src={book.volumeInfo.imageLinks?.thumbnail}
                                height={450}
                                width={300}
                            />
                        </div>
                        {book?.volumeInfo && <BookPageAbout data={book} />}
                    </div>
                </div>
            )}
        </section>
    );
}
