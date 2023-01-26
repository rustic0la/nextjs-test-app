import { FC, HTMLAttributes } from 'react';
import styles from './Footer.module.css';
import cn from 'classnames';
import { DetailedHTMLProps } from 'react';
import { format } from 'date-fns';

export interface FooterProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Footer: FC<FooterProps> = ({ children, className, ...props }) => {
  return (
    <footer {...props} className={cn(className, styles.footer)}>
      <div>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</div>
      <a href="#" target="_blank" className={styles.agreement}>
        Пользовательское соглашение
      </a>
      <a href="#" target="_blank" className={styles.privacy}>
        Политика конфиденциальности
      </a>
    </footer>
  );
};
