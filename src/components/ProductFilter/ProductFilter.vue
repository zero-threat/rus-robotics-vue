<template>
    <div class="catalog-filter">
        <div class="content-wrapper">
            <div class="catalog-filter__body">
                <h2>Выберите параметры</h2>
                <div class="catalog-filter__color-choose">
                    <span>Цвет</span>
                    <div class="color-circle" id="circle-black"></div>
                    <div class="color-circle" id="circle-white"></div>
                    <div class="color-circle" id="circle-blue"></div>
                    <div class="color-circle" id="circle-red"></div>
                </div>
                <div class="catalog-filter__price-choose">
                    <span>Цена (&#8381;)</span>
                    <input type="text" placeholder="от">
                    -
                    <input type="text" placeholder="до">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss">
    @import './product-filter.module.scss';
</style>