import { SavedAccount, User } from "@/types";

//--------------------------------* Redux stores *--------------------------------------------/

// Inital User State
export declare type UserState = {
    savedAccounts: SavedAccount[];
    user: User | null;
};

// Inital Navigationbar State
export declare type NavbarActions = {
    openAccountMenu: boolean;
    openNavbarMenu: boolean;
    openThemeMenu: boolean;
};
