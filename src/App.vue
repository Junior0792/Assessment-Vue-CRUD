<template>
  <div id="app">
    <HeaderComponente />
    <router-view></router-view>
    <FooterComponente />
  </div>

</template>

<script>
import './css/global.css'; 
import HeaderComponente from './components/HeaderComponente.vue';
import FooterComponente from './components/FooterComponente.vue';

export default {
    name: "App",
    components: { HeaderComponente, FooterComponente }
}
</script>




<style scoped>



</style>