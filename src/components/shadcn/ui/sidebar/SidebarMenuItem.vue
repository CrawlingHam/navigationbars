<script setup lang="ts">
import type { ClassProp } from "@/types";
import { cn } from "@/lib";

const props = defineProps<ClassProp>();
</script>

<template>
    <li data-slot="sidebar-menu-item" data-sidebar="menu-item" :class="cn('group/menu-item relative', props.class)">
        <slot />
    </li>
</template>
