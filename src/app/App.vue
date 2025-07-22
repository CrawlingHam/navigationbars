<script setup lang="ts">
import { Brand, Menu } from "@/components";
import type { AppProps } from "@/types";
import { ref } from "vue";

const props = defineProps<AppProps>();

const themeMenuOpen = ref<boolean>(false);
const menuOpen = ref<boolean>(false);
</script>

<template>
    <nav class="fixed left-0 right-0 top-0 z-50 w-full shadow-md h-16">
        <div class="w-full flex animated-border-b">
            <div class="flex w-full items-center justify-between">
                <Brand :logo="props.logo" :title="props.title" />

                <div class="flex justify-end mr-8 rounded-full">
                    <Menu
                        :toggle-theme-menu="() => (themeMenuOpen = !themeMenuOpen)"
                        :toggle-menu="() => (menuOpen = !menuOpen)"
                        :theme-menu-open="themeMenuOpen"
                        :navbar-menu-open="menuOpen"
                        :profile="props.profile"
                    />
                </div>
            </div>
        </div>
    </nav>
</template>
