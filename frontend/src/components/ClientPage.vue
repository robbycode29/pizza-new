<template>
    <div class="flex flex-row min-h-full">  
        <SideNavBar></SideNavBar>
        <router-view class="w-full" name="client"></router-view>
    </div>
</template>

<script>
import SideNavBar from './client_page-components/SideNavBar.vue';
import { mapGetters } from 'vuex';

export default {
    name: 'ClientPage',
    components: {
    SideNavBar
    },
    computed: {
        ...mapGetters(['getUser'])
    }
}

</script>