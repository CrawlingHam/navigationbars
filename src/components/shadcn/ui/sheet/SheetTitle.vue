<script setup lang="ts">
import { DialogTitle, type DialogTitleProps } from "reka-ui";
import { delegatedProps } from "../../shared";
import type { ClassProp } from "@/types";
import { cn } from "@/lib";

const props = defineProps<DialogTitleProps & ClassProp>();

const delegated = delegatedProps(props);
</script>

<template>
    <DialogTitle data-slot="sheet-title" :class="cn('text-foreground font-semibold', props.class)" v-bind="delegated">
        <slot />
    </DialogTitle>
</template>
