<script setup lang="ts">
import type { UserProfileProps } from "@/types";
import ProfileImage from "./image.vue";

const { alt, dimensions, src } = defineProps<UserProfileProps>();
</script>

<template>
    <ProfileImage
        class-name="object-cover rounded-full transition-opacity duration-300"
        :alt="alt || 'Profile Picture'"
        :dimensions="dimensions"
        :priority="true"
        :src="src"
    />
</template>
