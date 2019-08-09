<template>
    <div>
        <!-- 这就是HomeHeader的组件，可以用小写字符表示如下 -->
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
    </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcons from './components/Icons.vue'
    export default {
        name:'Home',
        components:{
            HomeHeader,
            HomeSwiper,
            HomeIcons
        }
    }
</script>

<style>
</style>