export type BackNavigationOptions = boolean & false;

export type BackNavigationRoute = "back" | "forward" | "home" | string;

export type BackNavigationRole = (to: BackNavigationRoute, replace?: boolean) => void;
