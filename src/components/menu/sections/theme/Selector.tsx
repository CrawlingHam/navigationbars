import { SidebarMenuItem, SidebarMenuButton, BackButton } from "@/components";
import { Fragment, useState, useEffect, memo, useCallback } from "react";
import { ThemeSelectorProps, ThemeMenuItem, Theme } from "@/types";
import { capitalize } from "flixburst-utils";
import { FaCheck } from "react-icons/fa6";

export const ThemeSelector = memo(function ThemeSelector(props: ThemeSelectorProps) {
    const { item, themeMenuOpen, toggleThemeMenu, itemIndex } = props;
    const [currentTheme, setCurrentTheme] = useState<Theme>("system");

    useEffect(() => {
        // Get the current theme from localStorage
        const theme = (localStorage.getItem("theme") as Theme) || "system";
        setCurrentTheme(theme);
    }, []);

    const handleSetTheme = useCallback((theme: Theme) => {
        // Update localStorage
        localStorage.setItem("theme", theme);
        // Update state
        setCurrentTheme(theme);
        // Dispatch a custom event to notify listeners with the theme value
        window.dispatchEvent(new CustomEvent("theme-toggle", { detail: theme }));
    }, []);

    // Use type guard to check if item has themes property
    if (!themeMenuOpen || !("themes" in item)) return null;

    // Cast to the appropriate type
    const themeItem = item as ThemeMenuItem;

    return (
        <Fragment key={`theme-selector-${itemIndex}`}>
            <SidebarMenuItem>
                <BackButton buttonText={themeItem.label || "Appearances"} onClick={() => toggleThemeMenu()} />
            </SidebarMenuItem>

            {themeItem.themes.map((theme, index: number) => (
                <SidebarMenuItem key={`theme-option-${theme.id}-${index}`}>
                    <SidebarMenuButton
                        onClick={() => handleSetTheme(theme.id)}
                        className="w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-200 dark:text-slate-200 dark:hover:bg-slate-600 hover:cursor-pointer"
                    >
                        {capitalize(theme.id)}
                        {theme.id === currentTheme && <FaCheck className="ml-3 flex w-full justify-end text-green-500" />}
                    </SidebarMenuButton>
                </SidebarMenuItem>
            ))}
        </Fragment>
    );
});
