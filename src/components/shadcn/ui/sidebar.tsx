import { SIDEBAR_COOKIE_MAX_AGE, SIDEBAR_WIDTH_MOBILE, SIDEBAR_COOKIE_NAME, SIDEBAR_WIDTH_ICON } from "../constants";
import { useMemo, type CSSProperties, type ComponentProps, forwardRef, useState, useCallback, type JSX } from "react";
import { TooltipProvider, TooltipTrigger, SIDEBAR_WIDTH, Tooltip, Sheet } from "../constants";
import { SheetContent, SheetDescription, SheetHeader, SheetTitle } from "./sheet";
import { useSidebarKeyboardShortcut, useSidebar, useIsMobile } from "../hooks";
import type { SidebarContextProps, SidebarMenuButtonVariants } from "@/types";
import { TooltipContent, SidebarContext } from "@/components";
import { sidebarMenuButtonVariants } from "../variants";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib";

const SidebarProvider = forwardRef<
    HTMLDivElement,
    ComponentProps<"div"> & {
        defaultOpen?: boolean;
        open?: boolean;
        onOpenChange?: (open: boolean) => void;
    }
>(({ defaultOpen = true, open: openProp, onOpenChange: setOpenProp, className, style, children, ...props }, ref): JSX.Element => {
    const isMobile = useIsMobile();
    const [openMobile, setOpenMobile] = useState(false);

    const [_open, _setOpen] = useState(defaultOpen);
    const open = openProp ?? _open;
    const setOpen = useCallback(
        (value: boolean | ((value: boolean) => boolean)) => {
            const openState = typeof value === "function" ? value(open) : value;
            if (setOpenProp) setOpenProp(openState);
            else _setOpen(openState);

            document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
        },
        [setOpenProp, open]
    );

    const toggleSidebar = useCallback(() => {
        return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open);
    }, [isMobile, setOpen, setOpenMobile]);

    useSidebarKeyboardShortcut(toggleSidebar);

    const state = open ? "expanded" : "collapsed";

    const contextValue = useMemo<SidebarContextProps>(
        () => ({
            setOpenMobile,
            toggleSidebar,
            openMobile,
            isMobile,
            setOpen,
            state,
            open,
        }),
        [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
    );

    return (
        <SidebarContext.Provider value={contextValue}>
            <TooltipProvider delayDuration={0}>
                <div
                    style={
                        {
                            "--sidebar-width": SIDEBAR_WIDTH,
                            "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
                            ...style,
                        } as CSSProperties
                    }
                    className={cn("group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar", className)}
                    ref={ref}
                    {...props}
                >
                    {children}
                </div>
            </TooltipProvider>
        </SidebarContext.Provider>
    );
});
SidebarProvider.displayName = "SidebarProvider";

const Sidebar = forwardRef<
    HTMLDivElement,
    ComponentProps<"div"> & {
        side?: "left" | "right";
        variant?: "sidebar" | "floating" | "inset";
        collapsible?: "offcanvas" | "icon" | "none";
    }
>(({ side = "left", variant = "sidebar", collapsible = "offcanvas", className, children, ...props }, ref): JSX.Element => {
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

    if (collapsible === "none") {
        return (
            <div
                className={cn("flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground", className)}
                ref={ref}
                {...props}
            >
                {children}
            </div>
        );
    }

    if (isMobile) {
        return (
            <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
                <SheetContent
                    data-sidebar="sidebar"
                    data-mobile="true"
                    className="w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
                    style={
                        {
                            "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
                        } as CSSProperties
                    }
                    side={side}
                >
                    <SheetHeader className="sr-only">
                        <SheetTitle>Sidebar</SheetTitle>
                        <SheetDescription>Displays the mobile sidebar.</SheetDescription>
                    </SheetHeader>
                    <div className="flex h-full w-full flex-col">{children}</div>
                </SheetContent>
            </Sheet>
        );
    }

    return (
        <div
            ref={ref}
            className="group peer hidden text-sidebar-foreground md:block"
            data-state={state}
            data-collapsible={state === "collapsed" ? collapsible : ""}
            data-variant={variant}
            data-side={side}
        >
            {/* This is what handles the sidebar gap on desktop */}
            <div
                className={cn(
                    "relative w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear",
                    "group-data-[collapsible=offcanvas]:w-0",
                    "group-data-[side=right]:rotate-180",
                    variant === "floating" || variant === "inset"
                        ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]"
                        : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
                )}
            />
            <div
                className={cn(
                    "fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-200 ease-linear md:flex",
                    side === "left"
                        ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
                        : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
                    variant === "floating" || variant === "inset"
                        ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]"
                        : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
                    className
                )}
                {...props}
            >
                <div
                    data-sidebar="sidebar"
                    className="flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow"
                >
                    {children}
                </div>
            </div>
        </div>
    );
});
Sidebar.displayName = "Sidebar";

