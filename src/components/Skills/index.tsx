import { FC } from 'react';
import { TopPageAdvantage } from '@/interfaces/page.interface';
import CheckIcon from './check.svg';
import styles from './Advantages.module.css';

export interface AdvantagesProps {
  advantages: TopPageAdvantage[];
}

export const Advantages: FC<AdvantagesProps> = ({ advantages }) => {
  return (
    <>
      {advantages.map(({ description, title }) => {
        return (
          <div key={title} className={styles.wrapper}>
            <div className={styles['left-side']}>
              <CheckIcon />
              <div className={styles.separator} />
            </div>

            <div className={styles.advantage}>
              <div className={styles.title}>{title}</div>
              <div className={styles.description}>{description}</div>
            </div>
          </div>
        );
      })}
    </>
  );
};
