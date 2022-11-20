import { RenderResult } from '@testing-library/react';
import {
  ButtonTestkit,
  InputTestkit,
  TextTestkit,
  CardHeaderTestkit,
  PageHeaderTestkit,
  NumberInputTestkit,
  InputAreaTestkit,
} from 'wix-style-react/dist/testkit';

export class NewPageDriver {
  constructor(private baseElement: RenderResult['baseElement']) {}

  getWrapperAndDataHook(dataHook: string) {
    return {
      wrapper: this.baseElement,
      dataHook,
    };
  }

  get pageHeader() {
    const pageHeaderTestkit = PageHeaderTestkit({
      wrapper: this.baseElement,
      dataHook: 'new-product-page-heading',
    });
    return {
      exists: pageHeaderTestkit.exists,
      titleText: pageHeaderTestkit.titleText,
    };
  }

  get saveButton() {
    const buttonTestKit = ButtonTestkit(
      this.getWrapperAndDataHook('save-button'),
    );
    return {
      isButtonDisabled: buttonTestKit.isButtonDisabled,
      click: buttonTestKit.click,
    };
  }

  get nameInput() {
    const inputTestkit = InputTestkit(this.getWrapperAndDataHook('name-input'));
    return {
      getText: inputTestkit.getText,
      enterText: inputTestkit.enterText,
    };
  }

  get descriptionInput() {
    const inputAreaTestkit = InputAreaTestkit(
      this.getWrapperAndDataHook('description-input'),
    );
    return {
      enterText: inputAreaTestkit.enterText,
    };
  }

  get priceInput() {
    const numberInputTestkit = NumberInputTestkit(
      this.getWrapperAndDataHook('price-input'),
    );
    return {
      getPrice: numberInputTestkit.getText,
      enterText: numberInputTestkit.enterText,
    };
  }
}
