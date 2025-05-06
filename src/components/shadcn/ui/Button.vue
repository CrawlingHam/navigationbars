<script setup lang="ts">
import { buttonVariants } from "../variants";
import type { ButtonProps } from "@/types";
import { cn } from "flixburst-tailwind";
import { Primitive } from "reka-ui";

const props = withDefaults(defineProps<ButtonProps>(), {
    as: "button",
});
</script>

<template>
    <Primitive data-slot="button" :as="as" :as-child="asChild" :class="cn(buttonVariants({ variant, size }), props.class)">
        <slot />
    </Primitive>
</template>
