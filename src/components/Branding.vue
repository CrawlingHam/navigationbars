<script setup lang="ts">
import type { BrandingProps } from "@/types";
import { cn } from "flixburst-tailwind";
import { services } from "@/services";
import { Logo } from "@/assets";
import { computed } from "vue";

const { className, title = "Flixburst" } = defineProps<BrandingProps>();

const brandingStyling = computed(() => cn("px-4", className));
</script>

<template>
    <div :class="brandingStyling">
        <a
            :href="services.apps.landing.base"
            class="flex gap-2 items-center no-underline transition-all duration-200 hover:scale-101 cursor-pointer"
        >
            <Logo class-name="h-16 w-16 flex-shrink-0" />
            <span class="text-xl font-semibold whitespace-nowrap">{{ title }}</span>
        </a>
    </div>
</template>
