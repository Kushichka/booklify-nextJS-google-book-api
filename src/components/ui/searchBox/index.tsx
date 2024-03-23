"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { clsx } from "clsx";

import { LuSearch } from "react-icons/lu";
import { IconContext } from "react-icons";

import styles from "./searchBox.module.scss";

export const SearchBox = ({ width }: { width?: string }) => {
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
        const params = new URLSearchParams(searchParams);
        if (event.key === "Enter") {
            if (searchValue) {
                params.set("q", searchValue);
                router.push(`search?${params.toString()}`);
            } else {
                params.delete("q");
            }
        }
    };

    return (
        <IconContext.Provider value={{ size: "1.5rem" }}>
            <div
                className={clsx(styles.wrapper, isActive && styles.active)}
                style={{ width: width }}
            >
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
                    // defaultValue={searchParams.get("q")?.toString()}
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
