<template>
<div>
    <Header></Header>
    <Search></Search>
    <Footer></Footer>
</div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Search from '@/components/Search.vue';

export default{
    name: "search-vue",
    components: { Header, Footer, Search }
}
</script>