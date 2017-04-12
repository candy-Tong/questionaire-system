<template>
    <div class="Q-Header">
        <span class="Q-name">{{ques.title}}</span>
        <div class="publish-btn">
            <span class="icon-play3"></span>
            <router-link to="/my-Ques" class="publish" :q-content="ques.qContent">发布问卷</router-link>
        </div>
        <router-link :to="{name:'Preview',params:{id:this.id}}" class="preview">预览</router-link>
        <span class="icon-eye"></span>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        props: ['id'],
        data(){
            return {
                ques: {}
            };
        },
        created(){
            this.ques = JSON.parse(localStorage.getItem('quesList'))[this.id];
            console.log(this.ques);
        }
    };

</script>

<style lang="stylus" rel="stylesheet/stylus">
    .Q-Header
        line-height 70px
        border-bottom 1px solid #d7dde4
        overflow hidden
        .Q-name
            float left
            font-size 23px
            margin-left 25px
            line-height 70px
            color #464c5b
        .publish-btn
            float right
            font-size 20px
            margin 15px 15px 15px 0
            line-height 40px
            background-color #3399ff
            border 1px solid #3399ff
            border-radius 4px
            color #f5f7f9
            padding 0 10px
            .publish
                color #f5f7f9

        .preview
            float right
            font-size 16px
            margin-right 30px
            line-height 70px
        .icon-eye
            float right
            line-height 70px
            margin-right 3px
            opacity 0.5

</style>
