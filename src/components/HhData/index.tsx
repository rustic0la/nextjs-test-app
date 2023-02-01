import { FC } from 'react';
import styles from './HhData.module.css';
import { HhData } from '@/interfaces/page.interface';
import { Card } from '../Card';
import RateIcon from './rate.svg';
import { priceRu } from '@/helpers/helpers';

export interface HhDataProps extends HhData {}

export const HhDataComponent: FC<HhDataProps> = ({
  count,
  juniorSalary,
  middleSalary,
  seniorSalary,
}) => {
  return (
    <div className={styles.hh}>
      <Card className={styles.count}>
        <div className={styles.title}>Всего вакансий</div>
        <div className={styles['stat-value']}>{count}</div>
      </Card>
      <Card className={styles.salary}>
        <div>
          <div className={styles.title}>Начальный</div>
          <div className={styles['salary-value']}>{priceRu(juniorSalary)}</div>
          <div className={styles['rate']}>
            <RateIcon className={styles.filled} />
            <RateIcon />
            <RateIcon />
          </div>
        </div>
        <div>
          <div className={styles.title}>Средний</div>
          <div className={styles['salary-value']}>{priceRu(middleSalary)}</div>
          <div className={styles['rate']}>
            <RateIcon className={styles.filled} />
            <RateIcon className={styles.filled} />
            <RateIcon />
          </div>
        </div>
        <div>
          <div className={styles.title}>Профессионал</div>
          <div className={styles['salary-value']}>{priceRu(seniorSalary)}</div>
          <div className={styles['rate']}>
            <RateIcon className={styles.filled} />
            <RateIcon className={styles.filled} />
            <RateIcon className={styles.filled} />
          </div>
        </div>
      </Card>
    </div>
  );
};
