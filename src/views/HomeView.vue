<template>
  <div class="home">
    <HeaderVue></HeaderVue>
    <FooterVue></FooterVue>
    <FotosVue></FotosVue>
    
  </div>
</template>

<script>
  import HeaderVue from '@/components/Header.vue';
  import FooterVue from '@/components/Footer.vue';
  import FotosVue from '@/components/Fotos.vue';


export default {
  name: 'HomeView',
  components: {
    HeaderVue,
    FooterVue,
    FotosVue,
   
  }
}
</script>
