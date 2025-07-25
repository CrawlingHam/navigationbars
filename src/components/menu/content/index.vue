<script setup lang="ts">
import { SidebarContent, SidebarGroup, SidebarGroupContent } from "@/components/shadcn";
import type { MenuContentProps } from "@/types";
import MenuContentItemsGroup from "./group.vue";

const props = defineProps<MenuContentProps>();
</script>

<template>
    <SidebarContent v-if="props.groups" class="py-2 h-auto flex-none pr-11">
        <SidebarGroup class="w-full" v-for="(group, index) in props.groups" :key="`group-${index}`">
            <SidebarGroupContent class="gap-0">
                <MenuContentItemsGroup :group="group" :theme-menu-open="props.themeMenuOpen" :toggle-theme-menu="props.toggleThemeMenu" />
            </SidebarGroupContent>
        </SidebarGroup>
    </SidebarContent>
</template>
