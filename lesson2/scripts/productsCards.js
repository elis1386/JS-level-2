'use strict';

const products = [
    new Product(0, 'item-1.png', 'Mango People T-shirt', 52.32),
    new Product(1, 'item-2.png', 'Mango People Blazer', 23.04),
    new Product(2, 'item-3.png', 'Mango People Jacket', 52.90),
    new Product(3, 'item-4.png', 'Mango People Dress', 56.54),
]


function renderProducts(product) {
    const pathToImages = 'img';
    return `
        <div class="item">
            <a class="product"
                href="single page.html">
                <img alt="product photo"
                        class="product-img"
                        src="${pathToImages}/${product.image}">
                <div class="product-text-box">
                    <p class="product-text">${product.name}</p>
                    <p class="product-price">${product.price}</p>
                </div>
            </a>
            <div class="box-add">
                <a class="add" dataproductId = "${product.id}" href="#"><img class="add-img" src="${pathToImages}/cart_add.svg" alt="cart-img">Add to
                    cart</a>
            </div>
        </div>
    `;
}

function addProducts(products) {
    let productsMarkup = '';
    for (let product of products) {
        productsMarkup += renderProducts(product);
    }
    const boxProducts = document.querySelector('.box-product');
    boxProducts.innerHTML = productsMarkup;
}


addProducts(products);

