import React, { FC } from 'react';
import { AddItem, Cell, Layout } from 'wix-style-react';
import ProductGalleryItem from './ProductGalleryItem';
import { navigateTo } from '@wix/business-manager-api';



const ProductGallery: FC = () => {
  return (
    <Layout>
      <ProductGalleryItem />
      <ProductGalleryItem />
      <ProductGalleryItem />
      <ProductGalleryItem />
      <ProductGalleryItem />
      <ProductGalleryItem />
      <ProductGalleryItem />
      <Cell span={4}>
        <AddItem
          onClick={() => {
            navigateTo({
              pageComponentId: 'cc-22-nov-idoh-bm-pages-new-product',
            });
          }}
          size="large"
        >
          Add Product
        </AddItem>
      </Cell>
    </Layout>
  );
};

export default ProductGallery;
