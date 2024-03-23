import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";

import styles from "./header.module.scss";

export const Header = () => {
    return (
        <header className={styles.wrapper}>
            <div className="container">
                <div className={styles.header}>
                    <Logo />
                    <Button type="secondary">Sign in</Button>
                </div>
            </div>
        </header>
    );
};
