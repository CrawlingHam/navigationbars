import { allowedImageHostDomains } from "@/components/profile/config";

export const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export function isValidImageSrc(src: string | undefined): boolean {
    if (!src?.length) return false;

    try {
        const url = new URL(src);
        const domain = allowedImageHostDomains.find(
            ({ protocol, hostname }) => protocol === url.protocol.slice(0, -1) && hostname === url.hostname
        );

        return !!domain;
    } catch {
        return false;
    }
}
