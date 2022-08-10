<template>
    <div class="bg-slate-700 flex justify-center">
        <div class="w-8/12 h-[700px] mt-24 bg-slate-500 rounded-2xl flex flex-col gap-10">
            <h1 class="mt-12 text-white font-semibold text-2xl">Shopping Cart</h1>
            <table class="border-2 mx-20 text-white font-semibold">
                <thead class="border-2">
                    <tr>
                        <th>Pizza</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in this.getCart" :key="item.id">
                        <td>
                            <div>{{ item.name }}</div>
                            <ul class="flex flex-row text-xs gap-1 justify-center items-center py-2">
                                <button id="shoppingCart" @click="editIngredients(item)" :aria-controls="'collapse'+item.id" class="bg-white w-6 rounded-full p-1 ">
                                    <img width="15px" src="../../assets/pencil-slate.png"/>
                                </button>
                                (
                                <span v-if="!checkForExtra(item)">No extra ingredients</span>
                                <li v-else v-for="ingredient in item.extraIngredients" :key="ingredient.id">
                                    <span v-if="ingredient.checked">{{ ingredient.name.replace('Extra', '') }}</span>
                                </li>
                                )
                            </ul>
                        </td>
                        <td>{{ item.price + parseFloat(sumIngredients(item.extraIngredients)) }} USD</td>
                        <td class="py-1">
                            <button @click="removeItem(item)" class="bg-white rounded-full py-2 px-1 -translate-y-1"><img width="10px" class="h-[3px]" src="../../assets/minus-slate.png"/></button>
                            {{ item.nrOfItemsInCart }}
                            <button @click="addItem(item)" class="bg-white rounded-full p-1"><img width="10px" src="../../assets/plus-slate.png"/></button>
                        </td>
                        <td>{{ (item.price + parseFloat(sumIngredients(item.extraIngredients)))*parseInt(item.nrOfItemsInCart) }} USD</td>
                    </tr>
                </tbody>
                <tfoot class="border-2">
                    <tr>
                        <td colspan="3">Total</td>
                        <td>{{ total }} USD</td>
                    </tr>
                </tfoot>
            </table>
            <div class="flex-1"></div>
            <button @click="pay" class="bg-slate-500 text-white w-20 h-10 mb-10 flex justify-center self-center rounded-lg border-2 border-white hover:bg-white hover:text-slate-500 duration-200">
                <h2 class="font-semibold self-center">Pay</h2>
            </button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
// import PizzaListItem from '../client_page-components/PizzaListItem.vue'

export default {
    name: 'ShoppingCart',
    data() {
        return {
            cart: this.getCart,
        }
    },
    methods: {
        ...mapActions(['addPizzaToCart', 'removePizzaFromCart', 'emptyCart', 'addOrder']),
        
        addItem(pizza) {
            this.addPizzaToCart(pizza)
        },
        removeItem(pizza) {
            this.removePizzaFromCart(pizza)
            if (this.getCart.length == 0)
                this.$router.push('/pizza')
        },
        sumIngredients(ingredients) {
            let sum = 0;
            ingredients.forEach(ingredient => {
                if (ingredient.checked) {
                    sum += parseFloat(ingredient.price);
                }
            });
            return sum;
        },
        pay() {
            this.addOrder(this.getCart)
            this.emptyCart()
            this.$router.push('/thankyou')
        },
        editIngredients(pizza) {
            pizza.isExpanded = true;
            // PizzaListItem.expand
            this.$router.push('/pizza')
        },
        checkForExtra(pizza) {
            let ingredientExists = false
            pizza.extraIngredients.forEach(i => {
                if (i.checked)
                    ingredientExists = true;
            })
            return ingredientExists;
        }
    },
    computed: {
        ...mapGetters(['getCart']),
        total() {
            let total = 0;
            for (let item of this.getCart) {
                total += (item.price + this.sumIngredients(item.extraIngredients)) * parseInt(item.nrOfItemsInCart);
            }
            return total;
        },
        // addedIngredients() {
        //     let ingredients = [];
        //     for (let item of this)
        // }
    }
}

</script>