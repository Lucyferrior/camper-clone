<template>
  <div class="home">
    <HeaderVue>
      
    </HeaderVue>
    <FooterVue></FooterVue>
  </div>
</template>

<script>
  import HeaderVue from '@/components/Header.vue';
  import FooterVue from '@/components/Footer.vue';


export default {
  name: 'HomeView',
  components: {
    HeaderVue,
    FooterVue
   
  }
}
</script>
