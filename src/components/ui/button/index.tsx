"use client";

import styles from "./button.module.scss";

type ButtonProps = {
    children: string;
    type?: "button" | "reset" | "submit";
    variant?: "primary" | "secondary" | "tertiary";
    clickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => Promise<void | null>;
};

export const Button = ({ type, children, variant, clickHandler }: ButtonProps) => {
    const click = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (clickHandler) {
            clickHandler(event);
        }
    };
    return (
        <button
            type={type}
            className={styles.button}
            data-type={variant}
            onClick={click}
        >
            {children}
        </button>
    );
};
