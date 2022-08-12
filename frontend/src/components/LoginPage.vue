<template>
    <div class="h-full w-full flex justify-center items-center bg-slate-700">
        <div class="-translate-y-20 flex flex-col items-center gap-10 bg-slate-500 p-20 rounded-3xl text-white text-lg font-semibold">
            <h1>Login</h1>
            <form @submit.prevent="log_in" class="flex flex-col items-center gap-10">
                <div class="form-group flex flex-row gap-7">
                    <label for="username">Username</label>
                    <input type="text" class="form-control rounded-xl text-black" id="username" v-model="username"/>
                </div>
                <div class="form-group flex flex-row gap-7">
                    <label for="password">Password</label>
                    <input type="password" class="form-control rounded-xl text-black" id="password" v-model="password">
                </div>
                <button type="submit" class="btn btn-primary bg-slate-500 text-white font-semibold w-32 py-3 flex justify-center self-center rounded-lg border-2 border-white hover:bg-white hover:text-slate-500 duration-200">Login</button>
            </form>
        </div>
    </div>
    
</template>

<script>

import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'LoginPage',
    data() {
        return {
            username: null,
            password: null,
        }
    },
    computed: {
        ...mapGetters(['getUser'])
    },
    methods: {
        ...mapActions(['login']),
        log_in() {
            this.login({
                username: this.username,
                password: this.password
            })
            this.$router.push('/')
        }
    }
}

</script>