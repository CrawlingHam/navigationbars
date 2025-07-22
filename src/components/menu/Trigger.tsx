import type { Profile as ProfileType } from "@/types";
import { PopoverTrigger } from "@/components";
import { memo, type JSX } from "react";
import Profile from "../profile";
import { cn } from "@/lib";

const MenuTrigger = (props: ProfileType): JSX.Element => (
    <PopoverTrigger asChild>
        <button className="relative">
            <div
                className={cn(
                    "w-9 h-9 rounded-full transition-all duration-200 hover:ring-2 hover:ring-primary/50 hover:scale-105",
                    "flex items-center cursor-pointer bg-slate-200 dark:bg-slate-700 justify-center"
                )}
            >
                <Profile letter={props.username?.charAt(0).toUpperCase() || "G"} dimensions={[32, 32]} src={props.picture} />
            </div>
        </button>
    </PopoverTrigger>
);

export default memo(MenuTrigger);
