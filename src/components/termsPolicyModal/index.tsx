"use client";

import { useEffect, useState } from "react";

import { Modal } from "../ui/modal";

import styles from "./termsPolicyModal.module.scss";
import Link from "next/link";

export const TermsPolicyModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => {
        setIsOpen(false);
        localStorage.setItem("termsPolicy", "accepted");
    };
    const handleOpen = () => setIsOpen(true);

    useEffect(() => {
        localStorage.getItem("termsPolicy") || handleOpen();
    }, []);

    return (
        <Modal
            isOpen={isOpen}
            handleClose={handleClose}
        >
            <h4 className={styles.termsPolicy_title}>This website uses cookies</h4>
            <p className={styles.termsPolicy_description}>
                We use cookies to enhance your browsing experience, analyze site traffic, and personalize
                content. By continuing to use our site, you consent to our use of cookies. For more
                information, please review our&nbsp;
                <strong>
                    <Link href="/privacy">Privacy Policy</Link>
                </strong>{" "}
                and&nbsp;
                <strong>
                    <Link href="/terms">Terms of Use</Link>
                </strong>
                .
            </p>
        </Modal>
    );
};
