<script setup lang="ts">
import type { ProfileProps } from "@/types";
import { isValidImageSrc } from "@/utils";
import GuestProfile from "./guest.vue";
import UserProfile from "./user.vue";

const props = defineProps<ProfileProps>();

const src = "src" in props ? props.src : undefined;
const alt = "src" in props ? props.alt : undefined;
const letter = "letter" in props ? props.letter : "";
</script>

<template>
    <UserProfile v-if="isValidImageSrc(src)" :dimensions="dimensions" :alt="alt" :src="src" />
    <GuestProfile v-else :dimensions="dimensions" :letter="letter" />
</template>
