<template>
  <div id="app">
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
  import Header from './components/Header/Header'
  import Footer from './components/Footer/Footer'
  export default {
    components: { 
      Header,
      Footer
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Montserrat', sans-serif;
  }
</style>
