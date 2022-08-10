<template>
    <div class="flex flex-col">
        <h1 class="font-semibold mt-5 text-lg">Extra options:</h1>
        <ul class="my-12 self-center flex flex-row gap-7">
            <li v-for="option in currentPizza.extraIngredients" :key="option.id" class="flex flex-col gap-2">
                <input type="checkbox" v-model="option.checked">
                <span class="text-lg font-semibold text-emerald-700">{{option.name}}</span>
                <span class="text-sm font-semibold text-emerald-700">{{option.price}} USD</span>
            </li>
        </ul>
        <div class="flex flex-row justify-between self-center mb-5">
            <div v-if="pizza.inCart" class="flex flex-row gap-5">
                <button id="subtractBtn" @click="removeFromCart"><img width="35px" src="../../assets/minus-icon.png"/></button>
                <div id="counter" class="bg-white border-slate-500 border-2 rounded-xl w-10 h-10 flex justify-center items-center">
                    <span class="font-semibold">{{pizza.nrOfItemsInCart}}</span>
                </div>
                <button id="addBtn" @click="addToCart"><img width="35px" src="../../assets/plus-icon.png"/></button>
            </div>
            <div v-else>
                <button id="addToCartBtn" class="bg-slate-500 hover:bg-slate-400 text-white font-semibold py-2 px-4 mb-5 rounded-md" @click="addToCart">Add to cart</button>
            </div>
        </div>
    </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'OptionsAndCartControl',
    props: ['currentPizza'],
    data() {
        return {
            pizza: this.currentPizza,
        };
    },
    methods: {
        ...mapActions(['addPizzaToCart', 'updatePizzaInCart', 'removePizzaFromCart']),
        addToCart() {
            this.addPizzaToCart(this.pizza);
        },
        removeFromCart() {
            this.removePizzaFromCart(this.pizza);
        }
    },
    computed: {
        ...mapGetters(['getCart']),
    },
    
}

</script>