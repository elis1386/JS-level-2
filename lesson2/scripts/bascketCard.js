'use strict';

class Basket {
    /**
     * 
     * @param {Array} this.product  массив товаров
     * @param {number} totalPrice цена всех товаров
     */
    constructor(totalPrice) {
        this.product = [];
        this.totalPrice = 0;
        this.container = document.querySelector;
    }

    /**
     * Метод добавляет продукт в объект basket  и увеличивает количество товаров в строке в корзине.
     * 
     */
    addProduct()

    /**
    * Метод удаляет товар из корзины.
    */
    removeProduct()

    /**
     * Метод возвращает индекс продукта по его id в массиве products.
     */
    getProductIndex()


    /**
    * Методы которые будут пересчитывать сумму товаров и перерисовывать корзину.
    */
    #updateTotapSum() {
        this.totalPrice = this.products.reduce((sum, this.product) => { sum + product.price * product.quantity }, 0);
    }

    #render()


}

