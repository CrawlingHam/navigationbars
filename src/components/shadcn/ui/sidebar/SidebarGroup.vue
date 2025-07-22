<script setup lang="ts">
import type { ClassProp } from "@/types";
import { cn } from "@/lib";

const props = defineProps<ClassProp>();
</script>

<template>
    <div data-slot="sidebar-group" data-sidebar="group" :class="cn('relative flex w-full min-w-0 flex-col p-2', props.class)">
        <slot />
    </div>
</template>
