import { SidebarContent, SidebarGroup, SidebarGroupContent } from "@/components";
import type { MenuContentProps, MenuItemGroup } from "@/types";
import MenuContentItemsGroup from "./group";
import { type JSX } from "react";

export function MenuContent(props: MenuContentProps): JSX.Element | null {
    if (!props.groups) return null;

    return (
        <SidebarContent className="py-2 h-auto flex-none">
            {props.groups.map((group: MenuItemGroup, index: number) => (
                <SidebarGroup key={`group-${index}`} className="last:border-none w-full">
                    <SidebarGroupContent className="gap-0">
                        <MenuContentItemsGroup group={group} themeMenuOpen={props.themeMenuOpen} toggleThemeMenu={props.toggleThemeMenu} />
                    </SidebarGroupContent>
                </SidebarGroup>
            ))}
        </SidebarContent>
    );
}
