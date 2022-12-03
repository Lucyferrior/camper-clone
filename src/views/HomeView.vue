<template>
  <div class="home">
    <HeaderVue></HeaderVue>
    <FooterVue></FooterVue>
    <FotosVue></FotosVue>
    <DropdownVue></DropdownVue>
  </div>
</template>

<script>
  import HeaderVue from '@/components/Header.vue';
  import FooterVue from '@/components/Footer.vue';
  import FotosVue from '@/components/Fotos.vue';
  import DropdownVue from '@/components/Dropdown.vue';

export default {
  name: 'HomeView',
  components: {
    HeaderVue,
    FooterVue,
    FotosVue,
    DropdownVue,
  }
}
</script>
