import type { SidebarState, Dimensions, MenuItemGroup, MenuItem, MenuItemGroups, Profile } from "./models";
import { buttonVariants, sheetVariants, sidebarMenuButtonVariants } from "@/components";
import type { ButtonHTMLAttributes, ComponentPropsWithoutRef, JSX } from "react";
import type { VariantProps } from "class-variance-authority";
import type { Content } from "@radix-ui/react-popover";

export type ButtonVariants = VariantProps<typeof buttonVariants>;

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
    ButtonVariants & {
        asChild?: boolean;
    };

export type SheetVariants = VariantProps<typeof sheetVariants>;

export type SheetContentProps = ComponentPropsWithoutRef<typeof Content> & SheetVariants;

export type SidebarMenuButtonVariants = VariantProps<typeof sidebarMenuButtonVariants>;

export type SidebarContextProps = {
    setOpenMobile: (open: boolean) => void;
    setOpen: (open: boolean) => void;
    toggleSidebar: () => void;
    state: SidebarState;
    openMobile: boolean;
    isMobile: boolean;
    open: boolean;
};

export type BaseProfileProps = { dimensions: Dimensions };

export type ImageProfileProps = BaseProfileProps & {
    src?: string;
    alt?: string;
};

export type LetterProfileProps = BaseProfileProps & { letter: string };

export type ProfileImageProps = ImageProfileProps & {
    className: string;
    priority: boolean;
};

export type CommonProfileProps = Pick<BaseProfileProps, "dimensions">;

export type UserProfileProps = CommonProfileProps & Pick<ImageProfileProps, "src" | "alt">;

export type GuestProfileProps = CommonProfileProps & Pick<LetterProfileProps, "letter">;

export type ProfileProps = UserProfileProps | GuestProfileProps;

export type ItemProps = { index: number; item: MenuItem };

export type ThemeSelectorProps = ItemProps & {
    toggleThemeMenu: () => void;
    themeMenuOpen: boolean;
};

export type MenuItemsProps = ItemProps & Pick<ThemeSelectorProps, "toggleThemeMenu">;

export type MenuContentItemsProps = ThemeSelectorProps & MenuItemsProps;

export type MenuContentItemsGroupProps = Omit<MenuContentItemsProps, "themes" | "itemIndex" | "item" | "index"> & {
    group: MenuItemGroup;
};

export type MenuContentProps = Omit<MenuContentItemsGroupProps, "group"> & {
    groups: MenuItemGroups;
};

export type NavigationbarMenuProps = Omit<MenuContentProps, "groups"> & {
    navbarMenuOpen: boolean;
    toggleMenu: () => void;
    profile?: Profile;
};

export type NavigationbarBrandProps = {
    logo?: JSX.Element;
    title?: string;
};

export type AppProps = NavigationbarBrandProps & Pick<NavigationbarMenuProps, "profile">;
