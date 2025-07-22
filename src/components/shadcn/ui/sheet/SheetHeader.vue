<script setup lang="ts">
import type { ClassProp } from "@/types";
import { cn } from "@/lib";

const props = defineProps<ClassProp>();
</script>

<template>
    <div data-slot="sheet-header" :class="cn('flex flex-col gap-1.5 p-4', props.class)">
        <slot />
    </div>
</template>
