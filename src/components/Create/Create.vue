<template>
    <div class="create">

        <q-header :title="this.title"></q-header>
        <q-content :title="this.title"></q-content>
    </div>
</template>

<script type="text/ecmascript-6">
    import qHeader from './Q-Header/Q-Header.vue';
    import qContent from './Q-Content/Q-Content.vue';
    export default{
        name: 'create',
        data(){
            return {
                title: '问卷标题'
            };
        },
        components: {
            'q-header': qHeader,
            'q-content': qContent
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
