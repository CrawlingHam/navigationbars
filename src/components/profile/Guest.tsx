import type { GuestProfileProps } from "@/types";
import { type JSX } from "react";

const GuestProfile = (props: GuestProfileProps): JSX.Element => (
    <div
        className="flex items-center justify-center w-full h-full rounded-full font-medium transition-all duration-200 hover:scale-105"
        style={{
            fontSize: `${props.dimensions[0] * 0.4}px`,
            height: props.dimensions[1],
            width: props.dimensions[0],
            backgroundColor: "#22a55e",
            color: "#ffffff",
        }}
    >
        {props.letter?.toUpperCase()}
    </div>
);

export default GuestProfile;
