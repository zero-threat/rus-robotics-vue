<template>
    <div class="catalog-filter">
        <div class="content-wrapper">
            <div class="catalog-filter__body">
                <h2>Выберите параметры</h2>
                <div class="catalog-filter__color-choose">
                    <span>Цвет</span>
                    <div 
                        class="color-circle"
                        :class="{ 'color-circle_active': isActive.black }"
                        id="circle-black" 
                        @click="onColorClick('black')"
                    ></div>
                    <div 
                        class="color-circle"
                        id="circle-white" 
                        @click="onColorClick('white')"
                        :class="{ 'color-circle_active': isActive.white }"
                    ></div>
                    <div 
                        class="color-circle" 
                        id="circle-blue" 
                        @click="onColorClick('blue')"
                        :class="{ 'color-circle_active': isActive.blue }"    
                    ></div>
                    <div 
                        class="color-circle" 
                        id="circle-red" 
                        @click="onColorClick('red')"
                        :class="{ 'color-circle_active': isActive.red }"
                    ></div>
                </div>
                <div class="catalog-filter__price-choose">
                    <span>Цена (&#8381;)</span>
                    <input type="number" placeholder="от" v-model="from">
                    -
                    <input type="number" placeholder="до" v-model="to">
                    {{ costRange }}
                </div>
                <span
                    class="warn warn_on-filter" 
                    v-if="(from.length != 0 && to.length != 0) && +from > +to"
                >Товар не найден</span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
    export default {
        data() {
            return {
                selectedColors: [],
                from: '',
                to: '',
                isActive: {
                    'black': false,
                    'white': false,
                    'blue': false,
                    'red': false,
                }
            }
        },
        methods: {
            ...mapMutations(['filterByColor', 'filterByCost']),
            updateColors(color) {
                if (this.selectedColors.includes(color)) {
                    const colorIdx = this.selectedColors.indexOf(color);
                    this.selectedColors.splice(colorIdx, 1)
                    this.isActive[color] = false
                } else {
                    this.selectedColors = [...this.selectedColors, color]
                    this.isActive[color] = true
                }
            },
            onColorClick(color) {
                this.updateColors(color)
                this.filterByColor(this.selectedColors.toString())
            }
        },
        computed: {
            costRange() {
                return this.filterByCost({
                    from: +this.from,
                    to: +this.to
                })
            }
        }
    }
</script>

<style lang="scss">
    @import './product-filter.module.scss';
</style>