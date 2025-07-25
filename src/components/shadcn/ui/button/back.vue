<script setup lang="ts">
import type { BackButtonProps } from "@/types";
import { MoveLeft } from "lucide-vue-next";
import { Button } from "../button";

const props = defineProps<BackButtonProps>();
</script>

<template>
    <Button
        class="w-full h-full rounded-md px-4 text-left text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 hover:cursor-pointer"
        @click="props.onClick"
    >
        <div class="flex items-center gap-2 hover:cursor-pointer w-full h-4 p-0">
            <MoveLeft class="h-full w-full" />
            <span class="font-medium text-sm text-slate-700 dark:text-slate-200">{{ props.btnText }}</span>
        </div>
    </Button>
</template>
