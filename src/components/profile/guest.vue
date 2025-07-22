<script setup lang="ts">
import type { GuestProfileProps } from "@/types";
import { computed } from "vue";

const props = defineProps<GuestProfileProps>();

const style = computed(() => ({
    fontSize: `${props.dimensions[0] * 0.4}px`,
    height: props.dimensions[1],
    width: props.dimensions[0],
}));
</script>

<template>
    <div class="flex items-center justify-center rounded-full font-medium transition-all duration-200 hover:scale-105" :style="style">
        {{ props.letter?.toUpperCase() }}
    </div>
</template>
