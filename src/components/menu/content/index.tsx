import { SidebarContent, SidebarGroup, SidebarGroupContent } from "@/components";
import { MenuContentProps, MenuItemGroup } from "@/types";
import MenuContentItemsGroup from "./ItemsGroup";

export function MenuContent(props: MenuContentProps) {
    const { groups } = props;
    if (!groups) return null;

    return (
        <SidebarContent className="py-2 h-auto flex-none">
            {groups.map((group: MenuItemGroup, groupIndex: number) => (
                <SidebarGroup key={`group-${groupIndex}`} className="border-b border-border/50 last:border-none">
                    <SidebarGroupContent className="gap-0">
                        <MenuContentItemsGroup group={group} {...props} />
                    </SidebarGroupContent>
                </SidebarGroup>
            ))}
        </SidebarContent>
    );
}
