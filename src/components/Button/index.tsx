import { twMerge } from "tailwind-merge";
import { ButtonProps } from "./types";

export function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(
        "outline-none rounded-lg bg-primary text-white h-12 font-orkneyBold w-full",
        className
      )}
    >
      {children}
    </button>
  );
}
