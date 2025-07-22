import { SIDEBAR_KEYBOARD_SHORTCUT } from "../constants";
import type { SidebarContextProps } from "@/types";
import { useContext, useEffect } from "react";
import { SidebarContext } from "../contexts";

export const useSidebar = (): SidebarContextProps => {
    const context = useContext(SidebarContext);
    if (!context) throw new Error("useSidebar must be used within a SidebarProvider.");
    return context;
};

export function useSidebarKeyboardShortcut(toggleSidebar: () => void): void {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
                event.preventDefault();
                toggleSidebar();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [toggleSidebar]);
}
