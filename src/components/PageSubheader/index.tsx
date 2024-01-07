import { twMerge } from "tailwind-merge";
import { PageSubheaderProps } from "./types";

export function PageSubheader({
  title,
  subtitle,
  children,
  className,
  ...props
}: PageSubheaderProps) {
  return (
    <div
      className={twMerge(
        "flex justify-between items-center p-16 bg-white",
        className
      )}
      {...props}
    >
      <div className="flex flex-col gap-4">
        <h1 className="h1">{title}</h1>

        <p className="subtitle">{subtitle}</p>
      </div>

      {children}
    </div>
  );
}
