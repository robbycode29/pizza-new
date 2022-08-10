<template>
    <div>
        <EditForm v-if="this.editing" @hidePrompt="hidePrompt" :pizza="this.choice" id="myEditForm" class="absolute z-90 w-full h-full bg-gray-900 opacity-95"/>
        <div v-if="this.deleting" class="absolute z-90 w-full h-full bg-gray-900 opacity-95">
            <div class="flex w-full h-full justify-center">
                <div class="h-full w-96 pb-20 flex">
                    <div class="w-full h-fit py-12 px-12 mt-24 bg-slate-500 rounded-2xl flex flex-col justify-center gap-10 text-white">
                        <h1>Are you sure you want to delete {{this.itemToDel.name}} with id {{this.itemToDel.id}}?</h1>
                        <div class="flex flex-row items-center justify-center gap-5">
                            <button @click="deletePizza(itemToDel), deleting=false" class="bg-red-500 text-white font-semibold w-20 py-2 flex justify-center self-center rounded-lg border-2 border-white hover:bg-red-200 hover:text-slate-500 duration-200">
                                Delete
                            </button>
                            <button @click="deleting=false" type="submit" value="submit" class="bg-slate-500 text-white font-semibold w-20 py-2 flex justify-center self-center rounded-lg border-2 border-white hover:bg-white hover:text-slate-500 duration-200">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-slate-700 h-fit flex justify-center w-full">
            <div class="w-11/12 mt-24 pb-28 bg-slate-500 rounded-2xl flex flex-col items-center gap-10">
                <h1 class="mt-12 text-white font-semibold text-2xl">Menu</h1>
                <table class="border-2 mx-20 text-white font-semibold">
                    <thead class="border-2">
                        <tr>
                            <th class="border-2">id</th>
                            <th class="border-2">Pizza</th>
                            <th class="border-2">Price</th>
                            <th class="border-2">Ingredients</th>
                            <th class="border-2">Extra Ingredients Options</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in this.getPizzas" :key="getPizzas.indexOf(item)">
                            <td class="px-10 py-2 border-2">{{item.id}}</td>
                            <td class="px-10 py-2 border-2">{{item.name}}</td>
                            <td class="px-10 py-2 border-2">{{item.price}} USD</td>
                            <td class="px-10 py-2 text-xs border-2">
                                <ul>
                                    <li v-for="ingredient in item.ingredients" :key="ingredient">{{ingredient}}</li>
                                </ul>
                            </td>
                            <td class="px-20 py-2 text-xs border-2">
                                <ul>
                                    <li v-for="extra in item.extraIngredients" :key="extra.id">{{extra.name}}</li>
                                </ul>
                            </td>
                            <td class="px-10 py-2 border-2">
                                <div class="flex flex-col gap-5">
                                    <button @click="showPrompt(item)" class="w-fit self-center">
                                        <img width="20px" src="../../assets/pencil-white.png" />
                                    </button>
                                    <button @click="deleteItem(item)">
                                        <img width="20px" src="../../assets/trash-red.png" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <router-link to="/admin/add-form" class="bg-slate-500 text-white font-semibold w-32 py-3 flex justify-center self-center rounded-lg border-2 border-white hover:bg-white hover:text-slate-500 duration-200">
                    Add more
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'
import EditForm from './EditForm.vue'

export default {
    name: 'MenuList',
    components: {
        EditForm
    },
    data() {
        return {
            choice: null,
            editing: false,
            deleting: false,
            itemToDel: null,
        }
    },
    methods: {
        ...mapActions(['deletePizza']),
        hidePrompt() {
            this.editing = false;
        },
        showPrompt(item) {
            this.editing = true;
            this.choice = item
        },

        deleteItem(item) {
            this.deleting = true;
            this.itemToDel = item;
        },
    },
    computed: {
        ...mapGetters(['getPizzas']),
    },
    mounted() {
        this.hidePrompt()
    }
}

</script>