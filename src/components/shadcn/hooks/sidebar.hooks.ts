import { SidebarContext } from "@/components/shadcn/contexts";
import { SIDEBAR_KEYBOARD_SHORTCUT } from "../constants";
import { useContext, useEffect } from "react";

export const useSidebar = () => {
    const context = useContext(SidebarContext);
    if (!context) throw new Error("useSidebar must be used within a SidebarProvider.");
    return context;
};

export function useSidebarKeyboardShortcut(toggleSidebar: () => void) {
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
