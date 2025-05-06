import type { LucideIcon } from "lucide-vue-next";

export declare type AccountActionItem = {
    onClick: () => void;
    icon: LucideIcon;
    label: string;
};

export declare type MenuItem = {
    icon2?: LucideIcon;
    icon?: LucideIcon;
    label: string;
    link?: string;
};

export declare type MenuItemGroup = MenuItem[];

export declare type MenuItemGroups = MenuItemGroup[];
