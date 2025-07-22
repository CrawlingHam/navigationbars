<script setup lang="ts">
import type { FlixburstLogoProps } from "@/types";
import { cn } from "@/lib";

const props = defineProps<FlixburstLogoProps>();
</script>

<template>
    <svg :class="cn(props.class, 'fill-current')" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1422 800">
        <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="oooscillate-grad">
                <stop stop-color="hsl(206, 75%, 49%)" stop-opacity="1" offset="0%"></stop>
                <stop stop-color="hsl(331, 90%, 56%)" stop-opacity="1" offset="100%"></stop>
            </linearGradient>
        </defs>

        <g stroke-width="2" stroke="url(#oooscillate-grad)" fill="none" stroke-linecap="round">
            <path d="M 1422 448 Q 1066.5 -100 711 400 Q 355.5 900 0 448" opacity="0.15"></path>
            <path d="M 1422 420 Q 1066.5 -100 711 400 Q 355.5 900 0 420" opacity="0.21"></path>
            <path d="M 1422 392 Q 1066.5 -100 711 400 Q 355.5 900 0 392" opacity="0.28"></path>
            <path d="M 1422 364 Q 1066.5 -100 711 400 Q 355.5 900 0 364" opacity="0.34"></path>
            <path d="M 1422 336 Q 1066.5 -100 711 400 Q 355.5 900 0 336" opacity="0.40"></path>
            <path d="M 1422 308 Q 1066.5 -100 711 400 Q 355.5 900 0 308" opacity="0.47"></path>
            <path d="M 1422 280 Q 1066.5 -100 711 400 Q 355.5 900 0 280" opacity="0.53"></path>
            <path d="M 1422 252 Q 1066.5 -100 711 400 Q 355.5 900 0 252" opacity="0.59"></path>
            <path d="M 1422 224 Q 1066.5 -100 711 400 Q 355.5 900 0 224" opacity="0.66"></path>
            <path d="M 1422 196 Q 1066.5 -100 711 400 Q 355.5 900 0 196" opacity="0.72"></path>
            <path d="M 1422 168 Q 1066.5 -100 711 400 Q 355.5 900 0 168" opacity="0.78"></path>
            <path d="M 1422 140 Q 1066.5 -100 711 400 Q 355.5 900 0 140" opacity="0.85"></path>
            <path d="M 1422 112 Q 1066.5 -100 711 400 Q 355.5 900 0 112" opacity="0.91"></path>
            <path d="M 1422 84 Q 1066.5 -100 711 400 Q 355.5 900 0 84" opacity="0.97"></path>
            <path d="M 1422 56 Q 1066.5 -100 711 400 Q 355.5 900 0 56" opacity="1.00"></path>
        </g>

        <g stroke-width="2" stroke="url(#oooscillate-grad)" fill="none" stroke-linecap="round">
            <path d="M 0 448 Q 355.5 -100 711 400 Q 1066.5 900 1422 448" opacity="0.15"></path>
            <path d="M 0 420 Q 355.5 -100 711 400 Q 1066.5 900 1422 420" opacity="0.21"></path>
            <path d="M 0 392 Q 355.5 -100 711 400 Q 1066.5 900 1422 392" opacity="0.28"></path>
            <path d="M 0 364 Q 355.5 -100 711 400 Q 1066.5 900 1422 364" opacity="0.34"></path>
            <path d="M 0 336 Q 355.5 -100 711 400 Q 1066.5 900 1422 336" opacity="0.40"></path>
            <path d="M 0 308 Q 355.5 -100 711 400 Q 1066.5 900 1422 308" opacity="0.47"></path>
            <path d="M 0 280 Q 355.5 -100 711 400 Q 1066.5 900 1422 280" opacity="0.53"></path>
            <path d="M 0 252 Q 355.5 -100 711 400 Q 1066.5 900 1422 252" opacity="0.59"></path>
            <path d="M 0 224 Q 355.5 -100 711 400 Q 1066.5 900 1422 224" opacity="0.66"></path>
            <path d="M 0 196 Q 355.5 -100 711 400 Q 1066.5 900 1422 196" opacity="0.72"></path>
            <path d="M 0 168 Q 355.5 -100 711 400 Q 1066.5 900 1422 168" opacity="0.78"></path>
            <path d="M 0 140 Q 355.5 -100 711 400 Q 1066.5 900 1422 140" opacity="0.85"></path>
            <path d="M 0 112 Q 355.5 -100 711 400 Q 1066.5 900 1422 112" opacity="0.91"></path>
            <path d="M 0 84 Q 355.5 -100 711 400 Q 1066.5 900 1422 84" opacity="0.97"></path>
            <path d="M 0 56 Q 355.5 -100 711 400 Q 1066.5 900 1422 56" opacity="1.00"></path>
        </g>
    </svg>
</template>
