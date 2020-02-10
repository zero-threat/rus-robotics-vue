<template>
    <div class="content-wrapper content-wrapper_vertical">
        <div class="cart">
            <div class="product-list">
                <div 
                    class="product product_horizontal" 
                    v-for="product in getCart" 
                    :key="product.id"
                >
                    <div class="delete" @click="removeFromCart(product.id)"></div>
                    <img :src="require(`../../assets/products/${product.img}`)">
                    <div class="product-inside">
                        <div class="product__description">
                            <h3>{{ product.title }}</h3>
                            <span>{{ product.description }}</span>
                        </div>
                        <div class="product__info">
                            <div class="product__footer">
                                <span>Цвет</span>
                                <div class="product__colors">
                                    <div
                                        class="color-circle"
                                        :id="`circle-${getChosenColor}`"
                                    ></div>
                                </div>
                            </div>
                            <h4>{{ product.cost }} &#8381;</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div class="order-checkout" v-if="getCartItemsCount > 0">
                <h3>Оформление заказа</h3>
                <span>
                    Кол-во
                    <p>{{ getCartItemsCount }}</p>
                </span>
                <span>
                    Доставка
                    <p>бесплатно</p>
                </span>
                <span>
                    Итого
                    <p>{{ productsTotal }} &#8381;</p>
                </span>
                <form action="submit">
                    <input type="text" placeholder="ФИО" v-model="userName">
                    <input type="text" placeholder="Номер телефона" v-model="userPhone">
                </form>
                <button @click="onSubmit()">Заказать</button>
            </div>
            <span class="warn" v-else>Для заказа выберите и добавьте товар в корзину.</span>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex'
    export default {
        data() {
            return {
                userName: '',
                userPhone: '',
                productsTotal: 0
            }
        },
        computed: {
            ...mapGetters(['getCart', 'getCartItemsCount', 'getChosenColor'])
        },
        mounted() {
            this.productsCostCounter()
        },
        methods: {
            ...mapMutations(['removeFromCart']),
            onSubmit() {
                this.userName && this.userPhone != '' ? setTimeout(() => this.submitted(), 5000) : alert('Необходимо заполнить все поля')
            },
            submitted() {
                alert('Ваша заявка принята')
                this.$store.state.cartProductsIds = []
            },
            productsCostCounter() {
                this.getCart.forEach(el => this.productsTotal += +el.cost)
            }
        }
    }
</script>

<style lang="scss">
    @import './cart-module.scss';
</style>