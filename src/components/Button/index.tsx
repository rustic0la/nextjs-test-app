import { FC } from "react";
import styles from "./Button.module.css";
import cn from "classnames";
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import ArrowIcon from "./arrow.svg";

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  appearance: "primary" | "ghost";
  arrow?: "right" | "down" | "none";
}

export const Button: FC<ButtonProps> = ({
  appearance,
  children,
  className,
  arrow = "none",
  ...props
}) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance === "primary",
        [styles.ghost]: appearance === "ghost",
      })}
      {...props}
    >
      {children}
      {arrow !== "none" && (
        <span
          className={cn(styles.arrow, {
            [styles.down]: arrow === "down",
          })}
        >
          <ArrowIcon className="" />
        </span>
      )}
    </button>
  );
};
