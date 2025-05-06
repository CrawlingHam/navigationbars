import type { Profile } from "flixburst-zod";

export declare type BrandingProps = {
    className?: string;
    title?: string;
};

export declare type NavigationbarProps = Omit<BrandingProps, "className"> & {
    profile: Profile | undefined;
};
