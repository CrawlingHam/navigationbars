import { buttonVariants } from "../variants";
import { Slot } from "@radix-ui/react-slot";
import { ButtonProps } from "@/types";
import { forwardRef } from "react";
import { cn } from "@/utils";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
});

Button.displayName = "Button";

export { Button };
