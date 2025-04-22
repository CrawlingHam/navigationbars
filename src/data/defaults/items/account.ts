import { MdOutlineManageAccounts } from "react-icons/md";
import { Profile } from "flixburst-declarations";
import { services } from "../../services";
import { MenuItemGroup } from "@/types";

export const accountButtons = (profile: Profile | undefined): MenuItemGroup => {
    const isLoggedIn = profile !== undefined && profile.id;

    if (isLoggedIn) {
        return [
            {
                icon: MdOutlineManageAccounts,
                label: "Account Settings",
                link: services.apps.account.profile,
            },
        ];
    }

    return [
        {
            icon: MdOutlineManageAccounts,
            link: services.apps.authentication.login,
            label: "Account",
        },
    ];
};
