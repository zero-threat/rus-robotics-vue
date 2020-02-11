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
                <router-link 
                    to="/" 
                    :class="this.$route.path == '/' ? 'underline' : null"
                >Каталог</router-link>
                <router-link 
                    to="/about"
                    :class="this.$route.path == '/about' ? 'underline' : null"
                >О нас</router-link>
            </nav>
            <div class="header-cart">
                <router-link to="/cart">
                    <img src="../../assets/cart.png" alt="Корзина">
                    <span :class="this.$route.path == '/cart' ? 'underline' : null">Корзина</span>
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