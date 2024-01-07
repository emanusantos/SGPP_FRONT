import { twMerge } from "tailwind-merge";
import { PageMainProps } from "./types";

export function PageMain({ children, className, ...props }: PageMainProps) {
  return (
    <main
      {...props}
      className={twMerge("px-16 py-10 bg-gray-light flex-grow", className)}
    >
      {children}
    </main>
  );
}
