<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <img class="item-img" :src="item.imgUrl"/>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}&nbsp;&nbsp;{{item.assess}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'HomeRecommend',
    data(){
        return{
            recommendList:[{
                id:'0001',
                imgUrl:'http://img1.qunarzz.com/sight/p0/1906/f7/f74f725a5da59bcea3.img.jpg_200x200_23304e5f.jpg',
                title:'红花湖水上乐园',
                desc:'⭐⭐⭐⭐⭐',
                assess:'45条评价'
            },{
                id:'0002',
                imgUrl:'http://img1.qunarzz.com/sight/p0/1603/b1/b19c46c888b4b6e790.water.jpg_200x200_522561eb.jpg',
                title:'双月湾',
                desc:'⭐⭐⭐⭐⭐',
                assess:'1245条评价'
            },{
                id:'0003',
                imgUrl:'http://img1.qunarzz.com/sight/p0/1711/3a/3a5b9ca51e954a76a3.img.jpg_110x110_c9a72e59.jpg',
                title:'白盆湖温泉度假村',
                desc:'⭐⭐⭐⭐⭐',
                assess:'44条评价'
            }]
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
    .title
        margin-top:.2rem
        line-height:.8rem
        background:#eee
        text-indent:.2rem
    .item
        overflow:hidden
        display:flex
        height:1.9rem
        .item-img
            width:1.7rem
            height:1.7rem
            padding 0.1rem
        .item-info
            flex:1
            padding:.1rem
            min-width:0
            .item-title
                line-height:.54rem
                font-size:.32rem
                ellipsis()
            .item-desc
                margin-top:.05rem
                line-height:.6rem
                color:#ccc
                ellipsis()
            .item-button
                background:#ff8c12
                margin-top:.1rem
                padding:0 .1rem
                border-radius: .06rem
</style>