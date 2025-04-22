import { NavigationbarBrandingProps } from "@/types";
import { cn } from "flixburst-utils";
import { services } from "@/data";
import { Logo } from "@/assets";

export const NavigationbarBranding = ({ className, logo, title = "Flixburst" }: NavigationbarBrandingProps) => (
    <div className={cn("px-4", className)}>
        <a
            href={services.apps.landing.base}
            className="flex gap-2 items-center no-underline transition-all duration-200 hover:scale-101 cursor-pointer"
        >
            {logo ? logo : <Logo className="h-16 w-16 flex-shrink-0" />}
            <span className="text-xl font-semibold whitespace-nowrap">{title}</span>
        </a>
    </div>
);
