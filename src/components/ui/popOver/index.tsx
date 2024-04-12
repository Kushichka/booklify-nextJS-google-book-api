"use client";
import React, { useState } from "react";
import clsx from "clsx";

import styles from "./popOver.module.scss";

export const PopOver = ({ children, title }: { children: JSX.Element; title: string }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <>
            <div className={clsx(styles.popOver_title, !isHovered && styles.popOver_hide)}>{title}</div>
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={styles.popOver_children}
            >
                {children}
            </div>
        </>
    );
};
