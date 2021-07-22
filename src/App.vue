<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<style lang="scss">
  #app {
    overflow: hidden;
  }
</style>
<script>
  import Header from './components/Header/Header'
  import Footer from './components/Footer'
  export default {
    components: {
      Header,
      Footer
    }
  }
</script>
