<script setup lang="ts">
import { DialogDescription, type DialogDescriptionProps } from "reka-ui";
import { delegatedProps } from "../../shared";
import type { ClassProp } from "@/types";
import { cn } from "@/lib";

const props = defineProps<DialogDescriptionProps & ClassProp>();

const delegated = delegatedProps(props);
</script>

<template>
    <DialogDescription
        :class="cn('text-slate-900 dark:text-slate-200 text-sm', props.class)"
        data-slot="sheet-description"
        v-bind="delegated"
    >
        <slot />
    </DialogDescription>
</template>
