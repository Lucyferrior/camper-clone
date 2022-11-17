<template>
    <div>
        <HeaderVue/>
        <div id="product_container">
            <ProductsVue v-for="item in products" v-bind:key="item.id" :product="item" />
        </div>
    </div>
</template>
<style>
#product_container {
    display: flex;
    row-gap: 0;
    overflow: hidden;
    flex-flow: row wrap;
}
</style>
<script>
import ProductsVue from '@/components/Products.vue';
import HeaderVue from '@/components/Header.vue';
export default {
    name: "product-vue",
    data() {
        return {
            products: [
                {
                    id: 1,
                    title: "Twins",
                    price: 2499,
                    src_link_default: "https://cloud.camper.com/is/image/JGxvY2F0b3IzJA==/K100743-025_LF.jpg",
                    src_link_second: "https://cloud.camper.com/is/image/JGxvY2F0b3IzJA==/K100743-025_CF.jpg"
                },
                {
                    id: 2,
                    title: "Runner K21",
                    price: 2499,
                    src_link_default: "https://cloud.camper.com/is/image/JGxvY2F0b3IzJA==/K100743-006_LF.jpg",
                    src_link_second: "https://cloud.camper.com/is/image/JGxvY2F0b3IzJA==/K100743-006_CF.jpg"
                },
                {
                    id: 3,
                    title: "Runner",
                    price: 2499,
                    src_link_default: "https://cloud.camper.com/is/image/JGxvY2F0b3IzJA==/K100226-052_LF.jpg",
                    src_link_second: "https://cloud.camper.com/is/image/JGxvY2F0b3IzJA==/K100226-052_CF.jpg"
                },
            ]
        };
    },
    components: {
        ProductsVue,
        HeaderVue
    }
}
</script>