import { PopoverTrigger } from "@/components";
import { Profile } from "../profile";
import { User } from "@/types";
import { memo } from "react";

export const MenuTrigger = memo(function MenuTrigger({ user }: { user: User | null }) {
    const letter = user?.name?.charAt(0) || user?.email?.charAt(0).toUpperCase() || "G";

    return (
        <PopoverTrigger asChild>
            <button className="relative">
                <div className="flex items-center bg-slate-200 dark:bg-slate-700 justify-center w-9 h-9 rounded-full transition-all duration-200 hover:ring-2 hover:ring-primary/50 hover:scale-105">
                    <Profile dimensions={[32, 32]} clickable={false} src={user?.picture} letter={letter} />
                </div>
            </button>
        </PopoverTrigger>
    );
});
