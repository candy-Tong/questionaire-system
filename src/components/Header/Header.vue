<template>
    <div class="header">

        <span class="icon-book"></span>
        <span class="system-name">我的问卷</span>
        <router-link to="/my-Ques" class="my-Qus">我的问卷</router-link>
        <router-link to="/create/type" class="create-Qus">创建问卷</router-link>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{};
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/icon.styl"

    .header
        position relative
        line-height 70px
        overflow: hidden
        border-bottom 1px solid #d7dde4
        color #464c5b
        .icon-book
            float left
            line-height 70px
            margin-left 10px
            font-size 35px
        .system-name
            float left
            line-height 70px
            margin-left 5px
            font-size 35px
        .my-Qus
            float left
            margin 15px 0 15px 20px
            font-size 23px
            line-height 40px
            color #464c5b
        .create-Qus
            float left
            margin 15px 0 15px 20px
            font-size 23px
            line-height 40px
            color #464c5b
        .router-link-active
            color #2f8cdb
            border-bottom 2px solid #479de6

</style>
