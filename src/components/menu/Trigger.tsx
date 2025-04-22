import { Profile as ProfileType } from "flixburst-declarations";
import { PopoverTrigger } from "@/components";
import { Profile } from "../profile";
import { memo } from "react";

export const MenuTrigger = memo(function MenuTrigger({ profile }: { profile: ProfileType | undefined }) {
    const letter = profile?.name?.charAt(0) || profile?.email?.charAt(0).toUpperCase() || "G";

    return (
        <PopoverTrigger asChild>
            <button className="relative">
                <div className="flex items-center bg-slate-200 dark:bg-slate-700 justify-center w-9 h-9 rounded-full transition-all duration-200 hover:ring-2 hover:ring-primary/50 hover:scale-105">
                    <Profile dimensions={[32, 32]} clickable={false} src={profile?.picture} letter={letter} />
                </div>
            </button>
        </PopoverTrigger>
    );
});
