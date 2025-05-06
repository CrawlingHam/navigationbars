<script setup lang="ts">
import { SidebarMenuItem, SidebarMenuButton, BackButton } from "../../shadcn";
import type { Theme, ThemeMenuItem, ThemeSelectorProps } from "@/types";
import { computed, onMounted, ref } from "vue";
import { Check } from "lucide-vue-next";

const { item, themeMenuOpen, toggleThemeMenu, itemIndex } = defineProps<ThemeSelectorProps>();

const currentTheme = ref<Theme>("system");

const setCurrentTheme = (theme: Theme) => (currentTheme.value = theme);

onMounted(() => {
    const theme = (localStorage.getItem("theme") as Theme) || "system";
    setCurrentTheme(theme);
});

const handleSetTheme = (theme: Theme) => {
    localStorage.setItem("theme", theme);
    setCurrentTheme(theme);
    // Dispatch a custom event to notify listeners with the theme value
    window.dispatchEvent(new CustomEvent("theme-toggle", { detail: theme }));
};

const shouldShowThemeSelector = computed(() => themeMenuOpen && "themes" in item);
const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const themeItem = item as ThemeMenuItem;
</script>

<template>
    <template v-if="shouldShowThemeSelector">
        <SidebarMenuItem :key="`theme-selector-${itemIndex}`">
            <BackButton
                class="w-full text-slate-900 dark:text-slate-200"
                :button-text="themeItem.label || 'Appearances'"
                @click="toggleThemeMenu"
            />
        </SidebarMenuItem>

        <SidebarMenuItem v-for="(theme, index) in themeItem.themes" :key="`theme-option-${theme.id}-${index}`">
            <SidebarMenuButton
                @click="handleSetTheme(theme.id)"
                class="w-full px-4 py-2 border-b border-slate-50 dark:border-b-slate-800 text-left text-sm text-slate-900 hover:bg-slate-200 dark:text-slate-200 dark:hover:bg-slate-600 hover:cursor-pointer"
            >
                {{ capitalize(theme.id) }}
                <Check v-if="theme.id === currentTheme" class="ml-3 flex w-full justify-end text-green-500" />
            </SidebarMenuButton>
        </SidebarMenuItem>
    </template>
</template>
