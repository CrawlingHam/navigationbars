<script setup lang="ts">
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetHeader } from "../sheet";
import { SIDEBAR_WIDTH_MOBILE } from "../../constants";
import { useSidebar } from "../../contexts";
import type { SidebarProps } from "@/types";
import { cn } from "@/lib";

defineOptions({ inheritAttrs: false });

const props = withDefaults(defineProps<SidebarProps>(), {
    collapsible: "offcanvas",
    variant: "sidebar",
    side: "left",
});

const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
</script>

<template>
    <div
        v-if="collapsible === 'none'"
        data-slot="sidebar"
        :class="cn('bg-background text-foreground flex h-full w-(--navbar-sidebar-width) flex-col', props.class)"
        v-bind="$attrs"
    >
        <slot />
    </div>

    <Sheet v-else-if="isMobile" :open="openMobile" v-bind="$attrs" @update:open="setOpenMobile">
        <SheetContent
            class="bg-background text-foreground w-(--navbar-sidebar-width) p-0 [&>button]:hidden"
            data-sidebar="sidebar"
            data-slot="sidebar"
            data-mobile="true"
            :side="side"
            :style="{
                '--navbar-sidebar-width': SIDEBAR_WIDTH_MOBILE,
            }"
        >
            <SheetHeader class="sr-only">
                <SheetTitle>Sidebar</SheetTitle>
                <SheetDescription>Displays the mobile sidebar.</SheetDescription>
            </SheetHeader>
            <div class="flex h-full w-full flex-col">
                <slot />
            </div>
        </SheetContent>
    </Sheet>

    <div
        v-else
        class="group peer text-foreground hidden md:block"
        data-slot="sidebar"
        :data-state="state"
        :data-collapsible="state === 'collapsed' ? collapsible : ''"
        :data-variant="variant"
        :data-side="side"
    >
        <!-- This is what handles the sidebar gap on desktop  -->
        <div
            :class="
                cn(
                    'relative w-(--navbar-sidebar-width) bg-transparent transition-[width] duration-200 ease-linear',
                    'group-data-[collapsible=offcanvas]:w-0',
                    'group-data-[side=right]:rotate-180',
                    variant === 'floating' || variant === 'inset'
                        ? 'group-data-[collapsible=icon]:w-[calc(var(--navbar-sidebar-width-icon)+(--spacing(4)))]'
                        : 'group-data-[collapsible=icon]:w-(--navbar-sidebar-width-icon)'
                )
            "
        />
        <div
            :class="
                cn(
                    'fixed inset-y-0 z-10 hidden h-svh w-(--navbar-sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex',
                    side === 'left'
                        ? 'left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--navbar-sidebar-width)*-1)]'
                        : 'right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--navbar-sidebar-width)*-1)]',
                    // Adjust the padding for floating and inset variants.
                    variant === 'floating' || variant === 'inset'
                        ? 'p-2 group-data-[collapsible=icon]:w-[calc(var(--navbar-sidebar-width-icon)+(--spacing(4))+2px)]'
                        : 'group-data-[collapsible=icon]:w-(--navbar-sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l',
                    props.class
                )
            "
            v-bind="$attrs"
        >
            <div
                data-sidebar="sidebar"
                class="bg-background group-data-[variant=floating]:border-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
            >
                <slot />
            </div>
        </div>
    </div>
</template>
