import { SidebarMenuButton } from "./sidebar";
import { IoArrowBack } from "react-icons/io5";
import { BackButtonProps } from "@/types";

export const BackButton = ({ buttonText, onClick }: BackButtonProps) => (
    <SidebarMenuButton
        onClick={onClick}
        className="w-full rounded-md px-4 text-left text-sm text-slate-700 hover:bg-stone-100 dark:text-slate-200 dark:hover:bg-slate-600 hover:cursor-pointer"
    >
        <div key={`back-arrow-button`} className="flex items-center gap-2">
            <IoArrowBack className="h-5 w-5" />
            <span className="font-medium">{buttonText}</span>
        </div>
    </SidebarMenuButton>
);
