import type { IconType } from "react-icons/lib";
import { SavedAccount } from "./user";

export declare type MenuItem = {
    savedAccounts?: SavedAccount[];
    icon2?: IconType;
    icon?: IconType;
    label: string;
    link?: string;
};

export declare type MenuItemGroup = MenuItem[];
export declare type MenuItemGroups = MenuItemGroup[];
