import { MenuContentItemsGroupProps, MenuItem } from "@/types";
import { SidebarMenu } from "@/components";
import MenuContentItems from "./Items";

export default function MenuContentItemsGroup(props: MenuContentItemsGroupProps) {
    const { group, toggleThemeMenu, themeMenuOpen, toggleAccountMenu, accountMenuOpen, user } = props;
    if (!group) return null;

    return (
        <SidebarMenu className="h-full">
            {group.map((item: MenuItem, itemIndex: number) => (
                <MenuContentItems
                    key={`menu-content-item-${itemIndex}-${item.label || itemIndex}`}
                    toggleAccountMenu={toggleAccountMenu}
                    accountMenuOpen={accountMenuOpen}
                    toggleThemeMenu={toggleThemeMenu}
                    themeMenuOpen={themeMenuOpen}
                    itemIndex={itemIndex}
                    item={item}
                    user={user}
                />
            ))}
        </SidebarMenu>
    );
}
