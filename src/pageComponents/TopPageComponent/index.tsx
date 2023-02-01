import { HeaderTag, Tag, HhDataComponent, Sort, SortEnum, Product } from '@/components';
import { Advantages } from '@/components/Advantages';
import { TopLevelCategory, TopPageModel } from '@/interfaces/page.interface';
import { ProductModel } from '@/interfaces/product.interface';
import { FC, useEffect, useReducer } from 'react';
import { sortReducer } from './sort.reducer';
import styles from './TopPage.module.css';

interface TopPageComponentProps {
  firstCategory: TopLevelCategory;
  page: TopPageModel;
  products: ProductModel[];
}

export const TopPageComponent: FC<TopPageComponentProps> = ({ page, products, firstCategory }) => {
  const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(sortReducer, {
    products,
    sort: SortEnum.Rating,
  });

  useEffect(() => {}, []);

  const setSort = (sort: SortEnum) => {
    dispatchSort({ type: sort });
  };

  return (
    <div>
      <div className={styles.title}>
        <HeaderTag tag="h1">{page.title}</HeaderTag>
        {products && (
          <Tag color="grey" size="m">
            {products.length}
          </Tag>
        )}
        <Sort sort={sort} setSort={setSort} />
      </div>
      <div>{sortedProducts && sortedProducts.map((p) => <Product product={p} key={p._id} />)}</div>

      {page.hh && (
        <div className={styles['top-page-title']}>
          <HeaderTag tag="h2">Вакансии - {page.category}</HeaderTag>
          <Tag color="red" size="m">
            hh.ru
          </Tag>
        </div>
      )}
      {firstCategory === TopLevelCategory.Courses && page.hh && <HhDataComponent {...page.hh} />}

      {page.advantages && page.advantages.length > 0 && (
        <>
          <div className={styles['top-page-title']}>
            <HeaderTag tag="h2">Преимущества</HeaderTag>
          </div>
          <Advantages advantages={page.advantages} />
        </>
      )}

      {page.seoText && (
        <div className={styles.seo} dangerouslySetInnerHTML={{ __html: page.seoText }} />
      )}
      <div className={styles['top-page-title']}>
        <HeaderTag tag="h2">Получаемые навыки</HeaderTag>
      </div>
      {page.tags.map((t) => (
        <span key={t} className={styles.tag}>
          <Tag key={t} color="primary">
            {t}
          </Tag>
        </span>
      ))}
    </div>
  );
};
