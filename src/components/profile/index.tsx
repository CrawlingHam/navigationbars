import type { ProfileProps } from "@/types";
import { isValidImageSrc } from "@/utils";
import GuestProfile from "./guest";
import { type JSX } from "react";
import UserProfile from "./user";

const Profile = (props: ProfileProps): JSX.Element => {
    const containsLetter = "letter" in props;
    const containsSrc = "src" in props;

    const src = containsSrc ? props.src : undefined;
    const alt = containsSrc ? props.alt : undefined;
    const letter = containsLetter ? props.letter : "";

    if (isValidImageSrc(src)) return <UserProfile dimensions={props.dimensions} alt={alt} src={src} />;
    return <GuestProfile dimensions={props.dimensions} letter={letter} />;
};

export default Profile;
