import { type ComponentPropsWithoutRef, type ComponentRef, forwardRef, type JSX } from "react";
import { Content, Portal } from "@radix-ui/react-popover";
import { cn } from "@/lib";

const PopoverContent = forwardRef<ComponentRef<typeof Content>, ComponentPropsWithoutRef<typeof Content>>(
    ({ className, align = "center", sideOffset = 13, ...props }, ref): JSX.Element => (
        <Portal>
            <Content
                ref={ref}
                align={align}
                sideOffset={sideOffset}
                className={cn(
                    "z-50 w-72 rounded-md border border-slate-200 dark:border-slate-800 shadow-md outline-none p-1 transition-colors duration-200",
                    className
                )}
                {...props}
            />
        </Portal>
    )
);
PopoverContent.displayName = Content.displayName;

export { PopoverContent };
