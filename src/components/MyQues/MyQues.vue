<template>
    <div class="my-ques">
        <router-link to="/create" class="item">
            <div class="wrapper"></div>
            <div class="content">
                <div class="a">
                    <span class="icon-circle-plus"></span>
                    <span class="new">新建</span>
                </div>
            </div>
        </router-link>

        <router-link :to.sync="{name:'Edit',params:{ques:item,id:item.id}}" class="item"
                     v-for="(item,index) in this.quesList"
                     :key="item.id">
            <div class="wrapper"></div>
            <div class="content">
                <span class="new">{{item.title}}</span>
            </div>
        </router-link>
    </div>


</template>

<script type="text/ecmascript-6">
    export default{
        data(){
            return {
                quesList: []
            };
        },
        created(){
//            console.log(this.quesList);
            // 本地测试使用，本地缓存为空时使用mock数据
            this.quesList = JSON.parse(localStorage.getItem('quesList'));
            console.log(this.quesList);
            if (!this.quesList.length) {
                this.$http.get('/mock/data.json').then(response => {
                    response = response.body;
                    this.quesList = response.quesList;
                    localStorage.setItem('quesList', JSON.stringify(this.quesList));
                });
            }
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .my-ques
        .item
            position relative
            display inline-block
            width 23%
            border 1px solid #e3e8ee
            background-color #f5f7f9
            margin 10px 1%
            line-height 100%
            .wrapper
                width 100%
                display inline-block
                padding-bottom 56.25%
            .content
                position absolute
                width 100%
                height 100%
                top 0
                left 0


</style>
