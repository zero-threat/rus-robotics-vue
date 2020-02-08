<template>
    <footer class="footer">
        <div class="content-wrapper content-wrapper_stretch">
            <div class="logo">
                <router-link to="/">
                    <img src="../../assets/sitelogo.png" alt="logo">
                    <span>Store name</span>
                </router-link>
            </div>
            <div class="footer__icons">
                <a href="#"><i class="fab fa-facebook-square"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss">
    @import './footer-module.scss';
</style>