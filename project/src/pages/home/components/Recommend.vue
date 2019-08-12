<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <router-link
                tag="li"
                class="item border-bottom" 
                v-for="item of list" 
                :key="item.id"
                :to=" '/detail/'+item.id "
            >
                <img class="item-img" :src="item.imgUrl"/>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}&nbsp;&nbsp;{{item.assess}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name:'HomeRecommend',
    props:{
        list:Array
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
                padding-top:.1rem
                line-height:.4rem
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