<template>
    <div class="flex h-full">  
        <SideNavBarAdmin class="flex flex-col"></SideNavBarAdmin>
        <router-view class="w-full h-full"></router-view>
    </div>
</template>

<script>
import SideNavBarAdmin from "./admin_page-components/SideNavBarAdmin.vue";

export default {
    name: 'AdminPage',
    components: {
    SideNavBarAdmin
    },
}

</script>