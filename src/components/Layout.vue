<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';

export default {
  name: 'Layout',
  components: {
    Footer,
    Header
  }
};
</script>

<style></style>
