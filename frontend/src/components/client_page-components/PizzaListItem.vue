<template>
    <div>
        <li class="pb-2">
            <div :class="'accordion'+index" id="accordionExample">
                <div class="accordion-item bg-orange-50 border-gray-200">
                    <h2 class="accordion-header mb-0" :id="'heading'+index">
                    <button class="
                        accordion-button
                        collapsed
                        relative
                        flex
                        items-center
                        w-full
                        py-0
                        pr-5
                        text-base text-gray-800 text-left
                        bg-slate-300
                        [&:not(.collapsed)]:bg-slate-300
                        border-0
                        rounded-none
                        transition
                        focus:outline-none"
                        type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse'+index" aria-expanded="false"
                        :aria-controls="'collapse'+index" id="target-item">
                        <img :src="pizza.image" class="w-40 h-40 border-1 rounded-l-2xl border-sky-800"/>
                        <div class="flex-grow flex flex-col">
                            <h1 class="text-sky-800 font-bold text-xl pt-5 self-center">{{pizza.name}} {{pizza.price}} USD</h1>
                            <hr class="h-5 border-slate-300"/>
                            <p class="text-sky-800 font-bold text-lg p-5 pt-0 self-center">
                                This pizza contains the following ingredients: 
                                <ul class="flex flex-row gap-5 justify-center">
                                    <p class="text-emerald-700" v-for="ingredient in pizza.ingredients" :key="ingredient">{{ingredient}}</p>
                                </ul>
                            </p>
                        </div>
                    </button>
                    </h2>
                    <div :id="'collapse'+index" class="accordion-collapse collapse" :aria-labelledby="'heading'+index"
                    data-bs-parent="#accordionExample #shoppingCart">
                        <OptionsAndCartControl :currentPizza="pizza"/>
                    </div>
                </div>
            </div>
        </li>
    </div>
</template>

<script>
import OptionsAndCartControl from './OptionsAndCartControl.vue';

import { mapActions } from 'vuex';

export default {
    name: "PizzaListItem",
    props: ["pizza", "index",],
    components: { OptionsAndCartControl },
    methods: {
        ...mapActions(['closeOptionsAndCartControl']),
        expand() {
            if (this.pizza.isExpanded) {
                document.getElementById("collapse"+this.index).setAttribute("class", "");
                document.getElementById("collapse"+this.index).setAttribute("aria-expanded", true);
            }
        }
    },
    mounted() {
        this.expand()
    },
}

</script>