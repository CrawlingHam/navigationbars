<script setup lang="ts">
import { SidebarMenuButton } from "./sidebar";
import type { BackButtonProps } from "@/types";
import { ArrowLeft } from "lucide-vue-next";

const { onClick, buttonText } = defineProps<BackButtonProps>();
</script>

<template>
    <SidebarMenuButton
        class="w-full rounded-md px-4 text-left text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-600 hover:cursor-pointer"
        @click="onClick"
    >
        <div class="flex items-center gap-2">
            <ArrowLeft class="h-5 w-5" />
            <span class="font-medium">{{ buttonText }}</span>
        </div>
    </SidebarMenuButton>
</template>
