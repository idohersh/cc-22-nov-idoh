import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { testkit } from '@wix/yoshi-flow-bm/testkit';
import NewProduct from './new-product';
import { NewPageDriver } from './new-page.driver';
import { Chance } from 'chance';
import { bootstrap } from '@wix/yoshi-flow-bm/test/serverless';
import { whenRequest } from '@wix/yoshi-flow-bm/testkit/http-client';

import { CrashCourseProductsScalaApp } from '@wix/ambassador-crash-course-products-scala-app/rpc';
import { addProduct } from '../products.api';

const { serverlessApp } = bootstrap();

const createPageDriver = async () => {
  const {
    TestComponent,
    context: { i18n },
  } = testkit.getBMComponent(
    NewProduct,
    //   {
    //   mocks: [whenRequest(addProduct).reply(200, () => ({

    //   }))],
    // }
  );
  const { baseElement, findByTestId } = render(<TestComponent />);
  await findByTestId('new-product-page-heading');
  const pageDriver = new NewPageDriver(baseElement);
  return { pageDriver, i18n };
};

describe('new product page', () => {
  testkit.beforeAndAfter();

  it('should render the title with the correct translated text', async () => {
    const { pageDriver, i18n } = await createPageDriver();
    expect(await pageDriver.pageHeader.exists()).toBe(true);
    expect(await pageDriver.pageHeader.titleText()).toBe(
      i18n.t('app.new-product'),
    );
  });

  it('should not enbale the button unless the name and price are filled', async () => {
    const chance = new Chance();
    const { pageDriver, i18n } = await createPageDriver();
    await pageDriver.nameInput.enterText(chance.first());
    expect(await pageDriver.saveButton.isButtonDisabled()).toBe(true);
  });

  it('should enbale the button when the name and price are filled', async () => {
    const chance = new Chance();
    const { pageDriver, i18n } = await createPageDriver();
    await pageDriver.nameInput.enterText(chance.first());
    await pageDriver.priceInput.enterText(chance.integer().toString());
    expect(await pageDriver.saveButton.isButtonDisabled()).toBe(false);
  });

  it.skip('should send product details properly on clicking save button', async () => {
    const chance = new Chance();
    const { pageDriver, i18n } = await createPageDriver();
    const spy = jest.fn();

    const first = chance.first();
    const price = chance.integer().toString();
    const description = chance.word();
    await pageDriver.nameInput.enterText(first);
    await pageDriver.priceInput.enterText(price);
    await pageDriver.descriptionInput.enterText(description);
    await pageDriver.saveButton.click();

    expect(spy).toBeCalledWith(
      expect.objectContaining({
        first,
        price,
        description,
      }),
    );
  });
});
