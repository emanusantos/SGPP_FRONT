import { twMerge } from "tailwind-merge";
import { CardProps } from "./types";

export function Card({
  title,
  subtitle,
  contributors,
  pictures,
  className,
  ...props
}: CardProps) {
  return (
    <div
      {...props}
      className={twMerge(
        "flex flex-col flex-shrink basis-[31%] pt-11 pb-4 pl-7 gap-7 rounded-lg border border-primary bg-white min-h-72",
        className
      )}
    >
      <h2 className="h2 max-w-[90%] min-h-[30%]">{title}</h2>

      <div className="min-h-[30%] max-w-[90%]">
        {subtitle && <p className="subtitle">{subtitle}</p>}
      </div>

      <div className="flex justify-between items-center mr-3">
        <p className="font-orkneyLight text-sm text-black mt-auto">
          {contributors} contribuidores
        </p>

        <div className="flex">
          {pictures.map((picture, index) => (
            <img
              key={index}
              src={picture}
              className={`w-9 h-9 rounded-full ml-[-${
                pictures.length > 1 ? (pictures.length - 1) * 10 : 0
              }px]`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
