import { CiLogout, CiLogin } from "react-icons/ci";
import { MenuItem, User } from "@/types";
import { auth } from "@/data";

export const authButton = (user: User | null): MenuItem => {
    const isLoggedIn = user !== null && user.id;

    if (isLoggedIn) {
        return {
            link: auth.logout,
            label: "Logout",
            icon: CiLogout,
        };
    }
    return {
        link: auth.login,
        label: "Login",
        icon: CiLogin,
    };
};
