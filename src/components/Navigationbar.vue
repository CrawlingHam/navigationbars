<script setup lang="ts">
import { accountButtons, appearanceItems, authButton } from "@/data";
import NavigationbarBranding from "./Branding.vue";
import type { NavigationbarProps } from "@/types";
import { useUser, useNavbar } from "@/stores";
import { NavigationbarMenu } from "./menu";
import { computed, onMounted } from "vue";

const navbarStore = useNavbar();
const openNavbarMenu = computed(() => navbarStore.openNavbarMenu);
const openThemeMenu = computed(() => navbarStore.openThemeMenu);
const { toggleNavbarMenu, toggleAccountMenu, toggleThemeMenu } = navbarStore;
const { title, profile: profileProp } = defineProps<NavigationbarProps>();
const { profile, setProfile } = useUser();

onMounted(() => {
    if (profileProp) setProfile(profileProp);
});

const groups = computed(() => {
    return [accountButtons(profile), [appearanceItems], [authButton(profile)]];
});
</script>

<template>
    <nav class="fixed left-0 right-0 top-0 z-50 w-full shadow-md h-16">
        <div class="w-full flex animated-border-b">
            <div class="flex w-full items-center justify-between">
                <NavigationbarBranding className="w-full flex justify-start" :title="title" />

                <div class="flex justify-end mr-8 rounded-full">
                    <NavigationbarMenu
                        :toggleAccountMenu="toggleAccountMenu"
                        :toggleNavbarMenu="toggleNavbarMenu"
                        :toggleThemeMenu="toggleThemeMenu"
                        :navbarMenuOpen="openNavbarMenu"
                        :themeMenuOpen="openThemeMenu"
                        :profile="profile"
                        :groups="groups"
                    />
                </div>
            </div>
        </div>
    </nav>
</template>
