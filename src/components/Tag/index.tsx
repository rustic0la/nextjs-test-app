import { FC, HTMLAttributes } from "react";
import styles from "./Tag.module.css";
import cn from "classnames";
import { DetailedHTMLProps, ReactNode } from "react";

export interface TagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  size?: "s" | "m";
  color: "ghost" | "red" | "grey" | "green" | "primary";
}

export const Tag: FC<TagProps> = ({
  children,
  color = "ghost",
  className,
  size,
  href,
  ...props
}) => {
  return (
    <p
      className={cn(styles.tag, className, {
        [styles.s]: size === "s",
        [styles.m]: size === "m",
        [styles.ghost]: color === "ghost",
        [styles.red]: color === "red",
        [styles.grey]: color === "grey",
        [styles.green]: color === "green",
        [styles.primary]: color === "primary",
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </p>
  );
};