const SidebarInset = forwardRef<HTMLDivElement, ComponentProps<"main">>(({ className, ...props }, ref): JSX.Element => {
    return (
        <main
            ref={ref}
            className={cn(
                "relative flex w-full flex-1 flex-col bg-background",
                "md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
                className
            )}
            {...props}
        />
    );
});
SidebarInset.displayName = "SidebarInset";

const SidebarContent = forwardRef<HTMLDivElement, ComponentProps<"div">>(({ className, ...props }, ref): JSX.Element => {
    return (
        <div
            ref={ref}
            data-sidebar="content"
            className={cn("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", className)}
            {...props}
        />
    );
});
SidebarContent.displayName = "SidebarContent";

const SidebarGroup = forwardRef<HTMLDivElement, ComponentProps<"div">>(({ className, ...props }, ref): JSX.Element => {
    return <div ref={ref} data-sidebar="group" className={cn("relative flex w-full min-w-0 flex-col p-2", className)} {...props} />;
});
SidebarGroup.displayName = "SidebarGroup";

const SidebarGroupContent = forwardRef<HTMLDivElement, ComponentProps<"div">>(
    ({ className, ...props }, ref): JSX.Element => (
        <div ref={ref} data-sidebar="group-content" className={cn("w-full text-sm", className)} {...props} />
    )
);
SidebarGroupContent.displayName = "SidebarGroupContent";

const SidebarMenu = forwardRef<HTMLUListElement, ComponentProps<"ul">>(
    ({ className, ...props }, ref): JSX.Element => (
        <ul ref={ref} data-sidebar="menu" className={cn("flex w-full min-w-0 flex-col gap-1", className)} {...props} />
    )
);
SidebarMenu.displayName = "SidebarMenu";

const SidebarMenuItem = forwardRef<HTMLLIElement, ComponentProps<"li">>(
    ({ className, ...props }, ref): JSX.Element => (
        <li ref={ref} data-sidebar="menu-item" className={cn("group/menu-item relative", className)} {...props} />
    )
);
SidebarMenuItem.displayName = "SidebarMenuItem";

const SidebarMenuButton = forwardRef<
    HTMLButtonElement,
    ComponentProps<"button"> & {
        asChild?: boolean;
        isActive?: boolean;
        tooltip?: string | ComponentProps<typeof TooltipContent>;
    } & SidebarMenuButtonVariants
>(({ asChild = false, isActive = false, variant = "default", size = "default", tooltip, className, ...props }, ref): JSX.Element => {
    const Comp = asChild ? Slot : "button";
    const { isMobile, state } = useSidebar();

    const button = (
        <Comp
            ref={ref}
            data-sidebar="menu-button"
            data-size={size}
            data-active={isActive}
            className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
            {...props}
        />
    );

    if (!tooltip) {
        return button;
    }

    if (typeof tooltip === "string") {
        tooltip = {
            children: tooltip,
        };
    }

    return (
        <Tooltip>
            <TooltipTrigger asChild>{button}</TooltipTrigger>
            <TooltipContent side="right" align="center" hidden={state !== "collapsed" || isMobile} {...tooltip} />
        </Tooltip>
    );
});
SidebarMenuButton.displayName = "SidebarMenuButton";

export {
    SidebarGroupContent,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
    SidebarContent,
    SidebarGroup,
    SidebarInset,
    SidebarMenu,
    Sidebar,
};
