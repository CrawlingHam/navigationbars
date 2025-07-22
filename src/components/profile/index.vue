<script setup lang="ts">
import type { ProfileProps } from "@/types";
import { isValidImageSrc } from "@/utils";
import GuestProfile from "./guest.vue";
import UserProfile from "./user.vue";

const props = defineProps<ProfileProps>();

const containsLetter = "letter" in props;
const containsSrc = "src" in props;

const src = containsSrc ? props.src : undefined;
const alt = containsSrc ? props.alt : undefined;
const letter = containsLetter ? props.letter : "";
</script>

<template>
    <UserProfile v-if="isValidImageSrc(src)" :dimensions="props.dimensions" :alt="alt" :src="src" />
    <GuestProfile v-else :dimensions="props.dimensions" :letter="letter" />
</template>
