<template>
    <div class="w-28 bg-slate-500 flex flex-col gap-16 hover:w-72 duration-200 overflow-hidden"> 
        <router-link to="/admin/menu-list" class="flex flex-row w-12 ml-10 mt-16">
            <img class="w-8" src='../../assets/list-white.png'/>
            <h2 class="text-white font-semibold text-lg ml-16 mt-3">Menu</h2>
        </router-link>
        <router-link to="/admin/add-form" class="flex flex-row w-12 ml-10">
            <img class="w-8 h-8" src='../../assets/plus-white.png'/>
            <h2 class="text-white font-semibold text-lg ml-[70px] mt-3">Add</h2>
        </router-link>
    </div>
</template>

<script>

    export default {
    name: "SideNavBarAdmin",
    data() {
        return {
            
        };
    },
    computed: {
        
    },
}

</script>