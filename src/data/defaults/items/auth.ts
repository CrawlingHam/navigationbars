import { CiLogout, CiLogin } from "react-icons/ci";
import { Profile } from "flixburst-declarations";
import { MenuItem } from "@/types";
import { services } from "@/data";

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
            icon: CiLogout,
        };
    }
    return {
        link: links.login,
        label: "Login",
        icon: CiLogin,
    };
};
