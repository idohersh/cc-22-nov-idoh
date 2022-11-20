import React, { FC } from 'react';
import { CardGalleryItem, Cell } from 'wix-style-react';

const ProductGalleryItem: FC = () => {
  return (
    <Cell span={4}>
      <CardGalleryItem
        backgroundImageUrl="example.jpg"
        primaryActionProps={{
          label: 'View',
        }}
        title="Title"
        subtitle="Subtitle"
      />
    </Cell>
  );
};

export default ProductGalleryItem;
