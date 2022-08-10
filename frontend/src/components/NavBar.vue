<template>
    <div class="bg-slate-300 h-16 flex flex-row w-screen items-center">
        <router-link to="/pizza/" class="ml-10 text-zinc-700 font-semibold">Pizza App</router-link>
        <div class="flex-1"></div>
        <div class="flex gap-5">
            <router-link to="/pizza/">
                <button class="bg-slate-500 hover:bg-slate-400 text-white font-bold py-2 px-4 rounded-md">
                    Home
                </button>
            </router-link>
            <router-link to="/admin/menu-list/">
                <button class="mr-10 bg-slate-500 hover:bg-slate-400 text-white font-bold py-2 px-4 rounded-md">
                    Admin
                </button>
            </router-link>
        </div>
    </div>
</template>

<script>

export default {
    name: 'NavBar',
    components: {
        
    }
}

</script>