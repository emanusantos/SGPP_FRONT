import { forwardRef } from "react";

import { InputProps } from "./types";
import { twMerge } from "tailwind-merge";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, label, className, containerClasses = "", ...props }, ref) => {
    return (
      <div>
        <div
          className={twMerge("relative flex flex-col gap-2", containerClasses)}
        >
          {!!label && <p className="text-black font-orkney text-xs">{label}</p>}
          <input
            ref={ref}
            {...props}
            className={twMerge(
              "outline-none border border-primary h-12 rounded-lg p-4 w-full font-orkneyMd",
              className
            )}
          />
        </div>

        {!!error && (
          <p className="ml-4 py-1 text-red-500 text-sm font-gilroyMd">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
