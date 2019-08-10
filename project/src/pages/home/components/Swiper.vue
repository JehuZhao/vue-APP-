<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="showSwiper">
            <swiper-slide v-for="item of list" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" />
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name:'HomeSwiper',
    props:{
        list:Array
    },
    data (){
        return{
            swiperOption:{
                //显示滚动点
                pagination:'.swiper-pagination',
                // 循环轮播
                loop:true
            }
        }
    },
    computed:{
        showSwiper(){
            return this.list.length
        }
    }
}
</script>

<style lang="stylus" scoped> 
    //对样式进行穿透，wrapper中所有子组件中只要出现swiper-pagination-bullet-active就可以进行更改样式，不受scoped影响
    //swiper-pagination-bullet-active不属于wrapper组件的
    .wrapper >>> .swiper-pagination-bullet-active
        background:#fff
    .wrapper
        overflow:hidden
        width:100%
        height:0
        padding-bottom:31.66%
        background:#eee
        .swiper-img
            width:100%
</style>
