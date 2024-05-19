"use client";

import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { TBookshelf } from "@/types/bookshelves";
import { useBookshelves } from "@/hooks/useBookshelves";

import styles from "./bookshelvesMenu.module.scss";

export const BookshelvesMenu = ({ bookshelfId }: { bookshelfId: string }) => {
    const { bookshelves } = useBookshelves();
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const clickHandler = (id: string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("bookshelf", id);
        params.set("page", "1");
        router.push(`${pathname}?${params}`);
    };

    return (
        <>
            {bookshelves && (
                <ul className={styles.bookshelves}>
                    {bookshelves.map((bookshelf: TBookshelf) => (
                        <li
                            key={bookshelf.id}
                            onClick={() => clickHandler(bookshelf.id.toString())}
                            className={clsx({
                                [styles.bookshelves_item]: true,
                                [styles.bookshelves_active]: bookshelf.id.toString() === bookshelfId,
                            })}
                        >
                            <p>{bookshelf.title}</p>
                            <p>({bookshelf.volumeCount})</p>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};