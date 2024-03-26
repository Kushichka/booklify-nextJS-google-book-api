import { useRouter } from "next/navigation";

import { BackNavigationRole, BackNavigationRoute } from "@/types/backNavigationRole";

export const useBackNavigation = () => {
    const router = useRouter();

    const routeHandler = (route: BackNavigationRoute, replace: boolean) => {
        if (!route) return;

        if (route === "home") {
            // console.log(route, replace);
            replace ? router.replace("/") : router.push("/");
        } else if (route === "back") {
            // replace does not work with back and forward
            router.back();
        } else if (route === "forward") {
            // replace does not work with back and forward
            router.forward();
        } else replace ? router.replace(route) : router.push(route);
    };

    const backNavigate: BackNavigationRole = (to, replace) => {
        routeHandler(to, replace || false);
    };

    return { backNavigate };
};
