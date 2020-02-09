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
  .logo {
    width: 15%;
    
    a {
      display: flex;
      align-items: center;
    }
  }

  .content-wrapper {
    max-width: 1056px;
    margin: 0 auto;

    &_stretch {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &_vertical {
      margin: 110px auto;
    }
  }

  .content-box {
    height: 390px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      text-align: start;
      width: 24%;
      font-size: 35px;
      line-height: 40px;
    }

    h4 {
      color: #ccc;
      font-weight: 400;
    }
    
    &__spans {
      width: 67%;
      height: 185px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    &__columns {
      display: flex;
      justify-content: space-between;
    }

    &__column {
      max-width: 40%;
    }
  }
</style>
