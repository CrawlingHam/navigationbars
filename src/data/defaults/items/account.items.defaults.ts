import { MdOutlineSwitchAccount, MdOutlineManageAccounts } from "react-icons/md";
import { MenuItemGroup, SavedAccount, User } from "@/types";
import { LuChevronRight } from "react-icons/lu";
import { auth, account } from "@/data";

export const accountButtons = (user: User | null, savedAccounts: SavedAccount[]): MenuItemGroup => {
    const isLoggedIn = user !== null && user.id;

    if (isLoggedIn) {
        return [
            {
                icon: MdOutlineManageAccounts,
                label: "Account Settings",
                link: account.profile,
            },
            {
                icon: MdOutlineSwitchAccount,
                savedAccounts: savedAccounts,
                label: "Switch Account",
                icon2: LuChevronRight,
            },
        ];
    }

    return [
        {
            icon: MdOutlineManageAccounts,
            link: auth.login,
            label: "Account",
        },
        {
            icon: MdOutlineSwitchAccount,
            label: "Switch Account",
            icon2: LuChevronRight,
            link: auth.login,
        },
    ];
};
