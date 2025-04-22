import { ThemeMenuItem, ThemeButton } from "@/types";
import { IoSunnyOutline } from "react-icons/io5";

const themes: ThemeButton[] = [{ id: "light" }, { id: "dark" }, { id: "system" }];

export const appearanceItems: ThemeMenuItem = {
    icon: IoSunnyOutline,
    label: "Appearance",
    themes,
};
