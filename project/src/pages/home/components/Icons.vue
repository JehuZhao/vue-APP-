<template>
    <div class="icons">
        <swiper>
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div 
                    class="icon" 
                    v-for="item of page" 
                    :key="item.id"
                >
                    <div class="icon-img">
                        <img class="icon-img-content" :src='item.imgUrl'/>
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    name:'HomeIcons',
    data() {
        return {
            iconList:[{
                id:'0001',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                desc:'热门景点'
            },{
                id:'0002',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
                desc:'惠州必游'
            },{
                id:'0003',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/27/dac2bcf9added702.png',
                desc:'海滨海岛'
            },{
                id:'0004',
                imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/e40f084b7be74a288e77be40b2b38720.png',
                desc:'地派温泉'
            },{
                id:'0005',
                imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/e40f084b7be74a288e77be40b2b38720.png',
                desc:'那里花开',
            },{
                id:'0006',
                imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/bda58ffc3016edad84e656e8a94b0321.png',
                desc:'广州融创'
            },{
                id:'0007',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/75/eca3ce656c886502.png',
                desc:'漂流'
            },{
                id:'0008',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
                desc:'海洋馆'
            },{
                id:'0009',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png',
                desc:'玩转长隆'
            }]
        }
    },
    computed: {
        pages(){
            const pages =[]
            this.iconList.forEach((item,index)=>{
                const page =Math.floor(index/8)
                if(!pages[page]){
                    pages[page]=[]
                }
                pages[page].push(item)
            })
            return pages
        }
    },
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    @import '~styles/mixins.styl'
    // 没写之前.swiper-container的高度没有icon一样高 swiper-container自带overflow hidden
    .icons >>>.swiper-container
        height:0
        padding-bottom:50%
    .icon
        overflow:hidden
        width:25%
        height:0
        float:left
        padding-bottom:25%
        position:relative
        .icon-img
            position:absolute
            top:0
            left:0
            right:0
            bottom:.44rem
            box-sizing:border-box
            padding:.1rem
            .icon-img-content
                display:block
                margin:0 auto 
                height:100%
        .icon-desc
            position:absolute
            left:0
            right:0
            bottom:0
            line-height:.44rem
            height:.44rem
            text-align:center
            color: $darkTextColor
            ellipsis()
</style>