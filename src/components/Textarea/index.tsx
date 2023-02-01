import { FC, TextareaHTMLAttributes, DetailedHTMLProps } from 'react';
import cn from 'classnames';
import styles from './TextArea.module.css';

export interface TextareaProps
  extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {}

export const Textarea: FC<TextareaProps> = ({ className, ...props }) => {
  return <textarea className={cn(className, styles.input)} {...props} />;
};
