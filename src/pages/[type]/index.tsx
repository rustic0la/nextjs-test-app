import { withLayout } from '@/layout';
import axios from 'axios';
import { MenuItem } from '@/interfaces/menu.interface';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next/types';
import { firstLevelMenu } from '@/helpers/helpers';
import { ParsedUrlQuery } from 'querystring';
import { FC } from 'react';

const Type: FC<TypeProps> = ({ firstCategory }) => {
  return <>Type: {firstCategory}</>;
};

export default withLayout(Type);

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: firstLevelMenu.map(({ route }) => `/${route}`),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<TypeProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const firstCategoryItem = firstLevelMenu.find(({ route }) => route === params.type);
  if (!firstCategoryItem) {
    return {
      notFound: true,
    };
  }

  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    { firstCategory: firstCategoryItem.id },
  );

  return {
    props: {
      menu,
      firstCategory: firstCategoryItem.id,
    },
  };
};

interface TypeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
