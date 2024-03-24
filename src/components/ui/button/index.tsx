"use client";
import styles from "./button.module.scss";

type ButtonType = "primary" | "secondary";

export const Button = ({
    type,
    children,
    onClick,
}: {
    type: ButtonType;
    children: string;
    onClick?: () => void;
}) => {
    return (
        <button
            className={styles.button}
            data-type={type}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
