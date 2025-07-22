import type { MenuItemGroup, MenuItemGroups, ThemeButton, Profile, ThemeMenuItem, MenuItem, ThemeSubMenuItem } from "@/types";
import { SunMedium, UserRound, LogIn, LogOut } from "lucide-vue-next";

const themeButtons: ThemeButton[] = [{ theme: "system" }, { theme: "light" }, { theme: "dark" }];

const appearanceItems: ThemeMenuItem = {
    themes: themeButtons,
    label: "Appearance",
    icon: SunMedium,
};

const themeItems: ThemeSubMenuItem = {
    label: "Theme Settings",
    themes: themeButtons,
    icon: SunMedium,
};

const accountButtons = (profile?: Profile): MenuItemGroup => {
    const isLoggedIn = profile?.picture && profile?.username;
    const link = isLoggedIn ? "/account" : "/auth/signin";

    return [
        {
            label: "Account",
            icon: UserRound,
            link,
        },
    ];
};

const authButton = (profile?: Profile): MenuItem => {
    const isLoggedIn = profile?.picture && profile?.username;
    const link = isLoggedIn ? "/auth/logout" : "/auth/signin";

    return {
        label: isLoggedIn ? "Logout" : "Login",
        icon: isLoggedIn ? LogOut : LogIn,
        link,
    };
};

const menuItemGroups = (profile?: Profile): MenuItemGroups => [accountButtons(profile), [appearanceItems], [authButton(profile)]];

const groupContent = (openThemeMenu: boolean, profile?: Profile): MenuItemGroups | ThemeSubMenuItem[][] => {
    if (!openThemeMenu) return menuItemGroups(profile);
    else return [[themeItems]];
};

export default groupContent;
