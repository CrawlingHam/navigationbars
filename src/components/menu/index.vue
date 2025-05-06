<script setup lang="ts">
import { Popover, PopoverContent, SidebarProvider, SidebarInset, Sidebar } from "../shadcn";
import type { NavigationbarMenuProps } from "@/types";
import MenuTrigger from "./trigger.vue";
import { MenuContent } from "./content";
import { computed, ref, watch } from "vue";

const props = defineProps<NavigationbarMenuProps>();
const localOpen = ref(props.navbarMenuOpen);

watch(
    () => props.navbarMenuOpen,
    (newValue) => {
        localOpen.value = newValue;
    }
);

const themeButtons = [{ id: "system" }, { id: "light" }, { id: "dark" }];
const showBaseMenuContent = computed(() => !props.themeMenuOpen);

const content = computed(() => {
    return showBaseMenuContent.value
        ? props.groups
        : props.themeMenuOpen
          ? [[{ label: "Theme Settings", themes: themeButtons }]]
          : [[{ label: "Account Switcher" }]];
});
</script>

<template>
    <Popover v-model:open="localOpen" @update:open="props.toggleNavbarMenu">
        <MenuTrigger :profile="props.profile" />

        <PopoverContent class="w-56 overflow-hidden rounded-lg shadow-lg max-h-[calc(100vh-40rem)] mt-2" align="end">
            <SidebarProvider>
                <SidebarInset class="bg-transparent h-auto w-full">
                    <Sidebar collapsible="none" class="w-full">
                        <MenuContent
                            :toggle-account-menu="props.toggleAccountMenu"
                            :toggle-theme-menu="props.toggleThemeMenu"
                            :theme-menu-open="props.themeMenuOpen"
                            :groups="content"
                        />
                    </Sidebar>
                </SidebarInset>
            </SidebarProvider>
        </PopoverContent>
    </Popover>
</template>
