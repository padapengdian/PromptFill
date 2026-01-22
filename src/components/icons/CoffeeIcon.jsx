"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const CoffeeIcon = forwardRef(({ className, size = 24, ...props }, ref) => {
  return (
    <div
      className={cn(
        "cursor-pointer select-none transition-colors duration-200 flex items-center justify-center",
        className
      )}
      {...props}
      ref={ref}
    >
      <svg
        fill="none"
        height={size}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
        <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
        <path d="M6 1v3" />
        <path d="M10 1v3" />
        <path d="M14 1v3" />
      </svg>
    </div>
  );
});

CoffeeIcon.displayName = "CoffeeIcon";

export { CoffeeIcon };
