import { SidebarMenuButton } from "../sidebar";
import { MoveLeft } from "lucide-react";
import type { JSX } from "react";
import { cn } from "@/lib";

const BackButton = ({ btnText, onClick }: { onClick: () => void; btnText: string }): JSX.Element => (
    <SidebarMenuButton
        onClick={onClick}
        className={cn(
            "w-full rounded-md px-4 text-left text-sm text-slate-700 dark:text-slate-200",
            "hover:bg-slate-100 dark:hover:bg-slate-600 hover:cursor-pointer"
        )}
    >
        <div className="flex items-center gap-2">
            <MoveLeft className="h-5 w-5" />
            <span className="font-medium">{btnText}</span>
        </div>
    </SidebarMenuButton>
);

export { BackButton };
