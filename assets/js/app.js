import { productsList } from "./products-list.js";
import { productPage } from "./product-page.js";
const app = {};

app.init = async () => {
  productsList();
  productPage();
};

app.init();
