<script setup lang="ts">
import type { MenuContentGroupProps } from "@/types";
import { SidebarMenu } from "../../shadcn";
import MenuContentItems from "./items.vue";
import { ThemeSelector } from "../theme";
import { computed } from "vue";

const { group, toggleThemeMenu, themeMenuOpen, toggleAccountMenu } = defineProps<MenuContentGroupProps>();

const shouldRender = computed(() => {
    return !!group;
});
</script>

<template>
    <template v-if="shouldRender">
        <SidebarMenu class="h-full">
            <div
                v-for="(item, itemIndex) in group"
                :key="`menu-content-item-${itemIndex}-${item.label || itemIndex}`"
                class="flex flex-col gap-2 h-full"
            >
                <ThemeSelector :toggle-theme-menu="toggleThemeMenu" :theme-menu-open="themeMenuOpen" :item-index="itemIndex" :item="item" />
                <MenuContentItems
                    :toggle-account-menu="toggleAccountMenu"
                    :toggle-theme-menu="toggleThemeMenu"
                    :item-index="itemIndex"
                    :item="item"
                />
            </div>
        </SidebarMenu>
    </template>
</template>
