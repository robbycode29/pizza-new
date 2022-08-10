<template>
    <div>
        <div class="bg-slate-700 h-screen flex justify-center">
            <div class="w-8/12 h-fit mt-24 bg-slate-500 rounded-2xl flex flex-col gap-10">
                <h1 class="mt-12 text-white font-semibold text-2xl">Add to menu</h1>
                <div class="border-2 borer-white rounded-2xl m-10 mt-0">
                    <form id="addForm" @submit="addToMenu" action="" class="mt-10">
                        <p v-if="errors.length" class="text-red-500">
                            <b>Please correct the following error(s):</b>
                            <ul>
                            <li v-for="error in errors" :key="error">{{ error }}</li>
                            </ul>
                        </p>
                        <div class="flex flex-col gap-5">
                            <div class="flex flex-col gap-5 items-center">
                                <label for="name" class="text-white font-semibold text-md">Pizza name</label>
                                <input id="name" v-model="name" type="text" name="name" class="w-6/12 border-2 border-white rounded-lg" />
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
                        <div class="flex justify-center my-10">
                            <button type="submit" value="submit" class="bg-slate-500 text-white font-semibold w-32 py-3 flex justify-center self-center rounded-lg border-2 border-white hover:bg-white hover:text-slate-500 duration-200">
                                Add to menu
                            </button>
                        </div>
                    </form>
                    <span v-if="added" class="text-green-500 font-semibold text-md">Item added</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
import extraIngredients from '../../store/extraIngredients'

export default {
    name: 'AddForm',
    data() {
        return {
            errors: [],
            added: false,

            name: null,
            price: null,
            ingredients: null,
            extra: [],
            extraIngredients: extraIngredients
        }
    },
    methods: {
        ...mapActions(['addPizza',]),
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
        addToMenu(e) {
            if (this.checkForm(e)) {

                this.addPizza({
                    name: this.name,
                    price: this.price,
                    ingredients: this.ingredients.split(','),
                    extra: this.extra,
                });
                this.name = null;
                this.price = null;
                this.ingredients = null;
                this.extra = null;
                this.added = true;
            }
        },
    },
    computed: {
        ...mapGetters(['getPizzas'])
    },
    mounted() {
        this.added = false;
    }
}

</script>