import { appearanceItems, authButton, accountButtons, NavigationbarBranding } from "@/data";
import { useEffect, useMemo, useCallback, memo } from "react";
import { NavigationbarProps, MenuItemGroups } from "@/types";
import { useUser, useNavbar } from "@/stores";
import NavigationbarMenu from "./menu";

const NavigationbarComponent = memo(
    function Navigationbar(props: NavigationbarProps) {
        const { user, setUser } = useUser();
        const { openNavbarMenu, openAccountMenu, openThemeMenu, toggleNavbarMenu, toggleAccountMenu, toggleThemeMenu } = useNavbar();

        useEffect(() => {
            if (props.user) setUser(props.user);
        }, [props.user, setUser]);

        const handleOpenThemeMenu = useCallback(() => toggleThemeMenu(!openThemeMenu), [openThemeMenu, toggleThemeMenu]);
        const handleOpenNavbarMenu = useCallback(() => toggleNavbarMenu(!openNavbarMenu), [openNavbarMenu, toggleNavbarMenu]);
        const handleOpenAccountMenu = useCallback(() => toggleAccountMenu(!openAccountMenu), [openAccountMenu, toggleAccountMenu]);

        const menuItemGroups: MenuItemGroups = useMemo(() => [accountButtons(user), [appearanceItems], [authButton(user)]], [user]);

        return (
            <nav className="fixed left-0 right-0 top-0 z-50 w-full shadow-md h-16">
                <div className="w-full flex animated-border-b">
                    <div className="flex w-full items-center justify-between">
                        <NavigationbarBranding className="w-full flex justify-start" title={props.title} logo={props.logo} />

                        <div className="flex justify-end mr-8 rounded-full">
                            <NavigationbarMenu
                                toggleAccountMenu={handleOpenAccountMenu}
                                toggleNavbarMenu={handleOpenNavbarMenu}
                                toggleThemeMenu={handleOpenThemeMenu}
                                navbarMenuOpen={openNavbarMenu}
                                themeMenuOpen={openThemeMenu}
                                groups={menuItemGroups}
                                user={user}
                            />
                        </div>
                    </div>
                </div>
            </nav>
        );
    },
    (prevProps, nextProps) => {
        const prevUser = prevProps.user;
        const nextUser = nextProps.user;

        if (!prevUser && !nextUser) return true;
        if (!prevUser || !nextUser) return false;

        return (
            prevUser.id === nextUser.id &&
            prevUser.email === nextUser.email &&
            prevUser.name === nextUser.name &&
            prevUser.picture === nextUser.picture &&
            prevUser.role === nextUser.role
        );
    }
);

export const Navigationbar = NavigationbarComponent;
