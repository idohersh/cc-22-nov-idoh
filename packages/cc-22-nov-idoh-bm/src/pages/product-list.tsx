import React, { FC } from 'react';
import { useTranslation, useAppLoaded, Trans } from '@wix/yoshi-flow-bm';
import { Page, CardGalleryItem, Layout, Cell } from 'wix-style-react';
import ProductGallery from '../exported-components/ProductGallery';

const ProductList: FC = () => {
  useAppLoaded({ auto: true });

  const { t } = useTranslation();

  return (
    <Page>
      <Page.Header dataHook="product-list" title="Products" />
      <Page.Content>
        <ProductGallery />
      </Page.Content>
    </Page>
  );
};

export default ProductList;
