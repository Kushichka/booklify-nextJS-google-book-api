"use client";

import { useSession, signIn } from "next-auth/react";
import Image from "next/image";

import { Button } from "../ui/button";
import { ProfileDropDownMenu } from "./profileDropDownMenu";

import styles from "./profileGroup.module.scss";

export const ProfileGroup = () => {
    const session = useSession();

    if (!session?.data?.user) {
        return (
            <Button
                type="submit"
                variant="secondary"
                clickHandler={() => signIn("google")}
            >
                Sign in
            </Button>
        );
    }

    return (
        <ProfileDropDownMenu
            trigger={
                <div className={styles.profile_wrapper}>
                    <p className={styles.profile_name}>{session.data.user.name}</p>
                    <Image
                        width="30"
                        height="30"
                        className={styles.profile_image}
                        src={(session.data.user as { picture: string }).picture || ""}
                        alt="Profile image"
                    />
                </div>
            }
        />
    );
};
