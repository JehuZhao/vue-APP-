<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" />
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name:'HomeSwiper',
    data (){
        return{
            swiperOption:{
                //显示滚动点
                pagination:'.swiper-pagination',
                // 循环轮播
                loop:true
            },
            swiperList:[{
                id:'0001',
                imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/9e2844a063da32c591708053870e7eac.jpg_750x200_39fb08c6.jpg'
            },{
                id:'0002',
                imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/1ddfb386f5fe48912c8b1b5bfdc83047.jpg_750x200_c4301f8f.jpg'
            }]
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
        padding-bottom:26.66%
        background:#eee
        .swiper-img
            width:100%
</style>
