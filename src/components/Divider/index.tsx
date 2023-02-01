import { FC, HTMLAttributes } from 'react';
import styles from './Divider.module.css';
import cn from 'classnames';
import { DetailedHTMLProps } from 'react';

export interface DividerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement> {}

export const Divider: FC<DividerProps> = ({ className, ...props }) => {
  return <hr className={cn(className, styles.hr)} {...props} />;
};
