import { SearchBox } from "@/components/ui/searchBox";
import { TermsPolicyModal } from "@/components/termsPolicyModal";

import style from "./home.module.scss";

export default function Home() {
    return (
        <section className={style.wrapper}>
            <SearchBox width="30rem" />
            <TermsPolicyModal />
        </section>
    );
}
