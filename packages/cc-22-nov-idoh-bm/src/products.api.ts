import { method } from '@wix/yoshi-flow-bm/serverless';
import { CrashCourseProductsScalaApp } from '@wix/ambassador-crash-course-products-scala-app/rpc';

const productService = CrashCourseProductsScalaApp().ProductsService();

export const addProduct = method(async function ({ name, description, price }) {
  const productItem = await productService(this.context.aspects).add(
    'bcf3a120-7d33-41b2-8287-66ec4d62974b',
    name,
    description,
    price,
    'https://www.rlmedia.io/is/image/PoloGSI/s7-1392490_lifestyle?$rl_df_pdp_5_7_lif$',
  );

  return {
    productItem,
  };
});
