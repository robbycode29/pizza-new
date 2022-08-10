<template>
    <div class="bg-slate-700 flex flex-col gap-40 justify-center">
        <h1 class="text-white font-semibold text-2xl mt-56 -translate-y-52">Thank you for shopping with us!</h1>
        <router-link to="/orders" class="bg-slate-700 text-white w-36 h-10 mb-10 -translate-y-52 flex justify-center self-center rounded-lg border-2 border-white hover:bg-white hover:text-slate-500 duration-200">
            <h2 class="font-semibold self-center">See orders</h2>
        </router-link>
    </div>
</template>

<script>

export default {
    name: 'ThankyouPage',
}

</script>