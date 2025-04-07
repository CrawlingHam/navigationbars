import { User, SavedAccount } from "../definitions";
import { ItemProps } from "./menu";

export declare type AccountSwitchProps = ItemProps & {
    toggleAccountMenu: () => void;
    accountMenuOpen: boolean;
    user: User | null;
};

export declare type AccountItemsProps = {
    currentAccount: User | null;
    accounts: SavedAccount[];
};

export declare type AccountCardProps = { account: SavedAccount; isCurrentUser: boolean };

export declare type AccountSectionProps = {
    onAccountSwitch: (account: SavedAccount) => void;
    currentAccount: SavedAccount;
    accounts: SavedAccount[];
};
