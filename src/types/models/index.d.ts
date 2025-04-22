import type { IconType } from "react-icons/lib";

/*------------------------------MENU ------------------------------*/

export declare type AccountActionItem = {
    onClick: () => void;
    icon: IconType;
    label: string;
};

export declare type MenuItem = {
    icon2?: IconType;
    icon?: IconType;
    label: string;
    link?: string;
};

export declare type MenuItemGroup = MenuItem[];

export declare type MenuItemGroups = MenuItemGroup[];

/*------------------------------SHADCN ------------------------------*/

export declare type SidebarState = "expanded" | "collapsed";

/*------------------------------THEME ------------------------------*/

export type Theme = "light" | "dark" | "system";

export type ThemeButton = { id: Theme };

export declare type ThemeMenuItem = MenuItem & {
    themes: ThemeButton[];
    label: string;
};

export * from "./modules";
