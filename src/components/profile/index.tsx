import { allowedImageHostDomains } from "./allowedDomains";
import { ProfileProps } from "@/types";
import { GuestProfile } from "./Guest";
import { UserProfile } from "./User";
import { memo, useMemo } from "react";

export const Profile = memo(function Profile(props: ProfileProps) {
    const { clickable, dimensions } = props;
    const src = "src" in props ? props.src : undefined;
    const alt = "src" in props ? props.alt : undefined;
    const letter = "letter" in props ? props.letter : "";

    const isValidImageSrc = useMemo(() => {
        if (!src) return false;

        try {
            const url = new URL(src);
            return allowedImageHostDomains.some((host) => host.hostname === url.hostname);
        } catch {
            return false;
        }
    }, [src]);

    const validImageSrc = isValidImageSrc && src && src.length > 10;

    if (validImageSrc) return <UserProfile dimensions={dimensions} clickable={clickable} alt={alt} src={src} />;
    return <GuestProfile dimensions={dimensions} clickable={clickable} letter={letter} />;
});
