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
  body {
    height: 100%;
    min-width:900px;
  }
  
  html { 
    position:relative; 
    min-height:100%;
  }
  
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

  button {
    display: block;
    height: 50px;
    background: #ffffff;
    border: solid 1px #000000;
    outline: none;
    cursor: pointer;
    font: unset;
    font-weight: 600;
    width: 100%;

    &:hover {
      background: #000000;
      color: #ffffff;
    }
  }

  .button_margin {
    margin-top: 23px
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
