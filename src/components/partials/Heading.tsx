import { cva, VariantProps } from "class-variance-authority";

const HeadingStyles = cva("leading-[130%] text-[2.5rem]", {
  variants: {
    color: {
      primary: "text-brand-primary",
    },
    font: {
      bold: "font-semibold",
      black: "font-black",
    },
    upeprcase: {
      true: "uppercase",
    },
    defaultVariants: {
      intent: "sm",
      font: "black",
      uppercase: false,
      color: "primary",
      size: "md",
    },
  },
});

interface TailwindClasses {
  className?: string;
}

interface HeadingProps
  extends TailwindClasses,
    VariantProps<typeof HeadingStyles> {
  children: React.ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

export const Heading = ({
  level = 1,
  font,
  color,
  children,
  className,
}: HeadingProps) => {
  const HeadingTag = `h${level}` as const;

  return (
    <HeadingTag
      className={`${HeadingStyles({
        font,
        color,
      })} ${className}`}
    >
      {children}
    </HeadingTag>
  );
};
