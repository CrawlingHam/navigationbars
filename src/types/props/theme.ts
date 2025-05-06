import type { MenuItem } from "../models";

export declare type ItemProps = { itemIndex: number; item: MenuItem };

export declare type ThemeSelectorProps = ItemProps & {
    toggleThemeMenu: () => void;
    themeMenuOpen: boolean;
};
