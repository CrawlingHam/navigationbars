import { HTMLAttributes } from "react";
import { cn } from "@/utils";

export const Skeleton = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
    <div className={cn("animate-pulse rounded-md bg-primary/10", className)} {...props} />
);
