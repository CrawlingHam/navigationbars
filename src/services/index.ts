import { constructUrl } from "flixburst-environment_variables";

const DOMAIN = import.meta.env.VITE_DOMAIN!;

const paths = {
    auth: {
        base: "/auth",
        login: "/login",
        logout: "/logout",
    },
    account: {
        base: "/account",
        profile: "/profile",
    },
    landing: {
        base: "/",
    },
} as const;

const apps = {
    authentication: {
        base: constructUrl(DOMAIN, paths.auth.base).toString(),
        login: constructUrl(DOMAIN, paths.auth.base, paths.auth.login).toString(),
        logout: constructUrl(DOMAIN, paths.auth.base, paths.auth.logout).toString(),
    },
    account: {
        base: constructUrl(DOMAIN, paths.account.base).toString(),
        profile: constructUrl(DOMAIN, paths.account.base, paths.account.profile).toString(),
    },
    landing: {
        base: constructUrl(DOMAIN, paths.landing.base).toString(),
    },
};

const allowedImageHostDomains = [
    {
        protocol: "https",
        hostname: "res.cloudinary.com",
    },
    {
        protocol: "https",
        hostname: "res-console.cloudinary.com",
    },
    {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
    },
];

export const services = {
    allowedImageHostDomains,
    apps,
};
