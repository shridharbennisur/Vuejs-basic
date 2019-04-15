Vue.component('product', {
    props: {
        premium: {
            required: true,
            type: Boolean
        }
    },
    template: `<div>
    <h1>{{ getProductTitle }}</h1>
    <p v-if="getAvailableItemsCount > 10">In stock</p>
    <p
      v-else-if="getAvailableItemsCount <= 10  && getAvailableItemsCount != 0"
    >
      Almost sold out
    </p>
    <p v-else>Out of stock</p>
    <p>premium: {{premium}}</p>
    <ul>
      <li v-for="(product, index) in products">
        <p v-on:click="setActiveProduct(index)">{{ product.name }}</p>
      </li>
    </ul>
  </div>`,
    data() {
        return {
            activeProduct: 'socks',
            availableProducts: 10,
            selectedProdctIndex: 0,
            products: [{
                    name: 'socks',
                    items: 10
                },
                {
                    name: 'shoes',
                    items: 0
                },
                {
                    name: 'pen',
                    items: 12
                },
            ]
        }
    },
    methods: {
        setActiveProduct(index) {
            this.selectedProdctIndex = index;
        }
    },
    computed: {
        getProductTitle() {
            return this.products[this.selectedProdctIndex].name + ' Available items:' + this.products[this.selectedProdctIndex].items;

        },
        getAvailableItemsCount() {
            return this.products[this.selectedProdctIndex].items;
        }
    }
});

var app = new Vue({
    el: '#app',
    data: {
        premium: false
    }
});