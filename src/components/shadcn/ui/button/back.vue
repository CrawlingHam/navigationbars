<script setup lang="ts">
import { SidebarMenuButton } from "../sidebar";
import type { BackButtonProps } from "@/types";
import { MoveLeft } from "lucide-vue-next";

const props = defineProps<BackButtonProps>();
</script>

<template>
    <SidebarMenuButton class="w-full h-full rounded-md px-4 text-left text-slate-700" @click="props.onClick">
        <div class="flex items-center gap-2 hover:cursor-pointer w-full h-[30px] p-0">
            <MoveLeft class="h-5 w-5" />
            <span class="font-medium text-sm text-slate-700">{{ props.btnText }}</span>
        </div>
    </SidebarMenuButton>
</template>
