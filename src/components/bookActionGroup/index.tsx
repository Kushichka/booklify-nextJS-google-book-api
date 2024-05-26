"use client";

import Popup from "reactjs-popup";
import clsx from "clsx";
import { FaPlus } from "react-icons/fa6";

import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { useAllBooks } from "@/hooks/useAllBooks";

import styles from "./bookActionGroup.module.scss";

type TData = {
    id: string;
    title: string;
    isActive: boolean;
};

export const BookActionGroup = ({ bookId }: { bookId: string }) => {
    const { data: books } = useAllBooks();
    const [data, setData] = useState<TData[] | null>(null);

    useEffect(() => {
        if (books) {
            const newData = books.map((item) => {
                return {
                    id: item.id,
                    title: item.title,
                    isActive: item.books?.some((book) => book.id === bookId),
                };
            });
            setData(newData);
        }
    }, [books, bookId]);

    return (
        <div className={styles.bookActionGroup}>
            <Popup
                trigger={
                    <div className={styles.bookActionGroup_button}>
                        <FaPlus />
                        <p>Add to library</p>
                    </div>
                }
                position="top center"
                offsetY={10}
                on="click"
                closeOnDocumentClick
                closeOnEscape
                arrow={false}
            >
                <ul className={styles.bookActionGroup_list}>
                    {data?.map((item) => (
                        <li
                            key={item.id}
                            className={clsx({
                                [styles.bookActionGroup_item]: true,
                                [styles.bookActionGroup_item_active]: item?.isActive,
                            })}
                        >
                            <Button>{item.title}</Button>
                        </li>
                    ))}
                </ul>
            </Popup>
        </div>
    );
};
