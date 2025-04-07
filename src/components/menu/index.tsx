import { Sidebar, SidebarInset, SidebarProvider, Popover, PopoverContent } from "@/components";
import { NavigationbarMenuProps } from "@/types";
import { MenuContent } from "./content";
import { MenuTrigger } from "./Trigger";
import { memo, useMemo } from "react";

const NavigationbarMenu = memo(function NavigationbarMenu(props: NavigationbarMenuProps) {
    const themeButtons = useMemo(() => [{ id: "system" }, { id: "light" }, { id: "dark" }], []);
    const showBaseMenuContent = !props.accountMenuOpen && !props.themeMenuOpen;

    const menuContent = useMemo(() => {
        return showBaseMenuContent
            ? props.groups
            : props.themeMenuOpen
              ? [[{ label: "Theme Settings", themes: themeButtons }]]
              : [[{ label: "Account Switcher", savedAccounts: props.savedAccounts }]];
    }, [showBaseMenuContent, props.groups, props.themeMenuOpen, themeButtons, props.savedAccounts]);

    return (
        <Popover open={props.navbarMenuOpen} onOpenChange={props.toggleNavbarMenu}>
            <MenuTrigger user={props.user} />

            <PopoverContent className="w-56 overflow-hidden rounded-lg shadow-lg max-h-[calc(100vh-40rem)]" align="end">
                <SidebarProvider>
                    <SidebarInset className="bg-transparent h-auto">
                        <Sidebar collapsible="none">
                            <MenuContent
                                toggleAccountMenu={props.toggleAccountMenu}
                                toggleThemeMenu={props.toggleThemeMenu}
                                accountMenuOpen={props.accountMenuOpen}
                                themeMenuOpen={props.themeMenuOpen}
                                groups={menuContent}
                                user={props.user}
                            />
                        </Sidebar>
                    </SidebarInset>
                </SidebarProvider>
            </PopoverContent>
        </Popover>
    );
});

export default NavigationbarMenu;
