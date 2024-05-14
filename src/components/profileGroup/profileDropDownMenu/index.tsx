"use client";

import Popup from "reactjs-popup";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

import styles from "./profileDropDownMenu.module.scss";

type ProfileDropDownMenuProps = JSX.Element | ((isOpen: boolean) => JSX.Element) | undefined;

export const ProfileDropDownMenu = ({ trigger }: { trigger: ProfileDropDownMenuProps }) => {
    return (
        <Popup
            trigger={trigger}
            position="bottom right"
            on="click"
            closeOnEscape
            arrow={false}
            offsetY={13}
        >
            <div className={styles.wrapper}>
                <Button variant="tertiary">Bookshelf</Button>

                <Button
                    variant="tertiary"
                    clickHandler={signOut}
                >
                    Signout
                </Button>
            </div>
        </Popup>
    );
};
