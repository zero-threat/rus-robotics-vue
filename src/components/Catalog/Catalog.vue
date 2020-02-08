<template>
    <div class="catalog">
        <div class="content-wrapper">
            <div class="catalog__header">
                <h1>Стиль минимализм в интерьере</h1>
                <div class="catalog__spans">
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
            
        <!-- Filter component -->
        <ProductFilter />

        <!-- Products Conditional Rendering//Условная отрисовка продуктов -->
        <div class="content-wrapper content-wrapper_vertical">
            <div class="products-grid">
                <div class="products-grid__product" v-for="product in products" :key="product.id">
                    <img :src="require(`../../assets/products/${product.img}`)">
                    <div class="products-grid__description">
                        <h3>{{ product.title }}</h3>
                        <span>{{ product.description }}</span>
                    </div>
                    <div class="products-grid__info">
                        <div class="products-grid__colors">
                            <span>Цвета</span>
                            <!-- Отрисовка каждого цвета в массиве цветов каждого продукта -->
                            <!-- Rendering every color in every product's colors array -->
                            <div v-for="color in product.colors" :key="color" class="color-circle" :id="`circle-${color}`"></div>
                        </div>
                        <h4>{{ product.cost }} &#8381;</h4>
                        <button class="catalog__button">В корзину</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ProductFilter from '../ProductFilter/ProductFilter'

    export default {
        data() {
            return {
                products: [
                    {
                        id: '001',
                        img: 'item__001.jpg',
                        title: 'Обеденный стол Renno 100 см',
                        description: 'Обеденный стол Renno от Storeforhome стильное решение для вашего пространства.',
                        colors: ['black', 'white'],
                        cost: 24500
                    },
                    {
                        id: '002',
                        img: 'item__002.jpg',
                        title: 'Стул Elbert голубая ткань',
                        description: 'С белой тканью тоже есть.',
                        colors: ['blue', 'white'],
                        cost: 9990
                    }
                ]
            }
        },
        components: { ProductFilter }
    }
</script>

<style lang="scss">
    @import './catalog-module.scss';
</style>