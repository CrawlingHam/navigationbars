import type { ProfileImageProps } from "@/types";
import { type JSX } from "react";
import { cn } from "@/lib";

const ProfileImage = (props: ProfileImageProps): JSX.Element => (
    <img
        className={cn("object-cover", props.className)}
        alt={props.alt || "Profile Picture"}
        height={props.dimensions[0]}
        width={props.dimensions[1]}
        src={props.src || ""}
    />
);

export default ProfileImage;
