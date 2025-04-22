import { forwardRef, ComponentProps } from "react";
import { cn } from "flixburst-utils";

const Input = forwardRef<HTMLInputElement, ComponentProps<"input">>(({ className, type, ...props }, ref) => {
    return (
        <input
            className={cn(
                "focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                "file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none",
                "text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm",
                "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1",
                className
            )}
            type={type}
            {...props}
            ref={ref}
        />
    );
});
Input.displayName = "Input";

export { Input };
