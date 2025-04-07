import { SavedAccount, User } from "../definitions";

export declare type NavigationbarBrandingProps = {
    className?: string;
    logo?: JSX.Element;
    title?: string;
};

export declare type NavigationbarProps = Partial<Omit<NavigationbarBrandingProps, "className">> & {
    savedAccounts?: SavedAccount[];
    user?: User | null;
};
