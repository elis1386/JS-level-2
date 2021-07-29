// * Некая сеть фастфуда предлагает несколько видов гамбургеров:
// Маленький (50 рублей, 20 калорий).
// Большой (100 рублей, 40 калорий).
// Гамбургер может быть с одним из нескольких видов начинок (обязательно):
// С сыром (+10 рублей, +20 калорий).
// С салатом (+20 рублей, +5 калорий).
// С картофелем (+15 рублей, +10 калорий).
// Дополнительно гамбургер можно посыпать приправой (+15 рублей, +0 калорий) и полить майонезом (+20 рублей, +5 калорий).

"use strict";
const sizeBig = 'big';
const sizeSmall = 'small';
const stuffing = [
    cheese(10, 20)
]

class Hamburger {
    constructor() {
        this.sizes = {
            'big': 100,
            'small': 50,
        };
        this.size = '';
        this.stuffing = [];
        this.topping = [];
    }
    calculatePrice() {
        let price = this.sizes[this.size];
        this.stuffing.forEach(element => {
            this.stuffings[element] + price
        });
        return price;
    }
    calculateCalories() {

    }

}





let humburger = new Hamburger();
console.log(humburger.calculateCalories());
console.log(humburger.calculatePrice());


