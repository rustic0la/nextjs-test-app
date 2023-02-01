import { FC, InputHTMLAttributes } from 'react';
import { DetailedHTMLProps } from 'react';
import cn from 'classnames';
import styles from './Input.module.css';

export interface InputProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

export const Input: FC<InputProps> = ({ className, ...props }) => {
  return <input className={cn(className, styles.input)} {...props} />;
};
