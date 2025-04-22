import { MenuContentItemsGroupProps, MenuItem } from "@/types";
import { SidebarMenu } from "@/components";
import MenuContentItems from "./Items";

export default function MenuContentItemsGroup(props: MenuContentItemsGroupProps) {
    const { group, toggleThemeMenu, themeMenuOpen, toggleAccountMenu } = props;
    if (!group) return null;

    return (
        <SidebarMenu className="h-full">
            {group.map((item: MenuItem, itemIndex: number) => (
                <MenuContentItems
                    key={`menu-content-item-${itemIndex}-${item.label || itemIndex}`}
                    toggleAccountMenu={toggleAccountMenu}
                    toggleThemeMenu={toggleThemeMenu}
                    themeMenuOpen={themeMenuOpen}
                    itemIndex={itemIndex}
                    item={item}
                />
            ))}
        </SidebarMenu>
    );
}
