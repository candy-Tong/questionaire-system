<template>
    <div class="hello">
      Hello
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'hello',
        data () {
            return {
                theme1: 'light'
            };
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
    h1, h2
        font-weight: normal

    ul
        list-style-type: none
        padding: 0

    li
        display: inline-block
        margin: 0 10px

</style>
