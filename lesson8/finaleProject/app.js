
const product = (name, size, color, price, image) => ({ name, size, color, price, image })
const log = (text, type, date = new Date()) => ({ text, type, date })


const products = [
    product('T-shirt', 'M', 'white', '250 $', 'images/item-1.png'),
    product('Blaser', 'S', 'Red', '125 $', 'images/item-2.png'),
    product('Jacket', 'L', 'Darkblue', '550 $', 'images/item-3.png'),
    product('Dress', 'XL', 'Flowers', '450 $', 'images/item-4.png'),

]



new Vue({
    el: '#app',
    data: {
        products: products,
        product: products[0],
        selectedProductIndex: 0,
        phoneVisibl: false,
        search: '',
        modalVisibl: false,
        logs: [],
    },
    methods: {
        selectProduct: function (index) {
            this.product = products[index]
            this.selectedProductIndex = index
        },
        buyItem() {
            this.modalVisibl = false
            this.logs.push(
                log(`Success order: ${this.product.name}`, 'ok')
            )
        },
        cancelBuyItem() {
            this.modalVisibl = false
            this.logs.push(
                log(`Cancelled order: ${this.product.name}`, 'cancel')
            )
        }
    },
    computed: {
        phoneBtnText() {
            return this.phoneVisibl ? 'Hide price' : 'Show price'
        },
        filteredProducts() {
            return this.products.filter(product => {
                return product.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1
            })
        },

    }
})