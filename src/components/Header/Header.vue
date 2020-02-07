<template>
    <header class="header header_stretched">
        <img src="../../assets/sitelogo.png" alt="logo">
        <nav class="header-nav header-nav_centered">
            <router-link to="/">Каталог</router-link>
            
        </nav>
        <div class="header-cart header-cart_right">
            <img src="../../assets/cart.png" alt="Корзина">
            <div class="header-cart-counter">
                2
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    @import './header-module.scss'
</style>