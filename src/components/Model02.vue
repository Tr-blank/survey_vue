<template>
    <div class="model-2">
      <div class="circlebox">
        <span class="time-top">12</span>
        <span class="time-right">3</span>
        <span class="time-left">9</span>
        <span class="time-bottom">6</span>
        <div class="circle-wrapper">
          <div class="circle-process">
            <div class="circle-bottom"></div>
            <div class="right-wrapper">
                <div class="rightcircle" :style="rightCircleRotate"></div>
            </div>
            <div class="left-wrapper">
                <div class="leftcircle" :style="leftCircleRotate"></div>
            </div>
            <div class="word" :style="data.bgstyle">
              <input class="circle-text" type="number" v-model="data.answer" 
              min="0" max="12">
              <span>hours</span>
            </div>
          </div>
        </div>
      </div>
      <p class="button-line" v-if="!data.necessary">
        <input type="checkbox" id="necessary" value="pass"
            :checked="necessaryChecked"
            @change="necessaryClick" >
        <label for="necessary">跳過 </label>
      </p>
    </div>
</template>

<script>
export default {
  name: 'Model02',
  props: ['data'],
  data() {
      return {
          checkedState:true,
      }
  },
  methods: {
    necessaryClick(){
        if (this.checkedState){
            this.data.answer = [];
            this.data.answer.push('pass');
            this.checkedState = false;
        }else{
            this.data.answer.remove('pass');
            this.checkedState = true;
        }
    },
  },
  computed: {
      necessaryChecked(){
          return !this.checkedState?'checked':'';
      },
      rightCircleRotate() {
          let rotate = parseInt(this.data.answer, 10) * 30;
          if (this.data.answer > 6) {
              return {
                  "transform": `rotate(45deg)`,
                  "border-left": "30px solid transparent",
                  "border-bottom": "30px solid transparent",
              }
          } else {
              return {
                  "transform": `rotate(${rotate - 135}deg)`,
              }
          }
      },
      leftCircleRotate() {
          let rotate = parseInt(this.data.answer, 10) * 30;
          if (this.data.answer < 6) {
              return {
                  "transform": `rotate(225deg)`,
              }
          }else {
              return {
                  "transform": `rotate(${rotate + 45}deg)`,
              }
          }
      },
  }
}
</script>

<style>
 .model-2 .time-top {
    font-size: 26px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    text-align: center;
}

.model-2 .time-left {
    font-size: 26px;
    position: absolute;
    top: 50%;
    margin-top: -15px;
    left: 0;
}

.model-2 .time-right {
    font-size: 26px;
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -15px;
}

.model-2 .time-bottom {
    font-size: 26px;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
}

.model-2 .word {
    font-family: Arial, "微軟正黑體";
    font-weight: bold;
    text-align: center;
    z-index: 40;
    width: 80%;
    font-size: 20px;
    width: 85%;
    height: 85%;
    border-radius:50%;
    background-color: #ccc;
    border: 3px solid #fff;
    display: flex;
    align-items: center;
    justify-content: center;
}

.model-2 .circle-text {
    font-size: 50px;
    text-align: center;
    color: #008000;
    width: 110px;
    border: 0;
    border-bottom: 2px solid #ccc;
}

.model-2 .circlebox {
    max-width: 400px;
    margin: 0 auto;
    padding: 40px;
    position: relative;
}

.model-2 .circle-wrapper {
    position: relative;
    padding: 50% 0;
    height: 0;
}

.model-2 .circle-process {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.model-2 .circle-bottom {
    width: 100%;
    height: 100%;
    border: 20px solid transparent;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -50%;
    margin-left: -50%;
    background-image:url('https://raw.githubusercontent.com/Tr-blank/survey/master/dist/00.jpg');
    background-size: contain;
    background-position: center center;
    border: 3px solid #fff;
    z-index: 10;
}
.model-2 .right-wrapper{
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    overflow: hidden;
}
.model-2 .rightcircle {
    border: 20px solid transparent;
    border-radius: 50%;
    position: absolute;
    top: 0;
    right: 100%;
    width: 200%;
    height: 100%;
    margin-right: -100%;
    border-bottom: 30px solid #fff;
    border-left: 30px solid #fff;
    border-right: 30px solid transparent;
    border-top: 30px solid transparent;
    transform: rotate(-135deg);
    -webkit-transition: transform 0.5s ease;
    -moz-transition: transform 0.5s ease;
    -o-transition: transform 0.5s ease;
    transition: transform 0.5s ease;
    z-index: 20;
}
.model-2 .left-wrapper{
    position: absolute;
    top: 0;
    left: 1px;
    width: 50%;
    height: 100%;
    overflow: hidden;
}
.model-2 .leftcircle {
    border: 20px solid transparent;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 100%;
    width: 200%;
    height: 100%;
    margin-left: -100%;
    border-top: 30px solid #fff;
    border-right: 30px solid #fff;
    border-left: 30px solid transparent;
    border-bottom: 30px solid transparent;
    transform: rotate(225deg);
    -webkit-transition: transform 0.5s ease;
    -moz-transition: transform 0.5s ease;
    -o-transition: transform 0.5s ease;
    transition: transform 0.5s ease;
    z-index: 20;
}

.model-2 .circle-top-left {
    width: 100%;
    height: 100%;
    border: 20px solid transparent;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -50%;
    margin-left: -50%;
    border: 30px solid transparent;
    border-top: 30px solid #fff;
    border-right: 30px solid #fff;
    transform: rotate(-135deg);
    z-index: 30;
}
.model-2 .circle-top-right {
    width: 100%;
    height: 100%;
    border: 20px solid transparent;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -50%;
    margin-left: -50%;
    border: 30px solid transparent;
    border-top: 30px solid #fff;
    border-right: 30px solid #fff;
    transform: rotate(-135deg);
    z-index: 30;
}

</style>