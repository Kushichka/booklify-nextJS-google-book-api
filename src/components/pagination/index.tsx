"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { clsx } from "clsx";

import { generatePaginationPages } from "@/utils/generatePaginationPages";

import styles from "./pagination.module.scss";
import { Fragment } from "react";

export const Pagination = ({ totalItems }: { totalItems: number }) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const currentPage = Number(searchParams.get("page")) || 1;
    const totalPages = Math.ceil(totalItems / 12);
    const paginationPages = generatePaginationPages(totalPages, currentPage);

    const setPage = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", pageNumber.toString());
        router.push(`search?${params.toString()}`);
    };

    const pages = paginationPages.map((page, i) => (
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
