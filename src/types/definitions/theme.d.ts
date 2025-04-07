import { MenuItem } from "./menu";

export type Theme = "light" | "dark" | "system";

export type ThemeButton = { id: Theme };

export declare type ThemeMenuItem = MenuItem & {
    themes: ThemeButton[];
    label: string;
};
