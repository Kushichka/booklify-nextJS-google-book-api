"use client";

import clsx from "clsx";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

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
    const [loading, setLoading] = useState(false);

    const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
        if (loading) return;
        const target = event.target as HTMLButtonElement;
        if (!target.parentElement) return null;

        setLoading(true);
        if (target.parentElement.classList.contains(styles.bookActionGroupList_active)) {
            await removeBook({ bookId, shelfId: target.parentElement.id });
        } else {
            await addBook({ bookId, shelfId: target.parentElement.id });
        }
        await getAllBooks();
        setLoading(false);
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
                    <Button
                        clickHandler={handleClick}
                        disabled={loading}
                    >
                        {item.title}
                    </Button>
                </li>
            ))}
        </ul>
    );
};
