<script setup lang="ts">
import { Sidebar, SidebarInset, SidebarProvider, Popover, PopoverContent } from "@/components/shadcn";
import type { MenuItemGroups, NavigationbarMenuProps, ThemeSubMenuItem } from "@/types";
import MenuContent from "./content/index.vue";
import MenuTrigger from "./trigger.vue";
import groupContent from "./config";
import { computed } from "vue";

const props = defineProps<NavigationbarMenuProps>();

const groups = computed<MenuItemGroups | ThemeSubMenuItem[][]>(() => groupContent(props.themeMenuOpen, props.profile));
</script>

<template>
    <Popover :open="props.navbarMenuOpen" @update:open="props.toggleMenu">
        <MenuTrigger v-bind="props.profile" />

        <PopoverContent class="w-56 mt-[10px] p-1 pl-2 pr-2 overflow-hidden rounded-lg shadow-lg max-h-[calc(100vh-40rem)]" align="end">
            <SidebarProvider>
                <SidebarInset class="bg-transparent h-[calc(100vh-41rem)]">
                    <Sidebar collapsible="none">
                        <MenuContent :groups="groups" :theme-menu-open="props.themeMenuOpen" :toggle-theme-menu="props.toggleThemeMenu" />
                    </Sidebar>
                </SidebarInset>
            </SidebarProvider>
        </PopoverContent>
    </Popover>
</template>
