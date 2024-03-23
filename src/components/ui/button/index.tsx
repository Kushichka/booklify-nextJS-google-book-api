import styles from "./button.module.scss";

export const Button = ({ type, children }: { type: string; children: string }) => {
    return (
        <button
            className={styles.button}
            data-type={type}
        >
            {children}
        </button>
    );
};
