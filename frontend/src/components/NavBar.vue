<template>
    <div class="bg-slate-300 h-16 flex flex-row w-screen items-center">
        <router-link to="/" class="ml-10 text-zinc-700 font-semibold">Pizza App</router-link>
        <div class="flex-1"></div>
        <div v-if="this.getUser.password !== null" class="flex gap-5 mr-10">
            <router-link to="/pizza/">
                <button @click.prevent="logUserOut()" class="bg-slate-500 hover:bg-slate-400 text-white font-bold py-2 px-4 rounded-md">
                    Logout
                </button>
            </router-link>
        </div>
    </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'NavBar',
    components: {
        
    },
    methods: {
        ...mapActions(['logout']),
        logUserOut() {
            this.logout()
        }
    },
    computed: {
        ...mapGetters(['getUser'])
    }
}

</script>