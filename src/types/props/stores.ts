import type { Profile } from "flixburst-zod";

export declare type UserState = {
    profile: Profile | undefined;
};

export declare type NavbarState = {
    openAccountMenu: boolean;
    openNavbarMenu: boolean;
    openThemeMenu: boolean;
};
