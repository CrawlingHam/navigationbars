import { AccountCardProps } from "@/types";
import { Profile } from "@/components";
import { account, auth } from "@/data";

export const AccountCard = ({ account: userAccount, isCurrentUser }: AccountCardProps) => {
    const handleClick = () => {
        if (isCurrentUser) window.location.href = account.profile;
        else window.location.href = `${auth.switchAccount}/${userAccount.id}`;
    };

    return (
        <div className="flex items-center gap-3 cursor-pointer" onClick={handleClick}>
            <Profile
                clickable={false}
                dimensions={[32, 32]}
                src={userAccount.picture}
                letter={userAccount.name?.charAt(0) || userAccount.email?.charAt(0).toUpperCase() || "G"}
            />

            <div className="flex flex-col">
                <span className="text-sm font-medium">{userAccount.name || userAccount.email}</span>
                {isCurrentUser && <span className="text-xs text-slate-500 dark:text-slate-400">Current</span>}
            </div>
        </div>
    );
};
