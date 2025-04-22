import { GuestProfileProps } from "@/types";
import { cn } from "flixburst-utils";
import { memo } from "react";

export const GuestProfile = memo(function GuestProfile(props: GuestProfileProps) {
    const { dimensions, letter, clickable } = props;

    return (
        <div
            className={cn(
                "flex items-center justify-center rounded-full font-medium transition-all duration-200 hover:scale-105",
                clickable && "cursor-pointer"
            )}
            style={{
                fontSize: `${dimensions[0] * 0.4}px`,
                height: dimensions[1],
                width: dimensions[0],
            }}
        >
            {letter?.toUpperCase()}
        </div>
    );
});
