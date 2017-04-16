<template>
    <div class="type">
        <div v-for="item in this.type" class="wrapper">
            <div class="img-wrapper">
                <img :src="item.imgUrl" alt="">
            </div>
            <div class="title-wrapper">
                <div class="title-wrapper2">
                    <div class="title">{{item.title}}</div>
                    <div class="description">{{item.description}}</div>

                    <!--<router-link to="/my-Ques" class="item">-->
                    <Button class="start" @click="newQues(item.name)">
                        开始
                    </Button>
                    <!--</router-link>-->

                </div>
            </div>

            <div class="purpose-wrapper">
                <div class="purpose-wrapper2">
                    <div class="purpose" v-for="OnePurpose in item.purpose">
                        {{OnePurpose}}
                    </div>
                </div>
            </div>


        </div>

    </div>
</template>

<script type="text/ecmascript-6">
    import exam from './exam.png';
    import questionaire from './questionaire.png';
    import router from '../../router';

    export default{
        data(){
            return {
                type: [],
                exam: exam,
                questionaire: questionaire
            };
        },
        created(){
            this.type = JSON.parse(localStorage.getItem('type'));
            for (let i = 0; i < this.type.length; i++) {
                this.type[i].imgUrl = this[this.type[i].name];
            }
            console.log(this.type);
        },
        methods: {
            newQues(type){
                let quesList = JSON.parse(localStorage.getItem('quesList')) ? JSON.parse(localStorage.getItem('quesList')) : [];
                // 暂时用长度当id，因为不会删除问卷，这样目前来说相对安全
                let id = quesList.length;
                quesList[id] = {};
                quesList[id].id = id;
                quesList[id].type = type;
                quesList[id].title = '请输入标题';
                quesList[id].publish = false;
                quesList[id].qContent = [];
                console.log(type);
                localStorage.setItem('quesList', JSON.stringify(quesList));
                router.push({name: 'Edit', params: {id: id}});
            }
        },
        computed: {}
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .type
        /*margin 0 20%*/
        margin-top 3em
        .wrapper
            font-size 0
            position relative
            &:hover
                background-color #5ccfff
            .img-wrapper
                display inline-block
                width 35%
                margin-left 5%
                img
                    width 80%
            .title-wrapper
                position absolute
                top 0
                left 35%
                right 0
                bottom 0
                display inline-block
                width 30%
                .title-wrapper2
                    position absolute
                    left 0
                    top 15%
                    width 100%
                    margin-top 10%
                    text-align center
                    .title
                        font-size 25px
                    .description
                        font-size 20px
                    .start
                        margin-top 1em
                        font-size 20px
                        padding 0.5em 1em

            .purpose-wrapper
                position absolute
                top 0
                left 65%
                right 0
                bottom 0
                display inline-block
                width 25%
                margin-right 5%
                .purpose-wrapper2
                    position absolute
                    left 0
                    top 15%
                    width 100%
                    margin-top 10%
                    text-align center
                    .purpose
                        font-size 20px

</style>
