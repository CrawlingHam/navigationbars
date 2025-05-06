import { services } from "@/services";

export function isValidImageSrc(src: string | undefined): boolean {
    if (!src?.length) return false;

    try {
        const url = new URL(src);
        const domain = services.allowedImageHostDomains.find(
            ({ protocol, hostname }) => protocol === url.protocol.slice(0, -1) && hostname === url.hostname
        );

        return !!domain;
    } catch {
        return false;
    }
}
