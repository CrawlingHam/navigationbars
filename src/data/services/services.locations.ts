import { processEnvironmentVariables, constructUrl } from "@/utils";
import { Locations } from "@/types";

const serviceLocations: Locations = {
    DASHBOARD: import.meta.env.VITE_URL_DASHBOARD,
    LANDING: import.meta.env.VITE_URL_LANDING,
    ACCOUNT: import.meta.env.VITE_URL_ACCOUNT,
    AUTH: import.meta.env.VITE_URL_AUTH,
};

const { locations } = processEnvironmentVariables(serviceLocations);

const PATHS = {
    AUTH: {
        SWITCH_ACCOUNT: "/switch-account",
        LOGOUT: "/logout",
        LOGIN: "/login",
        BASE: "/",
    },
    ACCOUNT: {
        PROFILE: "/profile",
        BASE: "/account",
    },
} as const;

const authBase = constructUrl(locations.AUTH, PATHS.AUTH.BASE);
const accountBase = constructUrl(locations.ACCOUNT, PATHS.ACCOUNT.BASE);

export const auth = {
    base: authBase,
    login: constructUrl(authBase, PATHS.AUTH.LOGIN),
    logout: constructUrl(authBase, PATHS.AUTH.LOGOUT),
    switchAccount: constructUrl(authBase, PATHS.AUTH.SWITCH_ACCOUNT),
};

export const account = {
    profile: constructUrl(accountBase, PATHS.ACCOUNT.PROFILE),
    base: accountBase,
};

export const services = {
    dashboard: locations.DASHBOARD,
    landing: locations.LANDING,
    account: locations.ACCOUNT,
    auth: locations.AUTH,
};
