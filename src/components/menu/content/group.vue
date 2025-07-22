<script setup lang="ts">
import type { MenuContentItemsGroupProps } from "@/types";
import { SidebarMenu } from "@/components/shadcn";
import ThemeSelector from "../theme/selector.vue";
import MenuItems from "./items.vue";

const props = defineProps<MenuContentItemsGroupProps>();
</script>

<template>
    <SidebarMenu v-if="props.group" class="h-full">
        <div v-for="(item, index) in props.group" :key="`mItem-${index}-${item.label || index}`" class="flex flex-col gap-2 h-full">
            <ThemeSelector :toggle-theme-menu="props.toggleThemeMenu" :theme-menu-open="props.themeMenuOpen" :index="index" :item="item" />
            <MenuItems :toggle-theme-menu="props.toggleThemeMenu" :index="index" :item="item" />
        </div>
    </SidebarMenu>
</template>
