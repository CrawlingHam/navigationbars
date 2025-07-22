import { Sidebar, SidebarInset, SidebarProvider, Popover, PopoverContent } from "@/components";
import type { MenuItemGroups, NavigationbarMenuProps, ThemeSubMenuItem } from "@/types";
import { memo, useMemo, type JSX } from "react";
import { MenuContent } from "./content";
import groupContent from "./config";
import MenuTrigger from "./trigger";

function NavigationbarMenu(props: NavigationbarMenuProps): JSX.Element {
    const groups: MenuItemGroups | ThemeSubMenuItem[][] = useMemo(
        () => groupContent(props.themeMenuOpen, props.profile),
        [props.themeMenuOpen, props.profile]
    );

    return (
        <Popover open={props.navbarMenuOpen} onOpenChange={props.toggleMenu}>
            <MenuTrigger {...props.profile} />

            <PopoverContent className="w-56 mt-[1px] overflow-hidden rounded-lg shadow-lg max-h-[calc(100vh-40rem)]" align="end">
                <SidebarProvider>
                    <SidebarInset className="bg-transparent h-auto">
                        <Sidebar collapsible="none">
                            <MenuContent groups={groups} themeMenuOpen={props.themeMenuOpen} toggleThemeMenu={props.toggleThemeMenu} />
                        </Sidebar>
                    </SidebarInset>
                </SidebarProvider>
            </PopoverContent>
        </Popover>
    );
}

export default memo(NavigationbarMenu);
