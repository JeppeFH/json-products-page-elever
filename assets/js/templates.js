// Template functions - hver function opfører sig som en HTML template.

export const productListTmpl = (product) =>
  `
        <div class="product-list-display">
        <img src="${product.image}${product.id}">
        <p><b>${product.title}</b></p>
        <p><i>${product.price} kr</i></p>
        <label class="read-more-btn" ><a>Læs mere om produkt</a></label>
        <div class="read-more">  
        <p>${product.info1}</p>
         <p>${product.info2}</p>
          <p>${product.info3}</p>
        </div>
    <button class="product-btn"><a href="page.html?id=${product.id}">Se produkt</a></button> 
     
    </div>
    `;

export const productPageTmpl = (product) =>
  `
            <div class="product-list-display">
            <p><i>${product.description} kr</i></p>
            <p><b>${product.title}</b></p>
            <p><i>${product.price} kr</i></p>
            <img src="${product.image}${product.id}">
        <button><a href="index.html">Tilbage</a></button> 
        </div> 
        `;
