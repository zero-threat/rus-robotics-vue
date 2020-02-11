<template>
    <div class="product">
        <img :src="require(`../../assets/products/${product.img}`)">
        <div class="product__description">
            <h3>{{ product.title }}</h3>
            <span>{{ product.description }}</span>
        </div>
        <div class="product__info">
            <div class="product__footer">
                <span>Цвета</span>
                <div class="product__colors">
                    <!-- Отрисовка каждого цвета в массиве цветов каждого продукта -->
                    <!-- Rendering every color in every product's colors array -->
                    <div
                        class="color-circle"
                        v-for="color in colors"
                        :key="color"
                        :id="`circle-${color}`"
                    ></div>
                </div>
            </div>
            <h4>{{ product.cost }} &#8381;</h4>
            <button class="button_margin" @click="addToCart(product.id)">В корзину</button>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
    export default {
        props: {
            product: Object
        },
        methods: {
            ...mapMutations(['addToCart'])
        },
        computed: {
            // if colors from props are'nt array, making them array
            // 
            // Если цвета из props не массив, превращаем их в массив
            colors() {
                if (!Array.isArray(this.product.colors)) {
                    const colors = []
                    colors.push(this.product.colors)
                    return colors
                } else {
                    return this.product.colors
                }
            }
        }
    }
</script>

<style lang="scss">
    @import '../Catalog/catalog-module.scss';
</style>