<script setup lang="ts">
import type { ProfileImageProps } from "@/types";
import { cn } from "@/lib";

const props = defineProps<ProfileImageProps>();
</script>

<template>
    <img
        :class="cn('object-cover', props.class)"
        :alt="props.alt || 'Profile Picture'"
        :height="props.dimensions[0]"
        :width="props.dimensions[1]"
        :src="props.src || ''"
    />
</template>
