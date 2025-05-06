import { buttonVariants, sidebarMenuButtonVariants } from "@/components";
import type { DialogContentProps, PrimitiveProps } from "reka-ui";
import { type VariantProps } from "class-variance-authority";
import type { HTMLAttributes, ComputedRef, Ref } from "vue";

export declare type ButtonVariants = VariantProps<typeof buttonVariants>;

export type SidebarMenuButtonVariants = VariantProps<typeof sidebarMenuButtonVariants>;

export declare type ButtonProps = PrimitiveProps & {
    variant?: ButtonVariants["variant"];
    class?: HTMLAttributes["class"];
    size?: ButtonVariants["size"];
};

export declare type InputProps = PrimitiveProps & {
    class?: HTMLAttributes["class"];
    defaultValue?: string | number;
    modelValue?: string | number;
};

export declare type SkeletonProps = {
    class?: HTMLAttributes["class"];
};

export declare type SheetContentSide = "top" | "right" | "bottom" | "left";

export declare type SheetContentProps = DialogContentProps & {
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

export declare type SidebarMenuButtonProps = PrimitiveProps & {
    variant?: SidebarMenuButtonVariants["variant"];
    size?: SidebarMenuButtonVariants["size"];
    class?: HTMLAttributes["class"];
    isActive?: boolean;
};

export declare type SidebarProps = {
    collapsible?: "offcanvas" | "icon" | "none";
    variant?: "sidebar" | "floating" | "inset";
    class?: HTMLAttributes["class"];
    side?: "left" | "right";
};

export declare type BackButtonProps = {
    onClick: () => void;
    buttonText: string;
};
