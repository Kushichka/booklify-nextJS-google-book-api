"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { clsx } from "clsx";
import { IconContext } from "react-icons";
import { LuSearch } from "react-icons/lu";

import styles from "./searchBox.module.scss";

export const SearchBox = () => {
    const [isActive, setIsActive] = useState(false);
    const [searchValue, setSearchValue] = useState("");

    const searchParams = useSearchParams();
    const router = useRouter();

    const handleFocus = () => setIsActive(true);
    const handleBlur = () => setIsActive(false);
    const handleClear = () => setSearchValue("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    const handlePressKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const params = new URLSearchParams(searchParams.toString());
        if (event.key === "Enter") {
            if (searchValue) {
                params.set("by", "title");
                params.set("q", searchValue);
                params.set("page", "1");
            } else {
                params.delete("q");
            }
            router.push(`search?${params}`);
        }
    };

    return (
        <IconContext.Provider value={{ size: "1.5rem" }}>
            <div className={clsx(styles.wrapper, isActive && styles.active)}>
                <LuSearch />
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Search for a book..."
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    onKeyDown={handlePressKey}
                    value={searchValue}
                />
                <div
                    className={clsx(styles.close_btn, isActive && styles.active)}
                    onClick={handleClear}
                >
                    &times;
                </div>
            </div>
        </IconContext.Provider>
    );
};
