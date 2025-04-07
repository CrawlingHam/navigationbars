import { ProfileImageProps } from "@/types";
import { cn } from "@/utils";

export const ProfileImage = (props: ProfileImageProps) => (
    <img
        className={cn("object-cover", props.className)}
        alt={props.alt || "Profile Picture"}
        height={props.dimensions[0]}
        width={props.dimensions[1]}
        src={props.src || ""}
    />
);
