<template>
    <div id="app">
        <!--<router-link to="/">Go Hello1</router-link>-->
        <!--<router-link to="/Create">Go Create</router-link>-->
        <v-header></v-header>
        <router-view></router-view>
    </div>
</template>

<script type="text/ecmascript-6">
    import Vue from 'vue';
    import Header from './components/Header/Header.vue';
    Vue.component('v-header', Header);
    export default {
        name: 'app'
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    /*#app*/
        /*font-family: 'Avenir', Helvetica, Arial, sans-serif*/
        /*-webkit-font-smoothing: antialiased*/
        /*-moz-osx-font-smoothing: grayscale*/
        /*text-align: center*/
        /*color: #2c3e50*/

</style>
