<script setup lang="ts">
import type { Profile as ProfileType } from "@/types";
import { PopoverTrigger } from "../shadcn";
import Profile from "../profile/index.vue";
import { cn } from "@/lib";

const props = defineProps<ProfileType>();
</script>

<template>
    <PopoverTrigger asChild>
        <button class="relative">
            <div
                :class="
                    cn(
                        'w-9 h-9 rounded-full transition-all duration-200 hover:scale-105',
                        'flex items-center cursor-pointer justify-center'
                    )
                "
            >
                <Profile :letter="props.username?.charAt(0).toUpperCase() || 'G'" :dimensions="[32, 32]" :src="props.picture" />
            </div>
        </button>
    </PopoverTrigger>
</template>
