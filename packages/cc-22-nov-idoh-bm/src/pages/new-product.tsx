import React, { FC, useEffect, useState } from 'react';
import { useTranslation, useAppLoaded, useRequest } from '@wix/yoshi-flow-bm';
import {
  Breadcrumbs,
  Page,
  Box,
  Button,
  BreadcrumbsItem,
  Card,
  Layout,
  Cell,
  FormField,
  Input,
  NumberInput,
  InputArea,
  AddItem,
} from 'wix-style-react';
import { addProduct } from '../products.api';

const NewProduct: FC = () => {
  useAppLoaded({ auto: true });

  const { t } = useTranslation();
  const [saveDisabled, setSaveDisabled] = useState(true);
  const [formFields, setFormFields] = useState({
    name: '',
    price: '',
    description: '',
    image: '',
  });

  // const handleItemClick = (item: BreadcrumbsItem) => {};

  const handleInputChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ): void => {
    const { name, value } = event.target;
    setFormFields((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handlePriceChange = (value: number, stringValue: string) => {
    setFormFields((prevState) => {
      return {
        ...prevState,
        price: stringValue,
      };
    });
  };

  // const handleSave = () => {
  //   useRequest(addProduct(formFields));
  // };

  useEffect(() => {
    if (
      formFields.name !== '' &&
      formFields.price !== '' &&
      formFields.description !== ''
    ) {
      setSaveDisabled(false);
    } else {
      setSaveDisabled(true);
    }
  }, [formFields]);

  return (
    <Page>
      <Page.Header
        dataHook="new-product-page-heading"
        title={t('app.new-product')}
        actionsBar={
          <Box gap="SP2">
            <Button skin="inverted">Cancel</Button>
            <Button
              // onClick={handleSave}
              dataHook="save-button"
              disabled={saveDisabled}
            >
              Save
            </Button>
          </Box>
        }
        breadcrumbs={
          <Breadcrumbs
            // onClick={handleItemClick}
            activeId="2"
            items={[
              { id: '1', value: 'Products' },
              { id: '2', value: 'Untitled Project' },
            ]}
          />
        }
      />
      <Page.Content>
        <Card>
          <Card.Header title="Add new item" />
          <Card.Divider />
          <Card.Content>
            <Box direction="vertical" gap="SP6">
              <Layout>
                <Cell span={4}>
                  <FormField labelSize="small" label="Name">
                    <Input
                      dataHook="name-input"
                      placeholder="Value"
                      value={formFields.name}
                      name="name"
                      onChange={handleInputChange}
                    />
                  </FormField>
                </Cell>
                <Cell span={2}>
                  <FormField labelSize="small" label="Price">
                    <NumberInput
                      dataHook="price-input"
                      size="medium"
                      placeholder="$ Value"
                      value={formFields.price}
                      name="price"
                      onChange={handlePriceChange}
                    />
                  </FormField>
                </Cell>
              </Layout>
              <Layout>
                <Cell span={4}>
                  <FormField labelSize="small" label="Description">
                    <InputArea
                      dataHook="description-input"
                      placeholder="Value"
                      rows={4}
                      // maxLength={300}
                      hasCounter
                      resizable
                      value={formFields.description}
                      name="description"
                      onChange={handleInputChange}
                    />
                  </FormField>
                </Cell>
              </Layout>
              <Layout rowHeight="162px">
                <Cell span={4}>
                  <FormField stretchContent labelSize="small" label="Image">
                    <AddItem
                      alignItems="center"
                      size="large"
                      theme="image"
                      tooltipContent="Add Image"
                    >
                      Add Image
                    </AddItem>
                  </FormField>
                </Cell>
              </Layout>
            </Box>
          </Card.Content>
        </Card>
      </Page.Content>
    </Page>
  );
};

export default NewProduct;
