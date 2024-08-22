import { fetchProducts } from "./fetch-data.js";
import { productPageTmpl } from "./templates.js";

let products = await fetchProducts();

export function productPage() {
  const productsPageContainer = document.querySelector(
    ".product-page-container"
  );

  if (productsPageContainer) {
    productsPageContainer.innerHTML = "koden virker";
  }
}
