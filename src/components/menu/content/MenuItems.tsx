import { SidebarMenuButton, SidebarMenuItem } from "@/components";
import { MenuItemsProps, MenuItem } from "@/types";

export default function MenuItems({ item, itemIndex, toggleThemeMenu, toggleAccountMenu }: MenuItemsProps) {
    const handleMenuButtonClick = (menuItem: MenuItem) => {
        switch (menuItem.label) {
            case "Appearance":
                toggleThemeMenu();
                break;
            case "Switch Account":
                toggleAccountMenu();
                break;
            default:
                if (menuItem.link) {
                    window.location.href = menuItem.link;
                }
                break;
        }
    };

    return (
        <SidebarMenuItem
            key={`menu-item-${item.label}-${itemIndex}`}
            className=" rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 hover:cursor-pointer"
        >
            <SidebarMenuButton
                onClick={() => handleMenuButtonClick(item)}
                className="flex items-center justify-between w-full px-3 py-2 text-sm transition-colors duration-200 hover:cursor-pointer"
            >
                {item.icon && (
                    <div className="flex items-center gap-2 hover:cursor-pointer">
                        <item.icon className="h-4 w-4" />
                        <span className="font-medium">{item.label}</span>
                    </div>
                )}
            </SidebarMenuButton>
        </SidebarMenuItem>
    );
}
