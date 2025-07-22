import type { AllowedImageHostDomain } from "@/types";

export const allowedImageHostDomains: AllowedImageHostDomain[] = [
    {
        hostname: "res.cloudinary.com",
        protocol: "https",
    },
    {
        hostname: "lh3.googleusercontent.com",
        protocol: "https",
    },
];
