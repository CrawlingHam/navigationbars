import { IoIosLogOut } from "react-icons/io";
import { AccountActionItem } from "@/types";
import { IoAdd } from "react-icons/io5";
import { auth } from "@/data";
import { cn } from "@/utils";

export function AccountActions({ className }: { className?: string }) {
    const onAddAccount = () => (window.location.href = auth.login);
    const onLogOutAll = () => (window.location.href = auth.logout);

    const accountActionItems: AccountActionItem[] = [
        {
            icon: IoAdd,
            label: "Add Account",
            onClick: onAddAccount,
        },
        {
            label: "Log out of all accounts",
            onClick: onLogOutAll,
            icon: IoIosLogOut,
        },
    ];

    return (
        <div className={cn(className, "flex flex-col gap-y-2 hover:cursor-pointer")}>
            {accountActionItems.map(({ icon: Icon, label, onClick }, index) => (
                <div
                    key={index}
                    className="p-2 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-md hover:cursor-pointer"
                >
                    <button
                        onClick={onClick}
                        className="flex w-full items-center gap-x-3 text-sm text-slate-600 dark:text-slate-300 hover:cursor-pointer"
                    >
                        {Icon && <Icon className="h-5 w-5" />}
                        <span>{label}</span>
                    </button>
                </div>
            ))}
        </div>
    );
}
