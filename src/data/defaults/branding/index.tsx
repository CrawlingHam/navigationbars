import { NavigationbarBrandingProps } from "@/types";
import { services } from "@/data";
import { Logo } from "@/assets";
import { cn } from "@/utils";

export const NavigationbarBranding = ({ className, logo, title = "Flixburst" }: NavigationbarBrandingProps) => (
    <div className={cn("px-4", className)}>
        <a
            href={services.landing}
            className="flex gap-2 items-center no-underline transition-all duration-200 hover:scale-101 cursor-pointer"
        >
            {logo ? logo : <Logo className="h-16 w-16 flex-shrink-0" />}
            <span className="text-xl font-semibold whitespace-nowrap">{title}</span>
        </a>
    </div>
);
