<template>
  <div id="app">
      <div class="survey" :style="dataJson[nowNumber].bgstyle">
        <div class="qusetion-title">{{dataJson[nowNumber].title}}</div>
        <div class="qusetion-word" :style="dataJson[nowNumber].wordColor">{{dataJson[nowNumber].question}}</div> 
        <component :is="dataJson[nowNumber].model" :data="dataJson[nowNumber].modelOption" />
        <span class="button-left" v-if="nowNumber>0" @click="nowNumber=nowNumber-1"><</span>
        <span class="button-right" v-if="dataJson[nowNumber].modelOption.answer.length != 0" @click="nextQusetion">></span>
        <div class="progress" :style="{'background-color':dataJson[nowNumber].barBgColor,}">
            <div class="progress-bar" 
                :style="{
                    'width':barWidth+'%',
                    'background-color':dataJson[nowNumber].barColor
                }">
            </div>
            <span class="progress-word" :style="{'color':dataJson[nowNumber].barWordColor,}">已答必填題數：{{answered}}/{{dataJson[nowNumber].totalAnswer}}</span>
        </div>
      </div>
    </div>
</template>

<script>

import Model01 from './components/Model01.vue'
import Model02 from './components/Model02.vue'
import Model03 from './components/Model03.vue'
let dataJson = require('dataJson')
Array.prototype.remove = function(val) {
    let index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
};
export default {
  name: 'app',
  components:{
    Model01,
    Model02,
    Model03,
  },
  data () {
    return {
      nowNumber: 0,
      dataJson,
      nextButtondisabled: false,
      nextButtonText: '請選擇答案',
      allAnswer: [],
      answered:0,
      barWidth:0,
      checkedState:true,
    }
  },  
  methods: {
    nextQusetion() {
        if (this.dataJson[this.nowNumber].modelOption.answer.length != 0) {
            if(!this.dataJson[this.nowNumber].answered){
                let nowAnswer = {
                    number: this.dataJson[this.nowNumber].number,
                    question: this.dataJson[this.nowNumber].question,
                    answer: this.dataJson[this.nowNumber].modelOption.answer
                };
                this.allAnswer.push(nowAnswer);
                this.dataJson[this.nowNumber].answered=true;
            }else{
                for( let dd in this.allAnswer){
                    if(this.allAnswer[dd].number == this.dataJson[this.nowNumber].number){
                        this.allAnswer[dd].answer = this.dataJson[this.nowNumber].modelOption.answer;
                    }
                }
            }
            this.dataJson[this.nowNumber].modelOption.necessary?this.answered++:this.answered;
            this.barWidth=this.answered/this.dataJson[this.nowNumber].totalAnswer*100;
            this.nowNumber = this.dataJson[this.nowNumber].nextNumber;
            console.log(this.allAnswer);
        }
    },
  },
  computed: {
      showButtonText() {
          return this.dataJson[this.nowNumber].modelOption.answer.length != 0
              ? this.nextButtonText = '下一題'
              : this.nextButtonText = '請選擇答案';
      },
  }
}
</script>

<style>
#app{
    position: relative; 
    padding: 45% 0;
    margin: 20px 0; 
}
.survey {
    border: 1px solid #ccc;
    padding: 60px 8%;
    min-height: 500px;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
}

.qusetion-title {
    font-size: 28px;
    line-height: 1.2em;
    margin-bottom: 5px;
}

.qusetion-word {
    font-size: 22px;
    line-height: 1.2em;
    margin-bottom: 40px;
}

.button-line {
    text-align: right;
}
 
.col-2 {
    position: relative;
    width: 48%;
    margin: 1%;
    max-width: 200px;
}
.col-4 {
    position: relative;
    width: 23%;
    margin: 1%;
}
.progress{
    height: 20px;
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
    position: absolute;
    bottom: 20px;
    left: 3%;
    width: 94%;
    text-align: center;
    font-size: 14px;
}
.progress-bar{
    height: 20px;
    background-color: #5aa051;
    width: 0%;
}
.progress-word{
    position: absolute;
    top: 0;
    left:0;
    width:100%;
    z-index: 10;
}
.button-left{
    position: absolute;
    top: 0;
    left: 0;
    font-size: 30px;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 10px;
}
.button-right{
    position: absolute;
    top: 0;
    right: 0;
    font-size: 30px;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 10px;
}
</style>
