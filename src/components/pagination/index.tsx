"use client";
import { Fragment, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { clsx } from "clsx";

import { generatePaginationPages } from "@/utils/generatePaginationPages";

import styles from "./pagination.module.scss";

export const Pagination = ({ totalItems }: { totalItems: number }) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [offset, setOffset] = useState(2);
    const [paginationPages, setPaginationPages] = useState<(number | string)[] | null>(null);

    const currentPage = Number(searchParams.get("page")) || 1;
    const totalPages = Math.ceil(totalItems / 12);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 600) setOffset(1);
            else setOffset(2);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const getPaginationPages = generatePaginationPages(totalPages, currentPage, offset);
        setPaginationPages(getPaginationPages);
    }, [totalPages, currentPage, offset]);

    const setPage = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", pageNumber.toString());
        router.push(`search?${params.toString()}`);
    };

    const pages = paginationPages?.map((page, i) => (
        <Fragment key={i + currentPage}>
            {page === "..." ? (
                <span>...</span>
            ) : (
                <button
                    className={clsx(
                        styles.pagination_item,
                        currentPage === page && styles.pagination_item_active
                    )}
                    onClick={() => setPage(page)}
                >
                    {page}
                </button>
            )}
        </Fragment>
    ));

    return (
        <div className={styles.pagination_wrapper}>
            {currentPage > 1 && (
                <button
                    className={styles.pagination_item}
                    onClick={() => setPage(currentPage - 1)}
                >
                    &lt;
                </button>
            )}

            <div className={styles.pagination_pages}>{pages}</div>

            {currentPage < totalPages && (
                <button
                    className={styles.pagination_item}
                    onClick={() => setPage(currentPage + 1)}
                >
                    &gt;
                </button>
            )}
        </div>
    );
};
