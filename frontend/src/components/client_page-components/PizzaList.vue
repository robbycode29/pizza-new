<template>
    <div class="flex flex-col bg-slate-700">
        <h1 class="mt-20 font-semibold text-2xl text-white">
        Choose from our delicious pizzas
        </h1>
        <div class="h-20"></div>
        <ul class="w-11/12 self-center">
            <PizzaListItem v-for="pizza in this.getPizzas" :pizza="pizza" :key="pizza.id" :index="pizza.id"/>
        </ul>
        
    </div>
</template>

<script>
import PizzaListItem from "./PizzaListItem.vue";

import { mapGetters, mapActions } from "vuex";


export default {
    name: 'PizzaList',
    
    components: {
        PizzaListItem,
    },
    methods: {
        ...mapActions(["fetchPizzas", "fetchIngredients"]),
    },
    computed: {
        ...mapGetters(["getPizzas"]),
    },

}

</script>