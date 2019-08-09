<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl"/>
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}&nbsp;&nbsp;{{item.assess}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'HomeWeekend',
    data(){
        return{
            recommendList:[{
                id:'0001',
                imgUrl:'http://img1.qunarzz.com/sight/source/1507/d9/2ddc7652fdba16.jpg_r_640x214_5e62f1a3.jpg',
                title:'深圳周边游',
                desc:'远离城市拥堵，去周边开启清新假期吧。'
            },{
                id:'0002',
                imgUrl:'http://img1.qunarzz.com/sight/source/1505/4a/ac007012d54bd4.jpg_r_640x214_eefa6ade.jpg',
                title:'惠州打卡圣地',
                desc:'毓秀山水，继续着四季轮回的交替'
            },{
                id:'0003',
                imgUrl:'http://img1.qunarzz.com/sight/source/1812/40/678d1e6eb29766.jpg_r_640x214_750d6d68.jpg',
                title:'惠州亲子长隆',
                desc:'世界欢乐汇聚长隆，这里拥有多个大型游乐设备和精彩的演出，和小伙伴们一起感受刺激的体验'
            }]
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
    .title
        line-height:.8rem
        background:#eee
        text-indent:.2rem
    .item-img-wrapper
        overflow:hidden
        height:0
        padding-bottom:37.8%
    .item-img
        width:100%
    .item-info
        padding:.1rem
        .item-title
            line-height:.48rem
            font-size:.32rem
            ellipsis()
        .item-desc
            margin-top:.02rem
            line-height:.6rem
            color:#ccc
            ellipsis()
</style>