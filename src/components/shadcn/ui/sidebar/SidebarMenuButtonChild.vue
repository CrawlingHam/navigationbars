<script setup lang="ts">
import { sidebarMenuButtonVariants } from "../../variants";
import type { SidebarMenuButtonProps } from "@/types";
import { cn } from "flixburst-tailwind";
import { Primitive } from "reka-ui";

const props = withDefaults(defineProps<SidebarMenuButtonProps>(), {
    variant: "default",
    size: "default",
    as: "button",
});
</script>

<template>
    <Primitive
        :class="cn(sidebarMenuButtonVariants({ variant, size }), props.class)"
        data-slot="sidebar-menu-button"
        data-sidebar="menu-button"
        :data-active="isActive"
        :as-child="asChild"
        :data-size="size"
        v-bind="$attrs"
        :as="as"
    >
        <slot />
    </Primitive>
</template>
