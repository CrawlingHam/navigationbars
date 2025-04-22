import { ComponentPropsWithoutRef, ComponentRef, forwardRef, HTMLAttributes } from "react";
import { Close, Overlay, Content, Title, Description } from "@radix-ui/react-dialog";
import { SheetContentProps } from "@/types";
import { sheetVariants } from "../variants";
import { SheetPortal } from "../constants";
import { RxCross2 } from "react-icons/rx";
import { cn } from "flixburst-utils";

const SheetOverlay = forwardRef<ComponentRef<typeof Overlay>, ComponentPropsWithoutRef<typeof Overlay>>(({ className, ...props }, ref) => (
    <Overlay
        className={cn(
            "fixed inset-0 z-50 bg-black/80",
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            className
        )}
        {...props}
        ref={ref}
    />
));
SheetOverlay.displayName = Overlay.displayName;

const SheetContent = forwardRef<ComponentRef<typeof Content>, SheetContentProps>(
    ({ side = "right", className, children, ...props }, ref) => (
        <SheetPortal>
            <SheetOverlay />
            <Content ref={ref} className={cn(sheetVariants({ side }), className)} {...props}>
                <Close
                    className={cn(
                        "transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring",
                        "focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
                        "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background",
                        className
                    )}
                >
                    <RxCross2 className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                </Close>
                {children}
            </Content>
        </SheetPortal>
    )
);
SheetContent.displayName = Content.displayName;

const SheetHeader = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
    <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
);
SheetHeader.displayName = "SheetHeader";

const SheetFooter = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
    <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props} />
);
SheetFooter.displayName = "SheetFooter";

const SheetTitle = forwardRef<ComponentRef<typeof Title>, ComponentPropsWithoutRef<typeof Title>>(({ className, ...props }, ref) => (
    <Title ref={ref} className={cn("text-lg font-semibold text-foreground", className)} {...props} />
));
SheetTitle.displayName = Title.displayName;

const SheetDescription = forwardRef<ComponentRef<typeof Description>, ComponentPropsWithoutRef<typeof Description>>(
    ({ className, ...props }, ref) => <Description ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
);
SheetDescription.displayName = Description.displayName;

export { SheetOverlay, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription };
