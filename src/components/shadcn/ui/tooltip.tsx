import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from "react";
import { Content, Portal } from "@radix-ui/react-tooltip";
import { cn } from "@/utils";

const TooltipContent = forwardRef<ComponentRef<typeof Content>, ComponentPropsWithoutRef<typeof Content>>(
    ({ className, sideOffset = 4, ...props }, ref) => (
        <Portal>
            <Content
                ref={ref}
                sideOffset={sideOffset}
                className={cn(
                    "animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
                    "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2",
                    "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground",
                    "data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]",
                    className
                )}
                {...props}
            />
        </Portal>
    )
);
TooltipContent.displayName = Content.displayName;

export { TooltipContent };
