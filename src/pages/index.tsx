import { Button, HeaderTag, Paragraph, Rating, Tag } from '@/components';
import { withLayout } from '@/layout';
import axios from 'axios';
import { MenuItem } from '@/interfaces/menu.interface';
import { GetStaticProps } from 'next/types';
import { useState } from 'react';

function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState(4);
  return (
    <>
      <HeaderTag tag="h3">Text</HeaderTag>
      <Button appearance="primary" arrow="right">
        Button
      </Button>
      <Button appearance="ghost" arrow="right">
        Button
      </Button>
      <Paragraph size="s">Small</Paragraph>
      <Paragraph size="m">Medium</Paragraph>
      <Paragraph size="l">Large</Paragraph>
      <Tag size="s" color="green">
        Small
      </Tag>
      <Tag size="m" color="primary">
        Large
      </Tag>
      <Tag size="s" color="red">
        Large
      </Tag>
      <Rating isEditable rating={rating} setRating={setRating} />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    { firstCategory },
  );

  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
