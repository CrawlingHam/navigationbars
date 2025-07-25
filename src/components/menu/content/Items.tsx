import { SidebarMenuButton, SidebarMenuItem } from "@/components";
import type { MenuItemsProps } from "@/types";
import { type JSX } from "react";

function MenuItems(props: MenuItemsProps): JSX.Element {
    const handleMenuButtonClick = (): void => {
        if (props.item.label === "Appearance") props.toggleThemeMenu();
        if (props.item.link) window.location.href = props.item.link;
    };

    return (
        <SidebarMenuItem key={`menu-item-${props.item.label}-${props.index}`} className=" rounded-lg">
            {props.item.label !== "Theme Settings" && (
                <SidebarMenuButton
                    className="flex items-center border-b border-slate-100 dark:border-b-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700  justify-between w-full px-3 py-2 text-sm transition-colors duration-200 hover:cursor-pointer"
                    onClick={handleMenuButtonClick}
                >
                    {props.item.icon && (
                        <div className="flex items-center gap-2 w-full">
                            <props.item.icon className="h-4 w-4" />
                            <span className="font-medium">{props.item.label}</span>
                        </div>
                    )}
                </SidebarMenuButton>
            )}
        </SidebarMenuItem>
    );
}

export default MenuItems;
