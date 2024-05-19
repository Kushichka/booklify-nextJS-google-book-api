import { Button } from "../button";
import styles from "./modal.module.scss";

export const Modal = ({
    children,
    isOpen,
    handleClose,
}: {
    children: React.ReactNode;
    isOpen: boolean;
    handleClose: () => void;
}) => {
    if (!isOpen) return null;

    return (
        <div className={styles.modal}>
            {children}
            <Button
                variant="secondary"
                clickHandler={handleClose}
            >
                Accept
            </Button>
        </div>
    );
};
