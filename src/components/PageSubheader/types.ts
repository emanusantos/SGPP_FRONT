export interface PageSubheaderProps
  extends Omit<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    "className"
  > {
  title: string;
  subtitle?: string;
}
