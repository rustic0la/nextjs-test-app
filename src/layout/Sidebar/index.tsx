import { FC, HTMLAttributes } from 'react';
import { DetailedHTMLProps } from 'react';
import { Menu } from '../Menu';
import Logo from '../logo.svg';
import cn from 'classnames';
import styles from './Sidebar.module.css';
import { Search } from '@/components';

export interface SidebarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Sidebar: FC<SidebarProps> = ({ className, children, ...props }) => {
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <Logo />
      <Search />
      <Menu />
    </div>
  );
};
