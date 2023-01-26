import { FC, HTMLAttributes } from "react";
import styles from "./Paragraph.module.css";
import cn from "classnames";
import { DetailedHTMLProps, ReactNode } from "react";

export interface ParagraphProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: ReactNode;
  size?: "s" | "m" | "l";
}

export const Paragraph: FC<ParagraphProps> = ({
  children,
  size = "m",
  className,
  ...props
}) => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.s]: size === "s",
        [styles.m]: size === "m",
        [styles.l]: size === "l",
      })}
      {...props}
    >
      {children}
    </p>
  );
};
