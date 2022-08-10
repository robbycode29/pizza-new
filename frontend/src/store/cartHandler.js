const state = {
    cart: [],
}

const mutations = {
    setCart(state, pizzas) {
        state.cart = pizzas
    }
}

const actions = {
    addPizzaToCart({ commit }, pizza) {
        let isInArray = false;
        let newCart = [...state.cart];
        state.cart.forEach(p => {
            
            if (pizza.id == p.id) {
                isInArray = true;
                p.nrOfItemsInCart += 1;
            }
            
        })
        if (isInArray == false) {
                
            pizza.inCart = true;
            pizza.nrOfItemsInCart = 1;
            newCart.push(pizza)
            commit('setCart', newCart)
        }
    },
    removePizzaFromCart({ commit }, pizza) {
        let isLastOfItsKind = false;
        let id = null;
        let newCart = [...state.cart];
        state.cart.forEach(p => {
            if (p.id == pizza.id) {
                if (p.nrOfItemsInCart > 1) {
                    p.nrOfItemsInCart -= 1;
                }
                else if (p.nrOfItemsInCart == 1) {
                    isLastOfItsKind = true;
                }    
                if (isLastOfItsKind) {
                    p.nrOfItemsInCart = 0;
                    p.isExpanded = false;
                    p.inCart = false;
                    id = state.cart.indexOf(p)
                }
            }
        })

        if (id !== null) {
            newCart.splice(id, 1)
            commit('setCart', newCart)
        }
    },
    emptyCart({ commit }) {
        state.cart.forEach(p => {
            p.inCart = false;
            p.nrOfItemsInCart = 0;
        })
        commit('setCart', [])
    }
}

const getters = {
    getCart(state) {
        return state.cart
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}