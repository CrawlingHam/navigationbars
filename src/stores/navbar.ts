import type { NavbarState } from "@/types";
import { defineStore } from "pinia";

export const useNavbar = defineStore("navbar", {
    state: (): NavbarState => ({
        openAccountMenu: false,
        openNavbarMenu: false,
        openThemeMenu: false,
    }),
    actions: {
        toggleThemeMenu() {
            this.openThemeMenu = !this.openThemeMenu;
        },
        toggleNavbarMenu() {
            this.openNavbarMenu = !this.openNavbarMenu;
        },
        toggleAccountMenu() {
            this.openAccountMenu = !this.openAccountMenu;
        },
    },
});
