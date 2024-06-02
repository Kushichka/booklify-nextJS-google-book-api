"use client";

import { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { FaPlus } from "react-icons/fa6";
import { ImSpinner2 } from "react-icons/im";

import { useAllBooks } from "@/hooks/useAllBooks";
import { BookActionGroupList } from "./bookActionGroupList";

import styles from "./bookActionGroup.module.scss";

type Data = {
    id: string;
    title: string;
    isActive: boolean;
};

export const BookActionGroup = () => {
    const session = useSession();
    const searchParams = useSearchParams();
    const bookId = searchParams.get("id") as string;
    const { fetchBooks, isLoading } = useAllBooks();
    const [data, setData] = useState<Data[] | null>(null);

    useEffect(() => {
        if (session.status === "authenticated" && bookId) {
            fetchBooks().then((books) => {
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
            });
        }
    }, [session, bookId, fetchBooks]);

    return (
        <div className={styles.bookActionGroup}>
            <Popup
                trigger={
                    <div className={styles.bookActionGroup_button}>
                        {isLoading ? <ImSpinner2 className={styles.bookActionGroup_spinner} /> : <FaPlus />}
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
                {data && <BookActionGroupList data={data} />}
            </Popup>
        </div>
    );
};
