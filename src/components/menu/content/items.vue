<script setup lang="ts">
import { SidebarMenuItem, SidebarMenuButton } from "../../shadcn";
import type { MenuItem, MenuItemsProps } from "@/types";

const { toggleThemeMenu, toggleAccountMenu, item, itemIndex } = defineProps<MenuItemsProps>();

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
</script>

<template>
    <SidebarMenuItem
        :key="`menu-item-${item.label}-${itemIndex}`"
        class="rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 hover:cursor-pointer"
    >
        <SidebarMenuButton
            @click="handleMenuButtonClick(item)"
            class="flex items-center justify-between w-full px-3 py-2 text-sm transition-colors duration-200 hover:cursor-pointer"
        >
            <div v-if="item.icon" class="flex items-center gap-2 hover:cursor-pointer">
                <component :is="item.icon" class="h-4 w-4" />
                <span class="font-medium">{{ item.label }}</span>
            </div>
        </SidebarMenuButton>
    </SidebarMenuItem>
</template>
