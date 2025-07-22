<script setup lang="ts">
import type { ClassProp } from "@/types";
import { cn } from "@/lib";

const props = defineProps<ClassProp>();
</script>

<template>
    <ul data-slot="sidebar-menu" data-sidebar="menu" :class="cn('flex w-full min-w-0 flex-col gap-1', props.class)">
        <slot />
    </ul>
</template>
