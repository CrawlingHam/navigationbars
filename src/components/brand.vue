<script setup lang="ts">
import type { NavigationbarBrandProps } from "@/types";
import Logo from "@/assets/Logo.vue";
import { computed } from "vue";

const props = defineProps<NavigationbarBrandProps>();

const BrandLogo = computed(() => props.logo ?? Logo);
</script>

<template>
    <div class="px-4">
        <a class="flex gap-2 items-center no-underline transition-all duration-200 hover:scale-101 cursor-pointer" href="/">
            <BrandLogo class="h-16 w-16 flex-shrink-0" />
            <span class="text-xl font-semibold whitespace-nowrap">{{ props.title }}</span>
        </a>
    </div>
</template>
