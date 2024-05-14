"use client";

import styles from "./button.module.scss";

type ButtonProps = {
    children: string;
    type?: "button" | "reset" | "submit";
    variant?: "primary" | "secondary" | "tertiary";
    clickHandler?: () => void;
};

export const Button = ({ type, children, variant, clickHandler }: ButtonProps) => {
    return (
        <button
            type={type}
            className={styles.button}
            data-type={variant}
            onClick={clickHandler}
        >
            {children}
        </button>
    );
};
