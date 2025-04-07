import { MenuItem, MenuItemGroup, MenuItemGroups, SavedAccount } from "../definitions";
import { AccountSwitchProps } from "./account";
import { ThemeSelectorProps } from "./theme";

export declare type ItemProps = {
    itemIndex: number;
    item: MenuItem;
};

export declare type MenuItemsProps = ItemProps & {
    toggleAccountMenu: () => void;
    toggleThemeMenu: () => void;
};

export declare type MenuContentItemsProps = ThemeSelectorProps & AccountSwitchProps & MenuItemsProps;

export declare type MenuContentItemsGroupProps = Omit<MenuContentItemsProps, "themes" | "itemIndex" | "item"> & {
    group: MenuItemGroup;
};

export declare type MenuContentProps = Omit<MenuContentItemsGroupProps, "group"> & {
    groups: MenuItemGroups;
};

export declare type NavigationbarMenuProps = MenuContentProps & {
    savedAccounts: SavedAccount[];
    toggleNavbarMenu: () => void;
    navbarMenuOpen: boolean;
};
