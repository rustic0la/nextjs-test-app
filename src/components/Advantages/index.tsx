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
      {advantages.map(({ description, title, _id }) => (
        <div key={_id}>
          <div className={styles.advantage}>
            <CheckIcon />
            <div className={styles.title}>{title}</div>
            <hr className={styles.separator} />
            <div className={styles.description}>{description}</div>
          </div>
        </div>
      ))}
    </>
  );
};
