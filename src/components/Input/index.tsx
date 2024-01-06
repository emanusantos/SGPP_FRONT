import { forwardRef } from "react";

import { InputProps } from "./types";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, label, classes, ...props }, ref) => {
    return (
      <div>
        <div className="relative">
          {!!label && <p className="label">{label}</p>}
          <input
            ref={ref}
            {...props}
            className={`outline-none border border-primary h-12 rounded-lg p-4 w-full font-orkneyMd ${classes}`}
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
