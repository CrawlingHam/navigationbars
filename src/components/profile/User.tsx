import type { UserProfileProps } from "@/types";
import ProfileImage from "./image";
import { type JSX } from "react";
import { cn } from "@/lib";

const UserProfile = (props: UserProfileProps): JSX.Element => (
    <ProfileImage
        className={cn("object-cover rounded-full transition-opacity duration-300")}
        alt={props.alt || "Profile Picture"}
        dimensions={props.dimensions}
        src={props.src}
        priority
    />
);

export default UserProfile;
