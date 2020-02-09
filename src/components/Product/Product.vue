<template>
    <div class="products-grid__product">
        <img :src="require(`../../assets/products/${product.img}`)">
        <div class="products-grid__description">
            <h3>{{ product.title }}</h3>
            <span>{{ product.description }}</span>
        </div>
        <div class="products-grid__info">
            <div class="products-grid__footer">
                <span>Цвета</span>
                <div class="products-grid__colors">
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
            <button class="catalog__button">В корзину</button>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            product: Object
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