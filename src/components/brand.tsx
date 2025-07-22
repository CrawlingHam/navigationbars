import type { NavigationbarBrandProps } from "@/types";
import Logo from "@/assets/Logo";
import { type JSX } from "react";

const NavigationbarBrand = (props: NavigationbarBrandProps): JSX.Element => (
    <div className="px-4">
        <a className="flex gap-2 items-center no-underline transition-all duration-200 hover:scale-101 cursor-pointer" href="/">
            {props.logo ? props.logo : <Logo className="h-16 w-16 flex-shrink-0" />}
            <span className="text-xl font-semibold whitespace-nowrap">{props.title}</span>
        </a>
    </div>
);

export default NavigationbarBrand;
