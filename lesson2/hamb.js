"use strict";
class Param {
    constructor(elements) {
        this.price = +element.dataset['price'];
        this.callories = +element.dataset['callories'];
    }
}


class Burger {
    constructor(size, add, topping) {
        this.size = new Param(this.select(size));
        this.add = new Param(this.select(add));
        this.toppings = new Param(this.select(topping));
    }
    select(name) {
        return document.querySelector('input[name="${name}"]:checked');
    }


    getToppings(name) {
        let result = [];
        this.selectAll(name).forEach(el => result.push(new Param(el)));
        return result;
    }

    selectAll(name) {
        return document.querySelectorAll('input[name="${name}"]:checked');
    }

    totalPrice() {
        let result = this.size.price + this.add.price;
        this.toppings.forEach(topping => result += topping.price);
        return result;

    }
    totalCallories() {
        let result = this.size.callories + this.add.callories;
        this.toppings.forEach(topping => result += topping.callories);
        return result;
    }

    showSum(price, callories) {
        document.querySelector(price).textComtent = this.totalPrice();
        document.querySelector(callories).textComtent = this.totalCallories();
    }
}
showSum()
