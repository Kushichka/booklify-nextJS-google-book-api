"use client";
import styles from "./button.module.scss";
import { useBackNavigation } from "@/hooks/useBackNavigation";
import { BackNavigationRoute } from "@/types/backNavigationRole";

type ButtonProps = {
    type: "primary" | "secondary";
    children: string;
    route?: BackNavigationRoute;
    replace?: boolean;
};

export const Button = ({ type, children, route, replace }: ButtonProps) => {
    const { backNavigate } = useBackNavigation();

    const clickHandler = () => {
        if (!route) return;
        backNavigate(route, replace);
    };

    return (
        <button
            className={styles.button}
            data-type={type}
            onClick={clickHandler}
        >
            {children}
        </button>
    );
};
