import type { Dimensions, MenuItem, MenuItemGroup, MenuItemGroups, Profile, SheetContentSide } from "./models";
import type { buttonVariants, sidebarMenuButtonVariants } from "@/components/shadcn/variants";
import type { DialogContentProps, PrimitiveProps } from "reka-ui";
import type { ComputedRef, HTMLAttributes, Ref, VNode } from "vue";

export type ClassProp = {
    class?: HTMLAttributes["class"];
} & /* @vue-ignore */ HTMLAttributes;

export type ButtonProps = {
    variant?: NonNullable<Parameters<typeof buttonVariants>[0]>["variant"];
    size?: NonNullable<Parameters<typeof buttonVariants>[0]>["size"];
    as?: string;
} & /* @vue-ignore */ HTMLAttributes;

export type SheetContentProps = DialogContentProps & {
    class?: HTMLAttributes["class"];
    side?: SheetContentSide;
};

export declare type SidebarContextProps = {
    state: ComputedRef<"expanded" | "collapsed">;
    setOpenMobile: (value: boolean) => void;
    setOpen: (value: boolean) => void;
    toggleSidebar: () => void;
    openMobile: Ref<boolean>;
    isMobile: Ref<boolean>;
    open: Ref<boolean>;
};

export type SidebarMenuButtonProps = PrimitiveProps &
    ClassProp & {
        variant?: NonNullable<Parameters<typeof sidebarMenuButtonVariants>[0]>["variant"];
        size?: NonNullable<Parameters<typeof sidebarMenuButtonVariants>[0]>["size"];
        isActive?: boolean;
    };

export type SidebarProps = ClassProp & {
    collapsible?: "offcanvas" | "icon" | "none";
    variant?: "sidebar" | "floating" | "inset";
    side?: "left" | "right";
};

export type BackButtonProps = {
    onClick: () => void;
    btnText: string;
};

export type BaseProfileProps = { dimensions: Dimensions };

export type ImageProfileProps = BaseProfileProps & {
    src?: string;
    alt?: string;
};

export type LetterProfileProps = BaseProfileProps & { letter: string };

export type ProfileImageProps = ImageProfileProps & {
    class: string;
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
    title?: string;
    logo?: VNode;
};

export type FlixburstLogoProps = { class?: string };

export type AppProps = NavigationbarBrandProps & Pick<NavigationbarMenuProps, "profile">;
