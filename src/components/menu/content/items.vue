<script setup lang="ts">
import { SidebarMenuItem, SidebarMenuButton } from "@/components/shadcn";
import type { MenuItemsProps } from "@/types";

const props = defineProps<MenuItemsProps>();

const handleMenuButtonClick = (): void => {
    if (props.item.label === "Appearance") props.toggleThemeMenu();
    if (props.item.link) window.location.href = props.item.link;
};
</script>

<template>
    <SidebarMenuItem class="rounded-lg" :key="`menu-item-${props.item.label}-${props.index}`">
        <SidebarMenuButton
            class="flex items-center justify-between w-full px-3 py-2 text-sm transition-colors duration-200 hover:cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 border-b border-slate-100 dark:border-b-slate-800"
            v-if="props.item.label !== 'Theme Settings'"
            @click="handleMenuButtonClick"
        >
            <div v-if="props.item.icon" class="flex w-full items-center gap-2">
                <props.item.icon class="h-4 w-4" />
                <span class="font-medium">{{ props.item.label }}</span>
            </div>
        </SidebarMenuButton>
    </SidebarMenuItem>
</template>
