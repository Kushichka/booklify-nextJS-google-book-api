"use client";
import { useRouter } from "next/navigation";

import { Button } from "../button";

export const GoHomeButton = () => {
    const router = useRouter();

    const clickHandler = () => {
        router.replace("/");
    };
    return (
        <Button
            type="secondary"
            onClick={clickHandler}
        >
            Go Home
        </Button>
    );
};
