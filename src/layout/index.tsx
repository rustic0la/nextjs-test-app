import { FC } from 'react';
import { ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import styles from './Layout.module.css';
import { Sidebar } from './Sidebar';

export interface LayoutProps {
  // extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children, ...props }) => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <div className={styles.body}>{children}</div>
      <Footer className={styles.footer} />
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown>>(Component: FC<T>) => {
  return function withLayoutComponent(props: T) {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
