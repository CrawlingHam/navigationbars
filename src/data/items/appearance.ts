import type { ThemeMenuItem, ThemeButton } from "@/types";
import { Sun } from "lucide-vue-next";

const themes: ThemeButton[] = [{ id: "light" }, { id: "dark" }, { id: "system" }];

export const appearanceItems: ThemeMenuItem = {
    label: "Appearance",
    icon: Sun,
    themes,
};
