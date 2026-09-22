import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export const buttonVariants = cva("button", { variants: { variant: { default: "button-primary", primary: "button-primary", secondary: "button-secondary", outline: "button-secondary", ghost: "button-ghost" }, size: { default: "", icon: "button-icon", sm: "button-sm", lg: "button-lg" } }, defaultVariants: { variant: "default", size: "default" } });
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants> & { asChild?: boolean };
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button({ asChild, variant = "default", size = "default", className, ...props }, ref) {
  const Comp = asChild ? Slot : "button";
  return <Comp ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />;
});
