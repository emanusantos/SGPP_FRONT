import { twMerge } from "tailwind-merge";
import { PageHeaderProps } from "./types";
import { MockPictureOne } from "@assets/images";

export function PageHeader({ className, ...props }: PageHeaderProps) {
  return (
    <header
      {...props}
      className={twMerge(
        "flex justify-between bg-primary py-7 px-16",
        className
      )}
    >
      <h1 className="h1 text-white">Logo</h1>

      <div className="w-[2.6875rem] h-[2.6875rem] rounded-full bg-white">
        <img src={MockPictureOne} className="rounded-full p-[1px]" />
      </div>
    </header>
  );
}
