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
                        <Radio-group :vertical="true" v-model="Q_Result.answer[index].choiceId"
                                     v-if="item.Q_type=='Radio'">
                            <div v-for="(OneContent,C_index) in item.content" :class="item.Q_type+' Q-Choice'"
                                 :key="item.id">
                                <Radio :label="C_index" class="choice-item">
                                    {{OneContent}}


                                </Radio>
                            </div>


                        </Radio-group>

                        <!--多选题-->
                        <Checkbox-group v-model="Q_Result.answer[index].choiceList" v-if="item.Q_type=='MultiSelect'">

                            <div v-for="(OneContent,C_index) in item.content" :key="item.id"
                                 :class="item.Q_type+' Q-Choice'">
                                <Checkbox :label="C_index" class="choice-item">
                                    <span>{{OneContent}}</span>
                                </Checkbox>
                            </div>

                        </Checkbox-group>

                        <!--填空题-->
                        <div v-if="item.Q_type=='Completion'">
                            <Input :class="item.Q_type"
                                   v-model="Q_Result.answer[index].input" type="textarea"
                                   placeholder="请输入..."
                                   :maxlength="5"
                            ></Input>
                        </div>
                    </li>
                </ul>
                </Col>
            </Row>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">

    export default{
        data(){
            return {
                id: this.$route.params.id,
                ques: {},
                Q_Result: {}
            };
        },
        methods: {
            initResult() {
                let result = {};
                result.quesId = this.ques.id;
                result.answer = [];
                for (let i = 0; i < this.ques.qContent.length; i++) {
                    let oneAnswer = {};
                    oneAnswer.qId = this.ques.qContent[i].id;
                    oneAnswer.Q_type = this.ques.qContent[i].Q_type;
                    switch (oneAnswer.Q_type) {
                        case 'Radio':
                            oneAnswer.choiceId = NaN;
                            break;
                        case 'MultiSelect':
                            oneAnswer.choiceList = [];
                            break;
                        case 'Sort':
                            oneAnswer.input = '';
                            break;
                    }

                    result.answer.push(oneAnswer);
                }
                return result;
            }
        },
        watch: {
            Q_Result: {
                handler(curVal, oldVal){
                    console.log(this.Q_Result);
                },
                // 深度监视
                deep: true
            }
        },
        created(){
            this.ques = JSON.parse(localStorage.getItem('quesList'))[this.id];
            this.Q_Result = this.initResult();
            console.log(this.Q_Result);
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
