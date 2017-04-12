<template>
    <div class="create">
        <q-header :id="id"></q-header>
        <q-content :id="id"></q-content>
    </div>
</template>

<script type="text/ecmascript-6">
    import qHeader from './Q-Header/Q-Header.vue';
    import qContent from './Q-Content/Q-Content.vue';
    export default{
        name: 'create',
        props: ['ques'],
        data(){
            return {
                id: this.$route.params.id
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
