import { RootState, setUser, setSavedAccounts, toggleThemeMenu, toggleNavbarMenu, toggleAccountMenu } from "@/stores";
import { appearanceItems, authButton, accountButtons, defaultUser, NavigationbarBranding } from "@/data";
import { useEffect, useMemo, useCallback, memo } from "react";
import { NavigationbarProps, MenuItemGroups } from "@/types";
import { useSelector, useDispatch } from "react-redux";
import NavigationbarMenu from "./menu";

const NavigationbarComponent = memo(
    function Navigationbar(props: NavigationbarProps) {
        const dispatch = useDispatch();
        const { user, savedAccounts } = props;
        const useUser = useSelector((state: RootState) => state.user);
        const { openNavbarMenu, openAccountMenu, openThemeMenu } = useSelector((state: RootState) => state.navbar);

        useEffect(() => {
            // Only update store if props are provided, otherwise use existing store state
            if (user !== undefined) dispatch(setUser(user || defaultUser));
            if (savedAccounts !== undefined) dispatch(setSavedAccounts(savedAccounts || []));
        }, [user, savedAccounts, dispatch]);

        const handleOpenThemeMenu = useCallback(() => dispatch(toggleThemeMenu(!openThemeMenu)), [dispatch, openThemeMenu]);
        const handleOpenNavbarMenu = useCallback(() => dispatch(toggleNavbarMenu(!openNavbarMenu)), [dispatch, openNavbarMenu]);
        const handleOpenAccountMenu = useCallback(() => dispatch(toggleAccountMenu(!openAccountMenu)), [dispatch, openAccountMenu]);

        const menuItemGroups: MenuItemGroups = useMemo(() => {
            const authBtn = authButton(useUser.user);
            const accountBtns = accountButtons(useUser.user, useUser.savedAccounts);
            return [accountBtns, [appearanceItems], [authBtn]] as MenuItemGroups;
        }, [useUser.user, useUser.savedAccounts]);

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
                                savedAccounts={useUser.savedAccounts}
                                accountMenuOpen={openAccountMenu}
                                navbarMenuOpen={openNavbarMenu}
                                themeMenuOpen={openThemeMenu}
                                groups={menuItemGroups}
                                user={useUser.user}
                            />
                        </div>
                    </div>
                </div>
            </nav>
        );
    },
    (prevProps, nextProps) => {
        // Custom comparison function to determine if re-render is needed
        return (
            prevProps.user?.id === nextProps.user?.id &&
            prevProps.user?.email === nextProps.user?.email &&
            prevProps.user?.name === nextProps.user?.name &&
            prevProps.user?.picture === nextProps.user?.picture &&
            prevProps.user?.role === nextProps.user?.role &&
            JSON.stringify(prevProps.savedAccounts) === JSON.stringify(nextProps.savedAccounts)
        );
    }
);

export const Navigationbar = NavigationbarComponent;
