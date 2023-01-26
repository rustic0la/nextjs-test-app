import { FC, HTMLAttributes } from 'react';
// import styles from './Sidebar.module.css';
// import cn from 'classnames';
import { DetailedHTMLProps } from 'react';

export interface SidebarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Sidebar: FC<SidebarProps> = ({ children, ...props }) => {
  return <div {...props}>SIDEBAR</div>;
};
