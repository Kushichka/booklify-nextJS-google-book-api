import { Logo } from "@/components/ui/logo";
import { ProfileGroup } from "../profileGroup";

import styles from "./header.module.scss";

export const Header = () => {
    return (
        <header className={styles.wrapper}>
            <div className="container">
                <div className={styles.header}>
                    <Logo />
                    <ProfileGroup />
                </div>
            </div>
        </header>
    );
};
