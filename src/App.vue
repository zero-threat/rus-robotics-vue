<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
  import Header from './components/Header/Header'
  export default {
    components: { Header }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Montserrat', sans-serif;
  }
</style>
