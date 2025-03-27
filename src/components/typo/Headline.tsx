import { cn } from "@/src/lib/utils";
import { FC } from "react";

interface HeadlineProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const Headline: FC<HeadlineProps> = ({
  children,
  id,
  className = "",
  tag = "h1",
}) => {
  const Component = tag;

  const defaultStyles = "font-bold";
  const defaultH1Styles = "text-3xl";
  const defaultH2Styles = "text-2xl";
  const defaultH3Styles = "text-xl";
  const defaultH4Styles = "text-lg";
  const defaultH5Styles = "text-base";
  const defaultH6Styles = "text-sm";

  return (
    <Component
      id={id}
      className={cn({
        [`${defaultStyles}`]: true,
        [`${defaultH1Styles}`]: tag === "h1",
        [`${defaultH2Styles}`]: tag === "h2",
        [`${defaultH3Styles}`]: tag === "h3",
        [`${defaultH4Styles}`]: tag === "h4",
        [`${defaultH5Styles}`]: tag === "h5",
        [`${defaultH6Styles}`]: tag === "h6",
        [`${className}`]: className,
      })}
    >
      {children}
    </Component>
  );
};
