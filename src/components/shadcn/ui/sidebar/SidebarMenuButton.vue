<script setup lang="ts">
import { Tooltip, TooltipContent, TooltipTrigger } from "../tooltip";
import SidebarMenuButtonChild from "./SidebarMenuButtonChild.vue";
import type { SidebarMenuButtonProps } from "@/types";
import { delegatedProps } from "../../shared";
import { useSidebar } from "../../contexts";
import { type Component } from "vue";

defineOptions({ inheritAttrs: false });

const props = withDefaults(
    defineProps<
        SidebarMenuButtonProps & {
            tooltip?: string | Component;
        }
    >(),
    {
        as: "button",
        variant: "default",
        size: "default",
    }
);

const { isMobile, state } = useSidebar();

const delegated = delegatedProps(props);
</script>

<template>
    <SidebarMenuButtonChild v-if="!tooltip" :class="props.class" v-bind="{ ...delegated, ...$attrs }">
        <slot />
    </SidebarMenuButtonChild>

    <Tooltip v-else>
        <TooltipTrigger as-child>
            <SidebarMenuButtonChild v-bind="{ ...delegated, ...$attrs }">
                <slot />
            </SidebarMenuButtonChild>
        </TooltipTrigger>
        <TooltipContent side="right" align="center" :hidden="state !== 'collapsed' || isMobile">
            <template v-if="typeof tooltip === 'string'">
                {{ tooltip }}
            </template>
            <component :is="tooltip" v-else />
        </TooltipContent>
    </Tooltip>
</template>
