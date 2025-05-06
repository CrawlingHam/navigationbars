<script setup lang="ts">
import { PopoverContent, PopoverPortal, useForwardPropsEmits } from "reka-ui";
import type { PopoverContentEmits, PopoverContentProps } from "reka-ui";
import { computed, type HTMLAttributes } from "vue";
import { cn } from "flixburst-tailwind";

defineOptions({
    inheritAttrs: false,
});

const props = withDefaults(defineProps<PopoverContentProps & { class?: HTMLAttributes["class"] }>(), {
    align: "center",
    sideOffset: 4,
});
const emits = defineEmits<PopoverContentEmits>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);

const popoverContentStyling = computed(() =>
    cn(
        "z-50 w-72 rounded-md border border-slate-200 dark:border-slate-800 shadow-md outline-none p-1 transition-colors duration-200",
        props.class
    )
);
</script>

<template>
    <PopoverPortal>
        <PopoverContent data-slot="popover-content" v-bind="{ ...forwarded, ...$attrs }" :class="popoverContentStyling">
            <slot />
        </PopoverContent>
    </PopoverPortal>
</template>
