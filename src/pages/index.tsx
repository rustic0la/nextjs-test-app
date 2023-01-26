import { Button, HeaderTag, Paragraph, Rating, Tag } from '@/components';
import { withLayout } from '@/layout';
import { useState } from 'react';

function Home() {
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
