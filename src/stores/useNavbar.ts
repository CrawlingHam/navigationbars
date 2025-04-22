import type { NavbarStore } from "@/types";
import { create } from "zustand";

export const useNavbar = create<NavbarStore>((set) => ({
    openAccountMenu: false,
    openNavbarMenu: false,
    openThemeMenu: false,

    toggleThemeMenu: (open) => set({ openThemeMenu: open }),
    toggleNavbarMenu: (open) => set({ openNavbarMenu: open }),
    toggleAccountMenu: (open) => set({ openAccountMenu: open }),
}));
