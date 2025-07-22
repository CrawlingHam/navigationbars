<script setup lang="ts">
import type { UserProfileProps } from "@/types";
import ProfileImage from "./image.vue";
import { cn } from "@/lib";

const props = defineProps<UserProfileProps>();
</script>

<template>
    <ProfileImage
        :class="cn('object-cover rounded-full transition-opacity duration-300')"
        :alt="props.alt || 'Profile Picture'"
        :dimensions="props.dimensions"
        :src="props.src"
        priority
    />
</template>
