import { Fragment, useState, useEffect, memo, useCallback, type JSX } from "react";
import { SidebarMenuItem, SidebarMenuButton, BackButton } from "@/components";
import type { ThemeSelectorProps, Theme } from "@/types";
import { Check } from "lucide-react";
import { capitalize } from "@/utils";
import { cn } from "@/lib";

function ThemeSelector(props: ThemeSelectorProps): JSX.Element | null {
    const [currentTheme, setCurrentTheme] = useState<Theme>("system");

    useEffect(() => {
        const theme = (localStorage.getItem("theme") as Theme) || "system";
        setCurrentTheme(theme);
    }, []);

    const handleSetTheme = useCallback((theme: Theme): void => {
        localStorage.setItem("theme", theme);
        setCurrentTheme(theme);
        window.dispatchEvent(new CustomEvent("theme-toggle", { detail: theme }));
    }, []);

    if (!props.themeMenuOpen || !props.item.themes) return null;

    return (
        <Fragment key={`theme-selector-${props.index}`}>
            <SidebarMenuItem>
                <BackButton btnText={props.item.label || "Appearances"} onClick={props.toggleThemeMenu} />
            </SidebarMenuItem>

            {props.item.themes.map((theme, index: number) => (
                <SidebarMenuItem key={`theme-${theme.theme}-${index}`} className="py-[0.5px]">
                    <SidebarMenuButton
                        onClick={() => handleSetTheme(theme.theme)}
                        className={cn(
                            "w-full px-4 py-2 border-b border-slate-50 dark:border-b-slate-800 text-left text-sm text-slate-900",
                            "hover:bg-slate-200 dark:text-slate-200 dark:hover:bg-slate-600 hover:cursor-pointer"
                        )}
                    >
                        {capitalize(theme.theme)}
                        {theme.theme === currentTheme && <Check className="ml-3 flex w-full justify-end text-green-500" />}
                    </SidebarMenuButton>
                </SidebarMenuItem>
            ))}
        </Fragment>
    );
}

export default memo(ThemeSelector);
