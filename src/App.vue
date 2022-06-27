<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Body from './components/Confirm.vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
export default {
  components: {
    Header, Footer, Body
  }
}
</script>

<template>
  <div>
    <Header/>
    <router-view></router-view>
  </div>
</template>

<style>

</style>
