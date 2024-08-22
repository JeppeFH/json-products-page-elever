import { productsList } from "./products-list.js";
import { productPage } from "./product-page.js";
const app = {};

app.init = async () => {
  productsList();
  productPage();
};

app.init();

let readMoreBtn = document.querySelector(".read-more-btn");
let readMoreBox = document.querySelector(".read-more");

readMoreBtn.addEventListener("click", () => {
  readMoreBox.classList.toggle("active");
});
