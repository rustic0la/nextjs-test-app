import { FC, HTMLAttributes } from 'react';
import styles from './Card.module.css';
import cn from 'classnames';
import { DetailedHTMLProps, ReactNode } from 'react';

export interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  color?: 'white' | 'blue';
}

export const Card: FC<CardProps> = ({ children, color = 'white', className, ...props }) => {
  return (
    <div
      className={cn(styles.card, className, {
        [styles.blue]: color === 'blue',
      })}
    >
      {children}
    </div>
  );
};
