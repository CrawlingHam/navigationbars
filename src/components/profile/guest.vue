<script setup lang="ts">
import type { GuestProfileProps } from "@/types";
import { computed } from "vue";

const { dimensions, letter } = defineProps<GuestProfileProps>();

const style = computed(() => ({
    fontSize: `${dimensions[0] * 0.4}px`,
    height: dimensions[1],
    width: dimensions[0],
}));
</script>

<template>
    <div class="flex items-center justify-center rounded-full font-medium transition-all duration-200 hover:scale-105" :style="style">
        {{ letter?.toUpperCase() }}
    </div>
</template>
