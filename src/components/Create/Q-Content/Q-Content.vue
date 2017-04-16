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
            <Input v-model="ques.title" class='title' placeholder="请输入标题"></Input>

            <draggable :list="ques.qContent">
                <transition-group name="ques-list">
                    <ul v-for="(item,index) in ques.qContent" :key="item.id" class='question'>
                        <li class='item'>

                            <div class="Q-operation ">
                                <span class="Q-index">Q{{index + 1}}</span>
                                <span class="icon-circle-plus operation" v-if="item.content instanceof Array"
                                      @click="addChoice(index)"></span>
                                <span class="icon-remove_circle_outline operation"
                                      v-if="item.content.length>2&&item.content instanceof Array"
                                      @click="deleteChoice(index)"></span>
                                <span class="icon-bin operation" @click.stop="deleteQues(index)"></span>
                            </div>

                            <input type="text" v-model="item.Q_title" class="Q-title">

                            <!--问卷选项-->
                            <!--单选题-->
                            <Radio-group :vertical="true" v-model="item.answer"
                                         v-if="item.Q_type=='Radio'">
                                <div class="option"
                                     v-for="(OneContent,C_index) in item.content">
                                    <!--<input type="radio" :value="OneContent" class="Radio_Opt" :name="item.Q_type+index">-->
                                    <Radio class="Radio_Opt" :label="C_index" :disabled="disabled">{{null}}</Radio>
                                    <input type="text" v-model="item.content[C_index]" class="choice-input">
                                </div>

                            </Radio-group>

                            <!--多选题-->
                            <Checkbox-group v-model="item.answer" v-if="item.Q_type=='MultiSelect'">
                                <div class="option" v-for="(OneContent,C_index) in item.content">
                                    <!--<input type="checkbox" :value="OneContent" class="Radio_Opt"-->
                                    <!--:name="item.Q_typ+index">-->
                                    <Checkbox :label="C_index" class="choice-item" :disabled="disabled">
                                        {{null}}

                                    </Checkbox>
                                    <input type="text" v-model="item.content[C_index]" class="choice-input">
                                </div>
                            </Checkbox-group>


                            <!--填空题-->
                            <div class="option" v-if="item.Q_type=='Completion'">
                                <!--<input type="text" v-model="item.content">-->
                                <Input :class="item.Q_type"
                                       v-model="item.answer" type="textarea"
                                       placeholder="请输入..."
                                       :maxlength="5"
                                       :disabled="disabled"
                                ></Input>
                            </div>


                        </li>
                    </ul>

                </transition-group>
            </draggable>

        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
    import draggable from 'vuedraggable';
    //    import $ from 'jquery';
    export default{
        props: ['id', 'ques'],
        data(){
            return {
                QType: [],
//                ques: this.$route.params.ques,
                disabled: false
            };
        },
        watch: {
            ques: {
                handler(curVal, oldVal){
                    let quesList = JSON.parse(localStorage.getItem('quesList'));
                    quesList[this.id] = curVal;
                    localStorage.setItem('quesList', JSON.stringify(quesList));
                },
                // 深度监视
                deep: true
            }
        },
        created(){
//            this.ques = JSON.parse(localStorage.getItem('quesList'))[this.id];
            this.QType = JSON.parse(localStorage.getItem('QType'));
            this.disabled = this.ques.type !== 'exam';
        },
        components: {
            draggable
        },
        methods: {
            addQues(QType, QName){
                let Ques = {
                    id: this.ques.qContent.length,
                    Q_type: QType,
                    name: QName,
                    Q_title: '请输入标题',
                    isRequired: false
                };
                if (this.ques.type === 'exam') {
                    switch (QType) {
                        case 'Completion':
                            Ques.answer = '';
                            break;
                        case 'MultiSelect':
                            Ques.answer = [];
                            break;
                        case 'Radio':
                            Ques.answer = 0;
                            break;
                    }
                }
                // description 本来想加入描述部分，可是尚未加入
                if (QType !== 'Completion' && QType !== 'description') {
                    Ques.content = ['choice1', 'choice2'];
                } else {
                    Ques.content = '请输入内容';
                }
                this.ques.qContent.push(Ques);
            },
            deleteQues(index){
                this.ques.qContent.splice(index, 1);
            },
            addChoice(index){
                let choice = 'choice' + (this.ques.qContent[index].content.length + 1);
                this.ques.qContent[index].content.push(choice);
            },
            deleteChoice(index){
                this.ques.qContent[index].content.pop();
            }
        }
    };
</script>

<style lang='stylus' rel='stylesheet/stylus'>
    input
        color #657180
        line-height 40px

    .ques-list-leave, .ques-list-enter
        opacity 0

    .Q-Content
        position relative
        margin 0 5%
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
            .ghost
                opacity: 0.5;
                background: #C8EBFB;
            .title
                display block
                line-height 70px
                text-align center
                font-size 25px
                background-color #FFF
                border-left 1px solid #d7dde4
                border-right 1px solid #d7dde4
                border-bottom 1px solid #d7dde4
                .ivu-input
                    width 50%
                    font-size 18px
            .question
                transition all 1s
                &:hover
                    .Q-operation .operation
                        display block
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
                            cursor move
                        span
                            line-height 35px
                            display none
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
                        max-width 75%
                        /*margin-left 90px*/
                        margin 10px 0 10px 90px
                        font-size 18px
                        label
                            display inline-block
                        .choice-input
                                 display inline-block
                                 min-width 80%
                        &.Radio
                            display block
                            line-height 40px

</style>
