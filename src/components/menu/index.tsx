import { Sidebar, SidebarInset, SidebarProvider, Popover, PopoverContent } from "@/components";
import { NavigationbarMenuProps } from "@/types";
import { MenuContent } from "./content";
import { MenuTrigger } from "./Trigger";
import { memo, useMemo } from "react";

const NavigationbarMenu = memo(function NavigationbarMenu(props: NavigationbarMenuProps) {
    const { groups, navbarMenuOpen, themeMenuOpen, toggleAccountMenu, toggleNavbarMenu, toggleThemeMenu, user } = props;

    const themeButtons = useMemo(() => [{ id: "system" }, { id: "light" }, { id: "dark" }], []);
    const showBaseMenuContent = !themeMenuOpen;

    const menuContent = useMemo(() => {
        return showBaseMenuContent
            ? groups
            : themeMenuOpen
              ? [[{ label: "Theme Settings", themes: themeButtons }]]
              : [[{ label: "Account Switcher" }]];
    }, [showBaseMenuContent, groups, themeMenuOpen, themeButtons]);

    return (
        <Popover open={navbarMenuOpen} onOpenChange={toggleNavbarMenu}>
            <MenuTrigger profile={user} />

            <PopoverContent className="w-56 overflow-hidden rounded-lg shadow-lg max-h-[calc(100vh-40rem)]" align="end">
                <SidebarProvider>
                    <SidebarInset className="bg-transparent h-auto">
                        <Sidebar collapsible="none">
                            <MenuContent
                                toggleAccountMenu={toggleAccountMenu}
                                toggleThemeMenu={toggleThemeMenu}
                                themeMenuOpen={themeMenuOpen}
                                groups={menuContent}
                                user={user}
                            />
                        </Sidebar>
                    </SidebarInset>
                </SidebarProvider>
            </PopoverContent>
        </Popover>
    );
});

export default NavigationbarMenu;
