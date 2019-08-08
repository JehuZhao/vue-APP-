<template>
    <div>
        <!-- 这就是HomeHeader的组件，可以用小写字符表示如下 -->
        <home-header></home-header>
    </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
    export default {
        name:'Home',
        components:{
            HomeHeader
        }
    }
</script>

<style>
</style>