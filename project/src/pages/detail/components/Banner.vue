<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1605/c7/c7dd06252f0ff0af90.water.jpg_600x330_b281b9d9.jpg"/>
            <div class="banner-info">
                <div class="banner-title">南海洋水母王国</div>
                <div class="banner-number"><span class="iconfont banner-icon">&#xe692;</span>2</div>
            </div>
        </div>
        <common-gallary :imgs='imgs' v-show="showGallary" @close="handleGallaryClose"></common-gallary>
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
    name:'DetailBanner',
    data(){
        return{
            showGallary:false,
            imgs:['http://img1.qunarzz.com/sight/p0/1605/92/92fb6b368531083c90.water.jpg_r_800x800_2e26b2c2.jpg',
                'http://img1.qunarzz.com/sight/p0/1605/e3/e3d00d0a72b8800f90.water.jpg_r_800x800_e2304331.jpg']
        }
    },
    methods:{
        handleBannerClick(){
            this.showGallary=true
        },
        handleGallaryClose(){
            this.showGallary=false
        }
    },
    components:{
        CommonGallary
    }
}
</script>

<style lang="stylus" scoped>
    .banner
        overflow:hidden
        height:0
        padding-bottom:55%
        position relative
        .banner-img
            width:100%
        .banner-info
            color:#fff
            display:flex
            position:absolute
            left:0
            right:0
            bottom:0
            line-height:.6rem
            background-image: linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,0.8))
            .banner-title
                flex:1
                font-size:.32rem
                padding:0 .2rem
            .banner-number
                height:.32rem
                line-height:.32rem
                margin-top:.14rem
                padding:0 0.4rem
                border-radius: .2rem
                background:rgba(0,0,0,0.8)
                font-size:.24rem
                .banner-icon
                    font-size:.26rem
                    padding-right:.1rem
</style>