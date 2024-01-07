import { PageSubheaderProps } from "./types";

export function PageSubheader({
  title,
  subtitle,
  children,
  ...props
}: PageSubheaderProps) {
  return (
    <div className="flex justify-between p-16 bg-white" {...props}>
      <div className="flex flex-col gap-4">
        <h1 className="h1">{title}</h1>

        <p className="subtitle">{subtitle}</p>
      </div>

      {children}
    </div>
  );
}
