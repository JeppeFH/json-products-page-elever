import { fetchProducts } from "./fetch-data.js";
import { productPageTmpl } from "./templates.js";

let products = await fetchProducts();

export function productPage() {
  const productsPageContainer = document.querySelector(
    ".product-page-container"
  );

  if (productsPageContainer) {
    let search = location.search;

    let productID = new URLSearchParams(search).get("id");

    let findProduct = products.find((product) => product.id == productID);

    productsPageContainer.insertAdjacentHTML(
      "beforeend",
      productPageTmpl(findProduct)
    );
  }

  let readMoreBtn = document.querySelector(".read-more-btn");
  let readMoreBox = document.querySelector(".read-more");
}
