import type { MenuContentItemsGroupProps, MenuItem } from "@/types";
import { SidebarMenu } from "@/components";
import { ThemeSelector } from "../theme";
import { type JSX } from "react";
import MenuItems from "./items";

function MenuContentItemsGroup(props: MenuContentItemsGroupProps): JSX.Element | null {
    if (!props.group) return null;

    return (
        <SidebarMenu className="h-full">
            {props.group.map((item: MenuItem, index: number) => (
                <div key={`mItem-${index}-${item.label || index}`} className="flex flex-col gap-2 h-full">
                    <ThemeSelector toggleThemeMenu={props.toggleThemeMenu} themeMenuOpen={props.themeMenuOpen} index={index} item={item} />
                    <MenuItems toggleThemeMenu={props.toggleThemeMenu} index={index} item={item} />
                </div>
            ))}
        </SidebarMenu>
    );
}

export default MenuContentItemsGroup;
