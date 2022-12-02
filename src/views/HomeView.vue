<template>
  <div class="home">
    <HeaderVue></HeaderVue>
    <FooterVue></FooterVue>
    <FotosVue></FotosVue>
    <SearchVue></SearchVue>
  </div>
</template>

<script>
  import HeaderVue from '@/components/Header.vue';
  import FooterVue from '@/components/Footer.vue';
  import FotosVue from '@/components/Fotos.vue';
  import SearchVue from '@/components/Search.vue';


export default {
  name: 'HomeView',
  components: {
    HeaderVue,
    FooterVue,
    FotosVue,
    SearchVue
   
  }
}
</script>
