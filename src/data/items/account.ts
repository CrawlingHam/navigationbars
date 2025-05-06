import { UserRound } from "lucide-vue-next";
import type { Profile } from "flixburst-zod";
import type { MenuItemGroup } from "@/types";
import { services } from "@/services";

export const accountButtons = (profile: Profile | undefined): MenuItemGroup => {
    const isLoggedIn = profile !== undefined && profile.id;

    if (isLoggedIn) {
        return [
            {
                link: services.apps.account.profile,
                label: "Account Settings",
                icon: UserRound,
            },
        ];
    }

    return [
        {
            link: services.apps.authentication.login,
            icon: UserRound,
            label: "Account",
        },
    ];
};
