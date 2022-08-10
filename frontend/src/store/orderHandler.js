const state = {
    orders: []
}

const mutations = {
    addOrder(state, order) {
        state.orders.push(order)
    }
}

const actions = {
    addOrder({ commit }, pizzas) {
        let order = {
            pizzas: pizzas,
            price: 0,
            id: '#' + Math.random()*100000000000000000,
            date: new Date(),
        }
        let extraIngredientPrice = 0;
        pizzas.forEach(pizza => {
            let extraPrice = 0;
            pizza.extraIngredients.forEach(extraIngredient => {
                if (extraIngredient.checked) {
                    extraPrice += extraIngredient.price*pizza.nrOfItemsInCart
                }
            })
            extraIngredientPrice += extraPrice;
        })
        order.price = pizzas.reduce((acc, pizza) => acc + pizza.price*pizza.nrOfItemsInCart, 0) + extraIngredientPrice;
        commit('addOrder', order)
    }
}

const getters = {
    getOrders(state) {
        return state.orders
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}