<script setup lang="ts">
import { buttonVariants } from "../../variants";
import type { ButtonProps } from "@/types";
import { cn } from "@/lib";

withDefaults(defineProps<ButtonProps>(), {
    variant: "default",
    size: "default",
    as: "button",
});

defineOptions({ inheritAttrs: false });
</script>

<template>
    <component :is="as" :class="cn(buttonVariants({ variant, size }), $attrs.class ?? '')" v-bind="$attrs">
        <slot />
    </component>
</template>
