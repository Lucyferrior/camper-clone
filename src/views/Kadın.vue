<template>
    <div id="women">

        <ProductsVue />
        <ProductsVue />
        <ProductsVue />
        <ProductsVue />
        <ProductsVue />
        <ProductsVue />

    </div>
</template>
<style>
#women {
    display: flex;
}
</style>
<script>
import ProductsVue from '@/components/Products.vue';
export default {
    data() {
        return {
            items: "",
        };
    },
    name: "women-vue",
    components: {
        ProductsVue
    }
}
</script>