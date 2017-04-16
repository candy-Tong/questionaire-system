<template>
    <div class="preview">
        <div class='ques'>
            <Row>
                <br>
                <Col span="12" offset="6">
                <div style="text-align: center">
                    <span class="title">{{ques.title}}</span>
                </div>
                <br>

                <ul v-for="(item,index) in ques.qContent">
                    <li>

                        <span class="Q-title">{{item.Q_title}}</span>

                        <!--问卷选项-->
                        <!--单选题-->
                        <Radio-group :vertical="true" v-model="Q_Result.answer[index].answer"
                                     v-if="item.Q_type=='Radio'">
                            <div v-for="(OneContent,C_index) in item.content" :class="item.Q_type+' Q-Choice'"
                                 :key="item.id">
                                <Radio :label="C_index" class="choice-item">
                                    <span>{{OneContent}}</span>
                                    <span class="icon-checkmark22" v-if="ques.qContent[index].answer===C_index"></span>
                                    <span class="icon-close"
                                          v-if="ques.qContent[index].answer!==C_index&&Q_Result.answer[index].answer===C_index"></span>
                                </Radio>
                            </div>
                        </Radio-group>

                        <!--多选题-->
                        <Checkbox-group v-model="Q_Result.answer[index].answer" v-if="item.Q_type=='MultiSelect'">

                            <div v-for="(OneContent,C_index) in item.content" :key="item.id"
                                 :class="item.Q_type+' Q-Choice'">
                                <Checkbox :label="C_index" class="choice-item">
                                    <span>{{OneContent}}</span>
                                    <span class="icon-checkmark22"
                                          v-if="ques.qContent[index].answer[C_index]===C_index"></span>
                                    <span class="icon-close"
                                          v-if="ques.qContent[index].answer[C_index]!==C_index&&Q_Result.answer[index].answer[C_index]===C_index"></span>

                                </Checkbox>
                            </div>

                        </Checkbox-group>

                        <!--填空题-->
                        <div v-if="item.Q_type=='Completion'">
                            <Input :class="item.Q_type"
                                   v-model="Q_Result.answer[index].answer" type="textarea"
                                   placeholder="请输入..."
                                   :maxlength="5"
                            ></Input>
                        </div>
                    </li>
                </ul>
                <Button @click="back">返回</Button>
                </Col>
            </Row>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import router from '../../router';
    export default{
        data(){
            return {
                id: this.$route.params.id,
                ques: {},
                Q_Result: this.$route.params.MyAnswer
            };
        },
        methods: {
            back(){
                router.push('/my-Ques');
            }
        },
        watch: {},
        created(){
            this.ques = JSON.parse(localStorage.getItem('quesList'))[this.id];
            for (var i = 0; i < this.ques.qContent.length; i++) {
                if (this.ques.qContent[i].answer.toString() === this.Q_Result.answer[i].answer.toString()) {
                    console.log('答对了：' + i);
                } else {
                    console.log('答错了：' + i);
                }
            }
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">


    .ques
        .title
            display inline-block
            color #464c5b
            font-size 32px
            margin 0 auto
        ul
            margin-bottom 2em
            .icon-checkmark22
                color #00cc66
            .icon-close
                color #ff3300
            label
                display: inline-block
            .Q-title
                display block
                color #464c5b
                font-size 20px
                margin-bottom 0.8em
            .Q-Choice
                .choice-item
                    font-size 20px
                    margin-left 1.5em
            .Completion
                textarea
                    font-size 18px

</style>
