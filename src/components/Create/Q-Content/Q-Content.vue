<template>
    <div class='Q-Content'>
        <ul class='Q-Type'>
            <li>
                <span class='itemControllers'>题型控件</span>
                <span class='icon-keyboard_arrow_right'></span>
            </li>
            <li v-for='item in QType' @click="addQues(item.Q_type,item.Q_name)" class='Q-item'>
                <span :class='item.icon'></span>
                <span>{{item.name}}</span>
            </li>
        </ul>
        <div class='content'>
            <span class='title'>{{title}}</span>
            <ul class='question'>
                <li class='item' v-for="(item,index) in QContent">

                    <div class="Q-operation ">
                        <span class="Q-index">Q{{index + 1}}</span>
                        <span class="icon-circle-plus"></span>
                        <span class="icon-remove_circle_outline"></span>
                        <span class="icon-bin"></span>
                    </div>


                    <p class="Q-title" contenteditable="true" autofocus="autofocus"
                       required="required">{{item.Q_title}}</p>
                    <!--<span class="type">{{item.name}}</span>-->
                    <!--问卷选项-->
                    <!--单选题-->
                    <div class="option" v-if="item.Q_type=='Radio'" v-for="(OneContent,C_index) in item.content">
                        <input type="radio" :value="OneContent" class="Radio_Opt" :name="item.Q_type+index">
                        <span contenteditable="true">{{OneContent}}</span>
                    </div>
                    <!--多选题-->
                    <div class="option" v-if="item.Q_type=='MultiSelect'" v-for="(OneContent,index) in item.content">
                        <input type="checkbox" :value="OneContent" class="Radio_Opt" :name="item.Q_typ+index">
                        <span contenteditable="true">{{OneContent}}</span>
                    </div>

                    <!--填空题-->
                    <div class="option" v-if="item.Q_type=='Completion'">
                        <span contenteditable="true">{{item.content}}</span>
                    </div>

                    <input v-if="!item.content" class="option" :class="item.Q_type" :value="item.Q_type">
                </li>
            </ul>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
    export default{
        props: ['title'],
        data(){
            return {
                QType: [
                    {
                        name: '单选题',
                        icon: 'icon-radio-checked',
                        Q_type: 'Radio'
                    }, {
                        name: '多选题',
                        icon: 'icon-checkbox',
                        Q_type: 'MultiSelect'
                    }, {
                        name: '填空题',
                        Q_type: 'Completion',
                        icon: 'icon-pencil'
                    }, {
                        name: '排序题',
                        Q_type: 'Sort',
                        icon: 'icon-sort-amount-asc'
                    }, {
                        name: '打分题',
                        Q_type: 'Score',
                        icon: 'icon-star'
                    }
                ],
                QContent: [
                    {
                        Q_type: 'Radio',
                        name: '单选题',
                        Q_title: '请输入标题',
                        content: [
                            'choice1', 'choice2', 'choice3'
                        ],
                        isRequired: false
                    },
                    {
                        Q_type: 'MultiSelect',
                        Q_title: '请输入标题',
                        name: '多选题',
                        content: [
                            'choice1', 'choice2', 'choice3'
                        ],
                        isRequired: false
                    }
//                    ,
//                    {
//                        Q_type: 'Completion',
//                        Q_title: '标题',
//                        name: '填空题',
//                        isRequired: false
//                    }
//                    ,
//                    {
//                        Q_type: 'Sort',
//                        name: '排序题',
//                        Q_title: '标题',
//                        content: [
//                            'choice1', 'choice2', 'choice3'
//                        ],
//                        isRequired: false
//                    },
//                    {
//                        Q_type: 'Score',
//                        name: '打分题',
//                        Q_title: '标题',
//                        content: [
//                            'choice1', 'choice2', 'choice3'
//                        ],
//                        isRequired: false
//                    }
                ]
            };
        },
        methods: {
            addQues(QType, QName){
                let Ques = {
                    Q_type: QType,
                    name: QName,
                    Q_title: '请输入标题',
                    isRequired: false
                };
                if (QType !== 'Completion') {
                    Ques.content = ['choice1', 'choice2'];
                } else {
                    Ques.content = '请输入内容';
                }
                this.QContent.push(Ques);
            }
        }
    };
</script>

<style lang='stylus' rel='stylesheet/stylus'>
    input
        color #657180
        line-height 40px

    .Q-Content
        position relative
        margin 0 50px
        color #657180
        .Q-Type
            position absolute
            left 0
            top 0
            width 180px
            border-right 1px solid #d7dde4
            border-left 1px solid #d7dde4
            background-color rgba(0, 0, 0, 0)
            font-size 20px
            line-height 50px
            li
                margin 0
                width 100%
                border-bottom 1px solid #d7dde4
                .itemControllers
                    display inline-block
                    vertical-align middle
                    text-indent 25px
                .icon-keyboard_arrow_right
                    line-height 50px
                    vertical-align middle
                &.Q-item
                    text-indent 30px
                    cursor pointer
        .content
            min-height 500px
            margin-left 220px
            background-color #f5f7f9
            .title
                display block
                line-height 70px
                text-align center
                font-size 25px
                background-color #FFF
                border-left 1px solid #d7dde4
                border-right 1px solid #d7dde4
                border-bottom 1px solid #d7dde4
            .question
                .item
                    position relative
                    margin 0
                    background-color #FFF
                    display block
                    font-size 18px
                    border-left 1px solid #d7dde4
                    border-right 1px solid #d7dde4
                    border-bottom 1px solid #d7dde4
                    .Q-operation
                        position absolute
                        width 50px
                        text-align center
                        margin-left 10px
                        .Q-index
                            display block
                            line-height 50px
                        span
                            line-height 35px
                            display block

                    .Q-title
                        display inline-block
                        line-height 30px
                        font-size 18px
                        min-height 30px
                        width 70%
                        margin 10px 0 0 70px

                    .option
                        clear both
                        display block
                        line-height 30px
                        /*margin-left 90px*/
                        margin 10px 0 10px 90px
                        span
                            display inline-block
                            min-width 70%
                        &.Radio
                            display block
                            line-height 40px

</style>
