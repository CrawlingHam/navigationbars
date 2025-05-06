<script setup lang="ts">
import type { ProfileImageProps } from "@/types";
import { cn } from "flixburst-tailwind";
import { computed } from "vue";

const { alt, className, dimensions, src } = defineProps<ProfileImageProps>();

const styling = computed(() => cn("object-cover", className));
</script>

<template>
    <img :alt="alt || 'Profile Picture'" :height="dimensions[0]" :width="dimensions[1]" :class="styling" :src="src || ''" />
</template>
