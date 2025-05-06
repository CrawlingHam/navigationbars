<script setup lang="ts">
import type { MenuTriggerProps } from "@/types";
import { ProfilePicture } from "../profile";
import { PopoverTrigger } from "../shadcn";
import { computed } from "vue";

const { profile } = defineProps<MenuTriggerProps>();

const letter = computed(() => profile?.name?.charAt(0) || profile?.email?.charAt(0).toUpperCase() || "G");
</script>

<template>
    <PopoverTrigger as-child>
        <button class="relative">
            <div
                class="flex items-center cursor-pointer bg-slate-200 dark:bg-slate-700 justify-center w-9 h-9 rounded-full transition-all duration-200 hover:ring-2 hover:scale-105"
            >
                <ProfilePicture :dimensions="[32, 32]" :clickable="false" :src="profile?.picture" :letter="letter" />
            </div>
        </button>
    </PopoverTrigger>
</template>
