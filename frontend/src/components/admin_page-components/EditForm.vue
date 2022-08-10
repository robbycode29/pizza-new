<template>
    <div>
        <div class="h-full w-1/2 pb-20 flex translate-x-1/2">
            <div class="w-full h-fit mt-24 bg-slate-500 rounded-2xl flex flex-col gap-10">
                <h1 class="mt-12 text-white font-semibold text-2xl">Edit menu</h1>
                <div class="border-2 borer-white rounded-2xl m-10 mt-0 flex flex-col items-center">
                    <form id="editForm" @submit="editMenu" class="mt-10 w-full">
                        <p v-if="errors.length" class="text-red-500">
                            <b>Please correct the following error(s):</b>
                            <ul>
                            <li v-for="error in errors" :key="error">{{ error }}</li>
                            </ul>
                        </p>
                        <div class="flex flex-col gap-5">
                            <div class="flex flex-col gap-5 items-center">
                                <label for="name" class="text-white font-semibold text-md">Pizza name</label>
                                <input id="name" v-model="name" type="text" name="name" class="w-6/12 border-2 border-white rounded-lg"/>
                            </div>
                            <div class="flex flex-col gap-5 items-center">
                                <label for="price" class="text-white font-semibold text-md">Price</label>
                                <input id="price" v-model="price" type="number" min="0" name="price" class="w-6/12 border-2 border-white rounded-lg" />
                            </div>
                            <div class="flex flex-col gap-5 items-center">
                                <label class="text-white font-semibold text-md">Ingredients (separate with a comma)</label>
                                <input id="ingredients" v-model.trim="ingredients" type="text" name="ingredients" class="w-6/12 border-2 border-white rounded-lg" />
                            </div>
                            <div class="flex flex-col gap-5 items-center">
                                <label class="text-white font-semibold text-md">Extra Ingredients Options</label>
                                <select id="extra" v-model="extra" name="extra" multiple="true" class="w-6/12 border-2 border-white rounded-lg">
                                    <option v-for="extraIngredient in extraIngredients" :key="extraIngredient.id" :value="extraIngredient">{{extraIngredient.name}}</option>
                                </select>
                            </div>
                        </div>
                        <div class="flex flex-col justify-center my-10">
                            <button type="submit" value="submit" class="bg-slate-500 text-white font-semibold w-32 py-3 flex justify-center self-center rounded-lg border-2 border-white hover:bg-white hover:text-slate-500 duration-200">
                                Save
                            </button>
                        </div>
                    </form>
                    <button @click="this.hidePrompt" class="bg-white text-slate-500 font-semibold w-20 py-2 mb-5 flex justify-center self-center rounded-lg border-2 border-white hover:bg-red-500 hover:text-white duration-200">
                        Exit
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { mapActions } from 'vuex';

import extraIngredients from '../../store/extraIngredients'

export default {
    name: 'EditForm',
    data() {
        return {
            errors: [],
            name: this.pizza.name,
            price: this.pizza.price,
            ingredients: this.pizza.ingredients,
            extra: this.pizza.extraIngredients,
            extraIngredients: extraIngredients
        }
    },
    props: ['pizza'],
    methods: {
        ...mapActions(['editPizza']),
        checkForm: function (e) {

            this.errors = [];

            if (!this.name) {
                this.errors.push('Name required.');
            }
            if (!this.price) {
                this.errors.push('Price required.');
            }
            if (!this.ingredients) {
                this.errors.push('Ingredients required.');
            }
            if (!this.extra) {
                this.errors.push('Extra ingredients required.');
            }

            e.preventDefault();

            if (this.name && this.price && this.ingredients && this.extra)
                return true;
            else return false;

            
        },
        editMenu(e) {
            if (this.checkForm(e)) {
                this.editPizza({
                    id: this.pizza.id,
                    name: this.name,
                    price: this.price,
                    image: this.pizza.image,
                    ingredients: String(this.ingredients).split(','),
                    extra: this.extra,
                    isExpanded: this.pizza.isExpanded,
                    inCart: this.pizza.inCart,
                    nrOfItemsInCart: this.pizza.nrOfItemsInCart,
                    extraPrice: this.pizza.extraPrice,
                });
                this.hidePrompt()
            }  
        },
        hidePrompt() {
            this.$emit('hidePrompt')
        },
    },
}

</script>