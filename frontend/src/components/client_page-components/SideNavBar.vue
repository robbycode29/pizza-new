<template>
    <div class="w-28 bg-slate-500 flex flex-col gap-16 hover:w-72 duration-200 overflow-hidden"> 
        <router-link to="/pizza/" class="flex flex-row w-12 ml-8 mt-16">
            <img class="w-12" src='../../assets/pizza-white.png'/>
            <h2 class="text-white font-semibold text-lg ml-9 mt-3">Menu</h2>
        </router-link>
        <router-link to="/cart/" v-if="this.getCart.length !== 0" class="flex flex-row w-12 ml-6 gap-1">
            <img class="w-12 h-11" src="../../assets/cart-white.png"/>
            <div class="text-slate-500 font-semibold text-xs h-4 pb-1 px-1 rounded-full bg-white">{{this.allItems}}</div>
            <h2 class="text-white font-semibold text-lg ml-7 mt-3">Cart</h2>
        </router-link>
        <router-link to="/orders/" class="flex flex-row w-12 ml-8 gap-1">
            <img class="w-12 h-11" src="../../assets/clock-white.png"/>
            <h2 class="text-white font-semibold text-lg ml-7 mt-3">Orders</h2>
        </router-link>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
    name: "SideNavBar",
    data() {
        return {
            cart: this.getCart,
        };
    },
    computed: {
        ...mapGetters(["getCart"]),

        allItems() {
            let nr = 0;
            this.getCart.forEach(item => {
                nr += item.nrOfItemsInCart
            })
            return nr
        }
    
    },
}

</script>

