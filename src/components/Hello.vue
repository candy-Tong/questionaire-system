<template>
    <div class="hello">
        Hello



        <!--<draggable v-model="myArray" :options="{group:'people'}" @start="drag=true" @end="drag=false">-->
        <!--<div v-for="element in myArray">{{element.name}}</div>-->
        <!--</draggable>-->

        <draggable v-model="myArray">
            <transition-group>
                <div v-for="element in myArray"
                     :key="element.id"
                     class="Que-item"
                >
                    {{element.name}}

                </div>
            </transition-group>
        </draggable>

        <div v-for="machine in machines">
            <draggable v-model="machine.jobs">
                <transition-group name="list-complete">
                    <div v-for="(job, index) in machine.jobs"
                         :key="job.jobNumber"
                         class="list-complete-item"
                    >
                        {{ job.jobNumber }}
                            <!--<div>-->
                        <br>
                        <!--<button v-on:click="removeJob(machine.id, job.jobNumber, machine.jobs, index)">Remove-->


                        <!--</button> -->
                        <!--</div>-->
                    </div>
                </transition-group>
            </draggable>


        </div>


    </div>
</template>

<script type="text/ecmascript-6">
    import draggable from 'vuedraggable';
    export default {
        name: 'hello',
        data () {
            return {
                machines: [
                    {
                        name: 'H1',
                        id: 1,
                        jobs: [
                            {
                                jobNumber: '14037-12'
                            },
                            {
                                jobNumber: '14038-13'
                            },
                            {
                                jobNumber: '14048-15'
                            }
                        ]
                    }
                ],
                theme1: 'light',
                myArray: [
                    {
                        id: 0,
                        name: '000000000000000000000000000'
                    },
                    {
                        id: 1,
                        name: '1111111111111111111111111111'
                    },
                    {
                        id: 2,
                        name: '222222222222222222222'
                    },
                    {
                        id: 3,
                        name: '3333333333333333333333'
                    }
                ]
            };
        },
        components: {
            draggable
        },
        methods: {
            removeJob: function (machineId, jobNumber, jobs, index) {
                // Remove job from GUI
                jobs.splice(index, 1);
            }
        }
    };

    //    var draggable = require('vuedraggable');
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
    .list-complete-item {
        padding: 40px;
        margin-top: 4px;
        border: solid 1px;
        transition: all 1s;
    }

    .list-complete-enter, .list-complete-leave-active {
        opacity: 0;
    }

    .Que-item {
        height 20px
        line-height 20px
        transition all 1s
    }

    h1, h2
        font-weight: normal

    ul
        list-style-type: none
        padding: 0

    li
        display: inline-block
        margin: 0 10px

</style>
