import { buttonVariants, sheetVariants, sidebarMenuButtonVariants } from "@/components";
import { ButtonHTMLAttributes, ComponentPropsWithoutRef } from "react";
import { VariantProps } from "class-variance-authority";
import { Content } from "@radix-ui/react-popover";
import { SidebarState } from "@/types";

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
