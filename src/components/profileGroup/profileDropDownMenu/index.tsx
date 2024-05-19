"use client";

import Popup from "reactjs-popup";
import { useRouter, useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

import styles from "./profileDropDownMenu.module.scss";

type ProfileDropDownMenuProps = JSX.Element | ((isOpen: boolean) => JSX.Element) | undefined;

export const ProfileDropDownMenu = ({ trigger }: { trigger: ProfileDropDownMenuProps }) => {
    const searchParam = useSearchParams();
    const router = useRouter();
    const handleMyLibraryClick = () => {
        const params = new URLSearchParams(searchParam.toString());
        params.set("bookshelf", "0");
        params.set("page", "1");
        router.push(`myLibrary?${params}`);
    };

    const handleSignOut = () => {
        signOut({ callbackUrl: "/" });
    };
    return (
        <Popup
            trigger={trigger}
            position="bottom right"
            on="click"
            closeOnEscape
            closeOnDocumentClick
            arrow={false}
            offsetY={13}
        >
            <div className={styles.wrapper}>
                <Button
                    variant="tertiary"
                    clickHandler={handleMyLibraryClick}
                >
                    My Library
                </Button>

                <Button
                    variant="tertiary"
                    clickHandler={handleSignOut}
                >
                    Signout
                </Button>
            </div>
        </Popup>
    );
};
