<template>
    <div class="create">
        <q-header :id="id" :ques="ques"></q-header>
        <q-content :id="id" :ques="ques"></q-content>
    </div>
</template>

<script type="text/ecmascript-6">
    import qHeader from './Q-Header/Q-Header.vue';
    import qContent from './Q-Content/Q-Content.vue';
    export default{
        name: 'create',
        data(){
            return {
                id: this.$route.params.id,
                ques: {}
            };
        },
        components: {
            'q-header': qHeader,
            'q-content': qContent
        },
        created(){
            this.ques = JSON.parse(localStorage.getItem('quesList'))[this.id];
        }
    };

</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
