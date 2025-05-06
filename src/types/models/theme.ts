import type { Theme } from "flixburst-theme";
import type { MenuItem } from "./menu";

export type ThemeButton = { id: Theme };

export declare type ThemeMenuItem = MenuItem & {
    themes: ThemeButton[];
    label: string;
};

export type { Theme };
