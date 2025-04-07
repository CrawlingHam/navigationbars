import { ProfileImage } from "./ProfileImage";
import { UserProfileProps } from "@/types";
import { cn } from "@/utils";
import { memo } from "react";

export const UserProfile = memo(function UserProfile(props: UserProfileProps) {
    const { dimensions, clickable, src, alt } = props;

    return (
        <ProfileImage
            className={cn("object-cover rounded-full transition-opacity duration-300", clickable && "hover:cursor-pointer")}
            alt={alt || "Profile Picture"}
            dimensions={dimensions}
            src={src}
            priority
        />
    );
});
