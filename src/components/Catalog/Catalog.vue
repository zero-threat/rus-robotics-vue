<template>
    <div class="catalog">
        <div class="content-wrapper">
            <div class="content-box">
                <h1>Стиль минимализм в интерьере</h1>
                <div class="content-box__spans">
                    <span>
                        Стиль минимализм в интерьере – это дизайн, которому характерны сдержанность и строгость в оформлении. 
                        Главным образом она достигается посредством использования функциональных предметов интерьера, 
                        геометричностью форм и сочетанием двух базовых цветов.
                    </span>
                    <span>
                        Крайне важно при оформлении помещения грамотно разделять пространство. 
                        Для создания интерьера широко используются материалы технического назначения. 
                        Они, как правило, компактные, черного или серого цветов и имеют строгую геометрическую форму.
                    </span>
                </div>
            </div>
        </div>
        <ProductFilter />
        <div class="content-wrapper content-wrapper_vertical">
            <div class="products-grid">
                <Product 
                    v-for="product in getFilteredProducts" 
                    :key="product.id" 
                    :product="product"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import ProductFilter from '../ProductFilter/ProductFilter';
    import Product from '../Product/Product';
    import { mapGetters } from 'vuex';
    export default {
        components: { 
            ProductFilter,
            Product
        },
        computed: {
            ...mapGetters(['getFilteredProducts'])
        }
    }
</script>

<style lang="scss">
    @import './catalog-module.scss';
</style>