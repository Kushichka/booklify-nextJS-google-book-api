"use client";

import Popup from "reactjs-popup";

import styles from "./popOver.module.scss";

export const PopOver = ({ children, title }: { children: JSX.Element; title: string }) => {
    return (
        <Popup
            trigger={children}
            on="hover"
            position="top center"
            offsetY={10}
            arrow={false}
            mouseEnterDelay={0}
        >
            <div className={styles.popOver_title}>{title}</div>
        </Popup>
    );
};
