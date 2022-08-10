<template>
    <div class="flex flex-row min-h-full">  
        <SideNavBar></SideNavBar>
        <router-view class="w-full"></router-view>
    </div>
</template>

<script>
import SideNavBar from './client_page-components/SideNavBar.vue';

export default {
    name: 'ClientPage',
    components: {
    SideNavBar
    }
}

</script>