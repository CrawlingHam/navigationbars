import { buttonVariants, sheetVariants, sidebarMenuButtonVariants } from "@/components";
import { ButtonHTMLAttributes, ComponentPropsWithoutRef } from "react";
import { MenuItem, MenuItemGroup, MenuItemGroups } from "./models";
import { VariantProps } from "class-variance-authority";
import { Content } from "@radix-ui/react-popover";
import { Profile } from "flixburst-declarations";

/*------------------------------THEME ------------------------------*/

export declare type ItemProps = { itemIndex: number; item: MenuItem };

export declare type ThemeSelectorProps = ItemProps & {
    toggleThemeMenu: () => void;
    themeMenuOpen: boolean;
};

/*------------------------------MENU ------------------------------*/

export declare type MenuItemsProps = ItemProps & {
    toggleAccountMenu: () => void;
    toggleThemeMenu: () => void;
    user?: Profile | undefined;
};

export declare type MenuContentItemsProps = ThemeSelectorProps & MenuItemsProps;

export declare type MenuContentItemsGroupProps = Omit<MenuContentItemsProps, "themes" | "itemIndex" | "item"> & {
    group: MenuItemGroup;
};

export declare type MenuContentProps = Omit<MenuContentItemsGroupProps, "group"> & {
    groups: MenuItemGroups;
};

export declare type NavigationbarMenuProps = MenuContentProps & {
    toggleNavbarMenu: () => void;
    navbarMenuOpen: boolean;
};

/*------------------------------PROFILE ------------------------------*/

export type Dimensions = [number, number];

export type BaseProfileProps = {
    dimensions: Dimensions;
    clickable?: boolean;
};

export type ImageProfileProps = BaseProfileProps & {
    src?: string;
    alt?: string;
};

export type LetterProfileProps = BaseProfileProps & {
    letter: string;
};

export type ProfileImageProps = ImageProfileProps & {
    className: string;
    priority: boolean;
};

export type CommonProfileProps = Pick<BaseProfileProps, "clickable" | "dimensions">;

export type UserProfileProps = CommonProfileProps & Pick<ImageProfileProps, "src" | "alt">;

export type GuestProfileProps = CommonProfileProps & Pick<LetterProfileProps, "letter">;

export type ProfileProps = UserProfileProps | GuestProfileProps;

/*------------------------------NAVIGATIONBAR ------------------------------*/

export declare type NavigationbarBrandingProps = {
    className?: string;
    logo?: JSX.Element;
    title?: string;
};

export declare type NavigationbarProps = Partial<Omit<NavigationbarBrandingProps, "className">> & {
    user?: Profile | null;
};

/*------------------------------SHADCN ------------------------------*/

export declare type SidebarState = "expanded" | "collapsed";

export declare type SidebarContextProps = {
    setOpenMobile: (open: boolean) => void;
    setOpen: (open: boolean) => void;
    toggleSidebar: () => void;
    state: SidebarState;
    openMobile: boolean;
    isMobile: boolean;
    open: boolean;
};

export declare type ButtonVariants = VariantProps<typeof buttonVariants>;

export declare type BackButtonProps = {
    onClick: () => void;
    buttonText: string;
};

export declare type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
    ButtonVariants & {
        asChild?: boolean;
    };

export declare type SheetContentProps = ComponentPropsWithoutRef<typeof Content> & VariantProps<typeof sheetVariants>;

export declare type SidebarMenuButtonVariants = VariantProps<typeof sidebarMenuButtonVariants>;

/*------------------------------STORES ------------------------------*/

export declare type UserStore = {
    setUser: (user: Profile | undefined) => void;
    user: Profile | undefined;
};

export declare type NavbarStore = {
    openAccountMenu: boolean;
    openNavbarMenu: boolean;
    openThemeMenu: boolean;

    toggleThemeMenu: (open: boolean) => void;
    toggleNavbarMenu: (open: boolean) => void;
    toggleAccountMenu: (open: boolean) => void;
};
