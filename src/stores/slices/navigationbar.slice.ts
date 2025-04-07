import { createSlice } from "@reduxjs/toolkit";
import type { NavbarActions } from "@/types";

const initialState: NavbarActions = {
    openAccountMenu: false,
    openNavbarMenu: false,
    openThemeMenu: false,
};

const navbarSlice = createSlice({
    name: "navbar",

    initialState,

    reducers: {
        toggleThemeMenu: (state, action) => {
            state.openThemeMenu = action.payload;
        },
        toggleNavbarMenu: (state, action) => {
            state.openNavbarMenu = action.payload;
        },
        toggleAccountMenu: (state, action) => {
            state.openAccountMenu = action.payload;
        },
    },
});

const { toggleThemeMenu, toggleNavbarMenu, toggleAccountMenu } = navbarSlice.actions;
const navigationbarReducer = navbarSlice.reducer;
export { navigationbarReducer, toggleThemeMenu, toggleNavbarMenu, toggleAccountMenu };
