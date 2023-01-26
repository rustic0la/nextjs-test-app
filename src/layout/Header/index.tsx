import { FC, HTMLAttributes } from 'react';
// import styles from './Header.module.css';
// import cn from 'classnames';
import { DetailedHTMLProps } from 'react';

export interface HeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Header: FC<HeaderProps> = ({ children, ...props }) => {
  return <div {...props}>HEADER</div>;
};
