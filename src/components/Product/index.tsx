import { declOfNum, priceRu } from '@/helpers/helpers';
import { ProductModel } from '@/interfaces/product.interface';
import Image from 'next/image';
import { FC, HTMLAttributes } from 'react';
import { DetailedHTMLProps } from 'react';
import { Button } from '../Button';
import { Card } from '../Card';
import { Divider } from '../Divider';
import { Rating } from '../Rating';
import { Tag } from '../Tag';
import styles from './Product.module.css';

export interface ProductProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: ProductModel;
}

export const Product: FC<ProductProps> = ({ className, product, ...props }) => {
  return (
    <Card className={styles.product}>
      <div className={styles.logo}>
        <Image
          src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
          alt={product.title}
          width={70}
          height={70}
        />
      </div>
      <div className={styles.title}>{product.title}</div>
      <div className={styles.price}>
        {priceRu(product.price)}{' '}
        {product.oldPrice && (
          <Tag size="s" color="green">
            {priceRu(product.price - product.oldPrice)}
          </Tag>
        )}
      </div>
      <div className={styles.credit}>
        {priceRu(product.credit)}/<span className={styles.month}>мес</span>
      </div>
      <div className={styles.rating}>
        <Rating rating={product.reviewAvg ?? product.initialRating} />
      </div>
      <div className={styles.tags}>
        {product.categories.map((c) => (
          <Tag className={styles.tag} key={c} color="ghost">
            {c}
          </Tag>
        ))}
      </div>
      <div className={styles['price-title']}>цена</div>
      <div className={styles['credit-title']}>кредит</div>
      <div className={styles['rating-title']}>
        {product.reviewCount} {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
      </div>
      <div className={styles.hr}>
        <Divider />
      </div>
      <div className={styles.description}>{product.description}</div>
      <div className={styles.feature}>
        {product.characteristics.map((c) => (
          <div className={styles.characteristics} key={c.name}>
            <span className={styles['characteristics-name']}>{c.name}</span>
            <span className={styles['characteristics-dots']}></span>
            <span className={styles['characteristics-value']}>{c.value}</span>
          </div>
        ))}
      </div>
      <div className={styles['adv-block']}>
        {product.advantages && (
          <div className={styles.advantages}>
            <div className={styles['adv-title']}>Преимущества</div>
            <div>{product.advantages}</div>
          </div>
        )}
        {product.disadvantages && (
          <div className={styles.disadvantages}>
            <div className={styles['adv-title']}>Недостатки</div>
            <div>{product.disadvantages}</div>
          </div>
        )}
      </div>
      <div className={styles.hr}>
        <Divider />
      </div>
      <div className={styles.actions}>
        <Button appearance="primary">Узнать подробнее</Button>
        <Button appearance="ghost" arrow="right">
          Читать отзывы
        </Button>
      </div>
    </Card>
  );
};
