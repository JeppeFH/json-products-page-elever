// Template functions - hver function opfører sig som en HTML template.

export const productListTmpl = (product) =>
  `
        <div class="product-list-grid">
        <img src="${product.image}${product.id}">
        <p><b>${product.title}</b></p>
        <p><i>${product.price} kr</i></p>
    <button><a href="page.html?id=${product.id}">Se produkt</a></button> 
    </div>
    `;

export const productPageTmpl = (product) =>
  `
            <div class="product-list-grid">
            <p><i>${product.description} kr</i></p>
            <p><b>${product.title}</b></p>
            <p><i>${product.price} kr</i></p>
            <img src="${product.image}${product.id}">
        <button><a href="index.html">Tilbage</a></button> 
        </div> 
        `;
