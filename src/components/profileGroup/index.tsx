"use client";

import { useSession, signIn } from "next-auth/react";
import Image from "next/image";

import { Button } from "../ui/button";
import { ProfileDropDownMenu } from "./profileDropDownMenu";

import styles from "./profileGroup.module.scss";

export const ProfileGroup = () => {
    const { data } = useSession();

    if (!data?.user) {
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
                    <p className={styles.profile_name}>{data?.user?.name}</p>
                    <Image
                        width="30"
                        height="30"
                        className={styles.profile_image}
                        src={(data.user as { image: string }).image || ""}
                        alt="Profile image"
                    />
                </div>
            }
        />
    );
};
