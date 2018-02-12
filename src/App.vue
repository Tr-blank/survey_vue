<template>
  <div id="app">
      <div class="survey" :style="dataJson[nowNumber].bgstyle">
        <div class="qusetion-title">{{dataJson[nowNumber].title}}</div>
        <div class="qusetion-word" :style="dataJson[nowNumber].wordColor">{{dataJson[nowNumber].question}}</div> 
        <component :is="dataJson[nowNumber].model" :data="dataJson[nowNumber].modelOption" />
        <p class="button-line">
            <span v-if="!dataJson[nowNumber].necessary">
                <input type="checkbox" id="necessary" value="pass" 
                    v-model="dataJson[nowNumber].modelOption.answer" 
                    @click="necessaryClick">
                <label for="necessary">跳過 </label>
            </span>
            <button v-if="nowNumber>0" @click="nowNumber=nowNumber-1">上一頁</button>
            <button @click="nextQusetion">{{showButtonText}}</button>
        </p>
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
    }
  },  
  methods: {
    necessaryClick(e){
        if (e.checked){
            this.dataJson[this.nowNumber].modelOption.answer = ['pass'];
        }
    },
    nextQusetion() {
        if (this.dataJson[this.nowNumber].modelOption.answer.length != 0) {
            let nowAnswer = {
                number: this.dataJson[this.nowNumber].number,
                question: this.dataJson[this.nowNumber].question,
                answer: this.dataJson[this.nowNumber].modelOption.answer
            };
            this.allAnswer.push(nowAnswer);
            (this.dataJson[this.nowNumber].necessary)?this.answered++:this.answered;
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

.survey {
    margin: 20px 0;
    border: 1px solid #ccc;
    padding: 60px 8%;
    min-height: 500px;
    position: relative;
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

</style>
