import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ children, className,onClick,...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group-btn relative w-auto cursor-pointer overflow-hidden rounded-full border bg-background p-2 px-6 text-center font-semibold",
        className
      )}
    onClick={onClick}
      {...props}>
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-primary transition-all duration-300 group-btn-hover:scale-[100.8]"></div>
        <span className="inline-block transition-all duration-300 group-btn-hover:translate-x-12 group-btn-hover:opacity-0">
          {children}
        </span>
      </div>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-btn-hover:-translate-x-5 group-btn-hover:opacity-100">
        <span>{children}</span>
        <ArrowRight />
      </div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";
