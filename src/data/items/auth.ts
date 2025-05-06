import { LogOut, LogIn } from "lucide-vue-next";
import type { Profile } from "flixburst-zod";
import type { MenuItem } from "@/types";
import { services } from "@/services";

const links = {
    login: services.apps.authentication.login,
    logout: services.apps.authentication.logout,
};

export const authButton = (profile: Profile | undefined): MenuItem => {
    const isLoggedIn = profile !== undefined && profile.id;

    if (isLoggedIn) {
        return {
            link: links.logout,
            label: "Logout",
            icon: LogOut,
        };
    }
    return {
        link: links.login,
        label: "Login",
        icon: LogIn,
    };
};
