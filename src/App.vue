<template>
  <div id="app">
      <div class="survey" :style="dataJson[nowNumber].bgstyle">
        <div class="qusetion-title">{{dataJson[nowNumber].title}}</div>
        <div class="qusetion-word" :style="dataJson[nowNumber].wordColor">{{dataJson[nowNumber].question}}</div> 
        <component :is="dataJson[nowNumber].model" :data="dataJson[nowNumber].modelOption" />
        <p class="button-line">
          <button @click="nextQusetion">{{showButtonText}}</button>
        </p>
      </div>
      <pre>allAnswer:{{allAnswer}}</pre>
      <pre class="hide">{{dataJson}}</pre>
    </div>
</template>

<script>

import Model01 from './components/Model01.vue'
import Model02 from './components/Model02.vue'
import Model03 from './components/Model03.vue'
let dataJson = require('dataJson')

console.log(dataJson);

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
    }
  },  
  methods: {
      nextQusetion() {
          if (this.dataJson[this.nowNumber].modelOption.answer.length != 0) {
              let nowAnswer = {
                  number: this.dataJson[this.nowNumber].number,
                  question: this.dataJson[this.nowNumber].question,
                  answer: this.dataJson[this.nowNumber].modelOption.answer
              };
              this.allAnswer.push(nowAnswer);
              this.nowNumber = this.dataJson[this.nowNumber].nextNumber;
          }
      },
  },
  computed: {
      showButtonText() {
          return this.dataJson[this.nowNumber].modelOption.answer.length != 0
              ? this.nextButtonText = '下一題'
              : this.nextButtonText = '請選擇答案';
      }
  }
}
</script>

<style>
            * {
                box-sizing: border-box;
            }

            body {
                font-family: "微軟正黑體", HelveticaNeue-Light, Arial, Helvetica, sans-serif;
                margin: 0;
                padding: 0 10px;
                height: 100vh;
                color: #333;
            }

            .hide {
                display: none;
            }

            img {
                max-width: 100%;
            }

            .survey {
                max-width: 800px;
                margin: 10px auto;
                border: 1px solid #ccc;
                padding: 20px 5%;
                min-height: 500px;
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
</style>
