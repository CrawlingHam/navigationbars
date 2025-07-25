<script setup lang="ts">
import { SidebarMenuItem, SidebarMenuButton, BackButton } from "@/components/shadcn";
import type { ThemeSelectorProps, Theme } from "@/types";
import { computed, onMounted, ref } from "vue";
import { Check } from "lucide-vue-next";
import { capitalize } from "@/utils";

const props = defineProps<ThemeSelectorProps>();

const currentTheme = ref<Theme>("system");

const setCurrentTheme = (theme: Theme) => (currentTheme.value = theme);

onMounted(() => {
    const theme = (localStorage.getItem("theme") as Theme) || "system";
    setCurrentTheme(theme);
});

const handleSetTheme = (theme: Theme) => {
    localStorage.setItem("theme", theme);
    setCurrentTheme(theme);
    window.dispatchEvent(new CustomEvent("theme-toggle", { detail: theme }));
};

const key = computed<string>(() => `theme-selector-${props.index}`);
</script>

<template>
    <template v-if="props.themeMenuOpen && props.item.themes">
        <SidebarMenuItem :key="key" class="rounded-lg w-full ml-1">
            <BackButton :btn-text="props.item.label || 'Appearances'" :on-click="props.toggleThemeMenu" />
        </SidebarMenuItem>

        <SidebarMenuItem
            class="pl-1 ml-1 border-b border-slate-100 dark:border-b-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg w-full"
            v-for="(theme, index) in props.item.themes"
            :key="`theme-${theme.theme}-${index}`"
        >
            <SidebarMenuButton class="hover:cursor-pointer" @click="() => handleSetTheme(theme.theme)">
                {{ capitalize(theme.theme) }}
                <Check v-if="theme.theme === currentTheme" class="ml-3 flex w-full justify-end text-green-500" />
            </SidebarMenuButton>
        </SidebarMenuItem>
    </template>
</template>
