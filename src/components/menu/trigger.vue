<script setup lang="ts">
import type { Profile as ProfileType } from "@/types";
import { PopoverTrigger } from "../shadcn";
import Profile from "../profile/index.vue";
import { computed } from "vue";
import { cn } from "@/lib";

const props = defineProps<ProfileType>();

const divStyling = computed(() =>
    cn(
        "w-9 h-9 rounded-full transition-all duration-200 hover:ring-2 hover:ring-primary/50 hover:scale-105",
        "flex items-center cursor-pointer bg-slate-200 dark:bg-slate-700 justify-center"
    )
);
</script>

<template>
    <PopoverTrigger asChild>
        <button class="relative">
            <div :class="divStyling">
                <Profile :letter="props.username?.charAt(0).toUpperCase() || 'G'" :dimensions="[32, 32]" :src="props.picture" />
            </div>
        </button>
    </PopoverTrigger>
</template>
