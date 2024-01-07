import { twMerge } from "tailwind-merge";
import { ButtonProps } from "./types";

export function Button({ classes = "", children, ...props }: ButtonProps) {
  return (
    <button
      className={twMerge(
        "outline-none rounded-lg bg-primary text-white h-12 font-orkneyBold w-full",
        classes
      )}
      {...props}
    >
      {children}
    </button>
  );
}
