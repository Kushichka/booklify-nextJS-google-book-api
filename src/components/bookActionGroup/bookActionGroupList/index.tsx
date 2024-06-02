"use client";

import clsx from "clsx";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { useBookshelf } from "@/hooks/useBookshelf";

import styles from "./bookActionGroupList.module.scss";

type Data = {
    id: string;
    title: string;
    isActive: boolean;
};

export const BookActionGroupList = ({
    data,
    getAllBooks,
}: {
    data: Data[];
    getAllBooks: () => Promise<void>;
}) => {
    const { removeBook, addBook } = useBookshelf();
    const searchParams = useSearchParams();
    const bookId = searchParams.get("id") as string;

    const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
        const target = event.target as HTMLButtonElement;
        if (!target.parentElement) return null;

        if (target.parentElement.classList.contains(styles.bookActionGroupList_active)) {
            await removeBook({ bookId, shelfId: target.parentElement.id });
        } else {
            await addBook({ bookId, shelfId: target.parentElement.id });
        }
        await getAllBooks();
    };

    return (
        <ul className={styles.bookActionGroupList}>
            {data?.map((item) => (
                <li
                    key={item.id}
                    id={item.id}
                    className={clsx({
                        [styles.bookActionGroupList_item]: true,
                        [styles.bookActionGroupList_active]: item?.isActive,
                    })}
                >
                    <Button clickHandler={handleClick}>{item.title}</Button>
                </li>
            ))}
        </ul>
    );
};
