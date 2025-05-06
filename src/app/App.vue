<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import type { NavigationbarProps } from "@/types";
import { Navigationbar } from "@/components";

const { profile, title } = defineProps<NavigationbarProps>();

const theme = ref<string | null>(null);

onMounted(() => {
    theme.value = window.localStorage.getItem("theme");
    document.documentElement.classList.add(theme.value === "dark" ? "dark" : "light");
    console.log("onMounted: theme set to", theme.value);

    // Custom event listener for 'theme-toggle'
    const handleThemeToggle = (event: Event) => {
        const customEvent = event as CustomEvent;
        const newTheme = customEvent.detail?.theme;

        if (newTheme === "dark" || newTheme === "light") {
            document.documentElement.classList.remove("dark", "light");
            document.documentElement.classList.add(newTheme);
            window.localStorage.setItem("theme", newTheme);
            console.log("theme-toggle event: theme set to", newTheme);
        }
    };

    window.addEventListener("theme-toggle", handleThemeToggle);

    // Clean up on unmount
    onBeforeUnmount(() => {
        window.removeEventListener("theme-toggle", handleThemeToggle);
    });
});
</script>

<template>
    <Navigationbar :profile="profile" :title="title" />
</template>
