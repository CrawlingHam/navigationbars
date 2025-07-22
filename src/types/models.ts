import type { LucideIcon as IconType } from "lucide-vue-next";
import type { Theme } from "flixburst-theme";

export type Profile = {
    username?: string;
    picture?: string;
};

export type Dimensions = [number, number];

export type MenuItemAuthLabel = "Login" | "Logout";
export type MenuItemThemeLabel = "Appearance" | "Theme Settings";
export type MenuItemLabel = MenuItemThemeLabel | "Account" | MenuItemAuthLabel;

export type ThemeButton = { theme: Theme };

export type MenuItem = {
    themes?: ThemeButton[];
    label: MenuItemLabel;
    icon2?: IconType;
    icon?: IconType;
    link?: string;
};

export type ThemeMenuItem = MenuItem & {
    label: MenuItemThemeLabel;
    themes: ThemeButton[];
};

export type ThemeSubMenuItem = Omit<ThemeMenuItem, "icon2" | "link">;

export type MenuItemGroup = (MenuItem | ThemeMenuItem)[];

export type MenuItemGroups = MenuItemGroup[];

export type SidebarState = "expanded" | "collapsed";

export type AllowedImageHostDomain = {
    protocol: string;
    hostname: string;
};

export type SheetContentSide = "top" | "right" | "bottom" | "left";

export type { Theme };
