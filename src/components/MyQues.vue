<template>
    <div class="my-ques">
        <router-link to="/create/type" class="item">
            <div class="wrapper"></div>
            <div class="content">
                <div>
                    <span class="icon-circle-plus"></span>
                    <span class="new">新建</span>
                </div>
            </div>
        </router-link>

        <router-link :to="{name:'Do',params:{id:item.id}}" class="item"
                     v-for="(item,index) in this.quesList"
                     :key="item.id"
        v-if="item.publish">
            <div class="wrapper"></div>
            <div class="content">
                <span class="new">{{item.title}}</span>
                <span>已发布</span>
            </div>
        </router-link>
        <router-link :to="{name:'Edit',params:{id:item.id}}" class="item"
                     v-for="(item,index) in this.quesList"
                     :key="item.id"
                     v-if="!item.publish">
            <div class="wrapper"></div>
            <div class="content">
                <span class="new">{{item.title}}</span>
                <span>未发布</span>
            </div>
        </router-link>
    </div>


</template>

<script type="text/ecmascript-6">
    export default{
        data(){
            return {
                quesList: [],
                QType: [],
                type: []
            };
        },
        created(){
//            console.log(this.quesList);
            // 本地测试使用，本地缓存为空时使用mock数据
            this.quesList = JSON.parse(localStorage.getItem('quesList')) ? JSON.parse(localStorage.getItem('quesList')) : [];
            this.QType = JSON.parse(localStorage.getItem('QType')) ? JSON.parse(localStorage.getItem('QType')) : [];
            this.type = JSON.parse(localStorage.getItem('type')) ? JSON.parse(localStorage.getItem('type')) : [];
            if (!this.quesList.length || !this.QType.length) {
                this.$http.get('/mock/data.json').then(response => {
                    response = response.body;
                    this.quesList = response.quesList;
                    this.QType = response.QType;
                    localStorage.setItem('quesList', JSON.stringify(this.quesList));
                    localStorage.setItem('QType', JSON.stringify(this.QType));
                    console.log(this.QType);
                });
            }
            if (!this.type.length) {
                this.$http.get('/mock/data.json').then(response => {
                    response = response.body;
                    this.type = response.type;
                    localStorage.setItem('type', JSON.stringify(this.type));
                    console.log(this.type);
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
            margin 20px 0 0 1%
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
