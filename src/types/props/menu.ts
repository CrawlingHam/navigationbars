import type { MenuItemGroups, MenuItemGroup } from "../models";
import type { ThemeSelectorProps, ItemProps } from "../props";
import type { Profile } from "flixburst-zod";

export declare type MenuTriggerProps = {
    profile: Profile | undefined;
};

export declare type MenuItemsProps = ItemProps & {
    toggleAccountMenu: () => void;
    toggleThemeMenu: () => void;
};

export declare type MenuContentItemsProps = ThemeSelectorProps & MenuItemsProps;

export declare type MenuContentGroupProps = Omit<MenuContentItemsProps, "themes" | "itemIndex" | "item"> & {
    group: MenuItemGroup;
};

export declare type MenuContentProps = Omit<MenuContentGroupProps, "group"> & {
    groups: MenuItemGroups;
};

export declare type NavigationbarMenuProps = MenuContentProps & {
    profile?: Profile | undefined;
    toggleNavbarMenu: () => void;
    navbarMenuOpen: boolean;
};
