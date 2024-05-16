import styles from "./privacy.module.scss";

export default function Privacy() {
    return (
        <div className={styles.privacy}>
            <h2 className={styles.privacy_heading}>Polityka prywatności</h2>
            <div className={styles.privacy_item}>
                <h3 className={styles.privacy_title}>1. Zbieranie informacji</h3>
                <p className={styles.privacy_description}>
                    Szanujemy Twoją prywatność i dążymy do zapewnienia najlepszej jakości korzystania z naszej
                    usługi. Podczas korzystania z interfejsu API Google Books możemy zbierać następujące
                    informacje:
                </p>
                <ol className={styles.privacy_list}>
                    <li className={styles.privacy_list_item}>
                        Informacje dotyczące zapytań do interfejsu API, takie jak zapytania wyszukiwania,
                        identyfikatory książek i inne informacje niezbędne do przetwarzania zapytań.
                    </li>
                </ol>
            </div>
            <div className={styles.privacy_item}>
                <h3 className={styles.privacy_title}>2. Wykorzystywanie informacji</h3>
                <p className={styles.privacy_description}>
                    Wykorzystujemy zebrane informacje wyłącznie w celu świadczenia i ulepszania naszej usługi.
                    Nie sprzedajemy, nie udostępniamy ani nie ujawniamy Twoich informacji osobom trzecim bez
                    Twojej zgody, z wyjątkiem przypadków, gdy jest to konieczne do przestrzegania przepisów
                    prawa lub zapewnienia bezpieczeństwa naszych użytkowników.
                </p>
            </div>
            <div className={styles.privacy_item}>
                <h3 className={styles.privacy_title}>3. Bezpieczeństwo</h3>
                <p className={styles.privacy_description}>
                    Podjęliśmy wszystkie możliwe środki w celu ochrony Twoich informacji przed nieupoważnionym
                    dostępem, wykorzystaniem lub ujawnieniem.
                </p>
            </div>
            <div className={styles.privacy_item}>
                <h3 className={styles.privacy_title}>4. Zgoda na politykę prywatności</h3>
                <p className={styles.privacy_description}>
                    Korzystając z naszej usługi i interakcji z interfejsem API Google Books, wyrażasz zgodę na
                    naszą politykę prywatności.
                </p>
            </div>
            <div className={styles.privacy_item}>
                <h3 className={styles.privacy_title}>5. Zmiany w polityce prywatności</h3>
                <p className={styles.privacy_description}>
                    Zachowujemy sobie prawo do wprowadzania okresowych zmian w naszej polityce prywatności.
                    Zalecamy regularne sprawdzanie tej strony w celu zapoznania się z ewentualnymi
                    aktualizacjami.
                </p>
            </div>
            <div className={styles.privacy_item}>
                <h3 className={styles.privacy_title}>6. Dane kontaktowe</h3>
                <p className={styles.privacy_description}>
                    Jeśli masz pytania lub sugestie dotyczące naszej polityki prywatności, prosimy o kontakt
                    pod adresem &nbsp;
                    <strong>kushichka@gmail.com</strong>.
                </p>
            </div>

            <p className={styles.privacy_description}>Data ostatniej aktualizacji: 16.05.2024</p>
        </div>
    );
}
