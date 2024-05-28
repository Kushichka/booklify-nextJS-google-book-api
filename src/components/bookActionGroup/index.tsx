"use client";

import Popup from "reactjs-popup";
import { useSession } from "next-auth/react";
import clsx from "clsx";
import { FaPlus } from "react-icons/fa6";
import { ImSpinner2 } from "react-icons/im";

import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { useAllBooks } from "@/hooks/useAllBooks";

import styles from "./bookActionGroup.module.scss";

type Data = {
    id: string;
    title: string;
    isActive: boolean;
};

export const BookActionGroup = ({ bookId }: { bookId: string }) => {
    const session = useSession();
    const { data: books } = useAllBooks();
    const [data, setData] = useState<Data[] | null>(null);

    useEffect(() => {
        if (session.status === "authenticated" && books) {
            const newData = books.map((item) => {
                return {
                    id: item.id,
                    title: item.title,
                    isActive: item.books?.some((book) => book.id === bookId),
                };
            });
            setData(newData);
        }
    }, [books, bookId, session.status]);

    if (session?.status === "authenticated" && !data) {
        return (
            <div className={styles.bookActionGroup_button}>
                <ImSpinner2 className={styles.bookActionGroup_spinner} />
                <p>Add to library</p>
            </div>
        );
    }

    return (
        <div className={styles.bookActionGroup}>
            <Popup
                trigger={
                    <div className={styles.bookActionGroup_button}>
                        <FaPlus />
                        <p>Add to library</p>
                    </div>
                }
                disabled={!data}
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
