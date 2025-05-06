<script setup lang="ts">
import { SidebarContent, SidebarGroup, SidebarGroupContent } from "../../shadcn";
import type { MenuContentProps } from "@/types";
import MenuContentItemsGroup from "./group.vue";
import { computed } from "vue";

const { groups, toggleThemeMenu, themeMenuOpen, toggleAccountMenu } = defineProps<MenuContentProps>();

const shouldRender = computed(() => {
    return !!groups;
});
</script>

<template>
    <template v-if="shouldRender">
        <SidebarContent class="py-2 h-auto flex-none w-full">
            <SidebarGroup
                class="border-b border-b-slate-200 dark:border-b-slate-600 last:border-none w-full"
                v-for="(group, groupIndex) in groups"
                :key="`group-${groupIndex}`"
            >
                <SidebarGroupContent class="gap-0 w-full">
                    <MenuContentItemsGroup
                        :toggle-account-menu="toggleAccountMenu"
                        :toggle-theme-menu="toggleThemeMenu"
                        :theme-menu-open="themeMenuOpen"
                        :group="group"
                    />
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>
    </template>
</template>
