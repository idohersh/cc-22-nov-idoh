import React, { FC } from 'react';
import {
  useTranslation,
  useAppLoaded,
  Trans,
  useModuleParams,
} from '@wix/yoshi-flow-bm';
import {
  Page,
  Layout,
  Cell,
  Card,
  Text,
  TextButton,
  Box,
} from 'wix-style-react';
import { navigateTo } from '@wix/business-manager-api';

const introUrl = 'https://github.com/wix-private/business-manager';

const Index: FC = () => {
  useAppLoaded({ auto: true });

  const { t } = useTranslation();

  return (
    <Page>
      <Page.Header dataHook="app-title" title={t('app.title')} />
      <Page.Content>
        <Layout>
          <Cell>
            <Card>
              <Card.Content>
                <Box gap="SP5">
                  <TextButton
                    onClick={() => {
                      navigateTo({
                        pageComponentId: 'cc-22-nov-idoh-bm-pages-product-list',
                      });
                    }}
                  >
                    Product List
                  </TextButton>
                  <TextButton
                    onClick={() => {
                      navigateTo({
                        pageComponentId: 'cc-22-nov-idoh-bm-pages-new-product',
                      });
                    }}
                  >
                    New Product
                  </TextButton>
                </Box>
              </Card.Content>
            </Card>
          </Cell>
        </Layout>
      </Page.Content>
    </Page>
  );
};

export default Index;
