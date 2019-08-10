<template>
    <div class="header">
        城市选择
        <router-link to="/">
            <div class="iconfont header-back">&#xe624;</div>
        </router-link>
    </div>
</template>

<script>
export default {
    name:'CityHeader'
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .header
        height: 0.907rem
        overflow:hidden
        line-height: 1rem
        text-align:center
        color:#fff
        background:$bgColor
        font-size:.32rem
        position relative
        .header-back
            position absolute
            width:.64rem
            top:0
            left:0
            font-size:.4rem
            text-align center
            color:#fff
            line-height: .9rem
</style>