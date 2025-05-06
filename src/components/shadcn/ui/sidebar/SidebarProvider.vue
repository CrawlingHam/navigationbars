<script setup lang="ts">
import { SIDEBAR_COOKIE_MAX_AGE, SIDEBAR_COOKIE_NAME, SIDEBAR_KEYBOARD_SHORTCUT, SIDEBAR_WIDTH, SIDEBAR_WIDTH_ICON } from "../../constants";
import { useEventListener, useMediaQuery, useVModel } from "@vueuse/core";
import { computed, type HTMLAttributes, type Ref, ref } from "vue";
import { provideSidebarContext } from "../../contexts";
import { TooltipProvider } from "reka-ui";
import { cn } from "flixburst-tailwind";

const props = withDefaults(
    defineProps<{
        defaultOpen?: boolean;
        open?: boolean;
        class?: HTMLAttributes["class"];
    }>(),
    {
        defaultOpen: true,
        open: undefined,
    }
);

const emits = defineEmits<{
    "update:open": [open: boolean];
}>();

const isMobile = useMediaQuery("(max-width: 768px)");
const openMobile = ref(false);

const open = useVModel(props, "open", emits, {
    defaultValue: props.defaultOpen ?? false,
    passive: (props.open === undefined) as false,
}) as Ref<boolean>;

function setOpen(value: boolean) {
    open.value = value; // emits('update:open', value)

    // This sets the cookie to keep the sidebar state.
    document.cookie = `${SIDEBAR_COOKIE_NAME}=${open.value}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
}

function setOpenMobile(value: boolean) {
    openMobile.value = value;
}

// Helper to toggle the sidebar.
function toggleSidebar() {
    return isMobile.value ? setOpenMobile(!openMobile.value) : setOpen(!open.value);
}

useEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggleSidebar();
    }
});

// We add a state so that we can do data-state="expanded" or "collapsed".
// This makes it easier to style the sidebar with Tailwind classes.
const state = computed(() => (open.value ? "expanded" : "collapsed"));

provideSidebarContext({
    toggleSidebar,
    setOpenMobile,
    openMobile,
    isMobile,
    setOpen,
    state,
    open,
});
</script>

<template>
    <TooltipProvider :delay-duration="0">
        <div
            data-slot="sidebar-wrapper"
            :style="{
                '--navbar-sidebar-width': SIDEBAR_WIDTH,
                '--navbar-sidebar-width-icon': SIDEBAR_WIDTH_ICON,
            }"
            :class="cn('group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full', props.class)"
            v-bind="$attrs"
        >
            <slot />
        </div>
    </TooltipProvider>
</template>
