export interface CardProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  title: string;
  subtitle?: string;
  contributors: number;
  pictures: Array<string>;
}
