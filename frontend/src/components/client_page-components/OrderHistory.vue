<template>
    <div>
        <div class="bg-slate-700 h-screen flex justify-center">
            <div class="w-11/12  mt-24 bg-slate-500 rounded-t-2xl flex flex-col items-center gap-10">
                <h1 class="mt-12 text-white font-semibold text-2xl">Order History</h1>
                <div v-if="this.getOrders.length == 0" class="flex flex-col items-center gap-10">
                    <hr class="w-96 "/>
                    <span class="text-white font-semibold bg-slate-500">No orders yet</span>
                </div>
                <table v-else class="border-2 mx-20 text-white font-semibold">
                    <thead class="border-2">
                        <tr>
                            <th class="border-2">Order Number</th>
                            <th class="border-2">Pizzas</th>
                            <th class="border-2">Price</th>
                            <th class="border-2">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in this.getOrders" :key="item" class="border-2">
                            <td class="border-2 py-5 px-3">{{ item.id }}</td>
                            <td v-for="pizza in item.pizzas" :key="pizza.id" class="flex flex-col px-3">
                                <h2 class="self-center">{{pizza.name}}</h2>
                            </td>
                            <td class="border-2 px-3">{{ item.price }} USD</td>
                            <td class="border-2 px-3">{{ item.date }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
    name: 'OrderHistory',
    computed: {
        ...mapGetters(['getOrders']),
    },
}

</script>