<template>
    <header class="header">
        <div class="content-wrapper content-wrapper_stretch">
            <div class="logo">
                <router-link to="/">
                    <img src="../../assets/sitelogo.png" alt="logo">
                    <span>Store name</span>
                </router-link>
            </div>
            <nav class="header__nav">
                <router-link to="/">Каталог</router-link>
                <router-link to="/about">О нас</router-link>
            </nav>
            <div class="header-cart">
                <router-link to="/cart">
                    <img src="../../assets/cart.png" alt="Корзина">
                    <span>Корзина</span>
                </router-link>
                <div class="header-cart__counter" v-if="getCartItemsCount > 0">
                    {{ getCartItemsCount }}
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { mapGetters } from 'vuex'
    export default {
        computed: {
            ...mapGetters(['getCartItemsCount'])
        }
    }
</script>

<style lang="scss" scoped>
    @import './header-module.scss';
</style>