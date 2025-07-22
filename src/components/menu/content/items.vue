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
    <SidebarMenuItem class="rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600" :key="`menu-item-${props.item.label}-${props.index}`">
        <SidebarMenuButton
            class="flex items-center justify-between w-full px-3 py-2 text-sm transition-colors duration-200"
            v-if="props.item.label !== 'Theme Settings'"
            @click="handleMenuButtonClick"
        >
            <div v-if="props.item.icon" class="flex w-full items-center gap-2 hover:cursor-pointer">
                <props.item.icon class="h-4 w-4" />
                <span class="font-medium">{{ props.item.label }}</span>
            </div>
        </SidebarMenuButton>
    </SidebarMenuItem>
</template>
