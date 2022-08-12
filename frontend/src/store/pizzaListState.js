// import pizzas from './pizzas';
import api from '../apis/pizzas';

const state = {
    pizzas: [],
}

const mutations = {
    setPizzas(state, pizzas) {
        state.pizzas = pizzas
    }
}

const actions = {
    fetchPizzas: ({ commit }) => {
        api.fetchPizzas().then(pizzas => {
            let pizzasArray = [];
            pizzas.forEach(pizza => {
                let newPizza = {
                    id: parseInt(pizza.id),
                    name: pizza.name,
                    price: parseFloat(pizza.price),
                    image: pizza.image,
                    ingredients: pizza.ingredients.map(ingredient => {
                        if (!ingredient.name.includes('Extra'))
                            return ingredient.name
                    }),
                    isExpanded: false,
                    inCart: false,
                    nrOfItemsInCart: 0,
                    extraPrice: 0,
                    extraIngredients: pizza.ingredients.map(ingredient => {
                        if (ingredient.name.includes('Extra'))
                            return {
                                id: parseInt(ingredient.url.split('/')[ingredient.url.split('/').length -2]),
                                name: ingredient.name,
                                price: parseFloat(ingredient.price),
                                checked: false,
                            }
                        
                    }).filter(element => element !== undefined)
                }
                pizzasArray.push(newPizza);
            })
            commit('setPizzas', pizzasArray)
        });
    },
    addPizza({ commit }, input) {
        let pizza = {
            id: Math.max(...state.pizzas.map(p => p.id)) + 1,
            name: input.name,
            price: parseInt(input.price),
            ingredients: input.ingredients,
            isExpanded: false,
            inCart: false,
            nrOfItemsInCart: 0,
            extraPrice: 0,
            extraIngredients: input.extra,
        }

        let newArray = [...state.pizzas, pizza]
        
        commit('setPizzas', newArray)
    },
    editPizza({ commit }, input) {
        let pizza = {
            id: input.id,
            name: input.name,
            price: parseInt(input.price),
            image: input.image,
            ingredients: input.ingredients,
            isExpanded: input.isExpanded,
            inCart: input.inCart,
            nrOfItemsInCart: input.nrOfItemsInCart,
            extraPrice: input.extraPrice,
            extraIngredients: input.extra,
        }

        let oldArray = state.pizzas;

        let midArray = oldArray.filter(p => p.id !== input.id)
        
        let newArray = [...midArray, pizza]

        commit('setPizzas', newArray)
    },
    deletePizza({ commit }, pizza) {
        let newArray = state.pizzas.filter(p => p.id !== pizza.id)
        commit('setPizzas', newArray)
    },
    // closeOptionsAndCartControl({ commit }, pizza) {
    //     let newPizza = state.pizzas.filter(p => p.id == pizza.id)
    //     let newArray = state.pizzas.filter(p => p.id !== pizza.id)

    //     newPizza.isExpanded = false;

    //     console.log(newPizza)
    //     commit('setPizzas', newArray.push(newPizza))
    // }
}

const getters = {
    getPizzas(state) {
        return state.pizzas
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}