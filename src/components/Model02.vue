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
            <div class="rightcircle" :style="rightCircleRotate"></div>
            <div class="leftcircle" :style="leftCircleRotate"></div>
            <div class="circle-top" :style="circleTop"></div>
            <div class="word">
              <input class="circle-text" type="number" v-model="data.answer" 
              min="0" max="12">
              <span>hours</span>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Model02',
  props: ['data'],
  data() {
      return {
          circleTop: 'display:block;',
      }
  },
  computed: {
      rightCircleRotate() {
          let rotate = parseInt(this.data.answer, 10) * 30;
          if (this.data.answer > 6) {
              return {
                  "transform": `rotate(45deg)`,
              }
          } else {
              return {
                  "transform": `rotate(${rotate - 135}deg)`,
              }
          }
      },
      leftCircleRotate() {
          let rotate = parseInt(this.data.answer, 10) * 30;
          if (this.data.answer <= 6) {
              this.circleTop = 'display:block;';
              return {
                  "transform": `rotate(-135deg)`,
                  "display": "none"
              }
          } else {
              this.circleTop = 'display:none;';
              return {
                  "transform": `rotate(${rotate + 45}deg)`,
                  "display": "block"
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
                border: 26px solid #ccc;
                z-index: 10;
            }

            .model-2 .rightcircle {
                width: 100%;
                height: 100%;
                border: 20px solid transparent;
                border-radius: 50%;
                position: absolute;
                top: 50%;
                left: 50%;
                margin-top: -50%;
                margin-left: -50%;
                width: 98%;
                height: 98%;
                margin-top: -49%;
                margin-left: -49%;
                border-top: 20px solid #008000;
                border-right: 20px solid #008000;
                transform: rotate(-135deg);
                -webkit-transition: transform 0.5s ease;
                -moz-transition: transform 0.5s ease;
                -o-transition: transform 0.5s ease;
                transition: transform 0.5s ease;
                z-index: 20;
            }

            .model-2 .leftcircle {
                width: 100%;
                height: 100%;
                border: 20px solid transparent;
                border-radius: 50%;
                position: absolute;
                top: 50%;
                left: 50%;
                margin-top: -50%;
                margin-left: -50%;
                width: 98%;
                height: 98%;
                margin-top: -49%;
                margin-left: -49%;
                border-bottom: 20px solid #008000;
                border-left: 20px solid #008000;
                display: none;
                transform: rotate(-135deg);
                -webkit-transition: transform 0.5s ease;
                -moz-transition: transform 0.5s ease;
                -o-transition: transform 0.5s ease;
                transition: transform 0.5s ease;
                z-index: 20;
            }

            .model-2 .circle-top {
                width: 100%;
                height: 100%;
                border: 20px solid transparent;
                border-radius: 50%;
                position: absolute;
                top: 50%;
                left: 50%;
                margin-top: -50%;
                margin-left: -50%;
                border: 26px solid transparent;
                border-top: 26px solid #ccc;
                border-right: 26px solid #ccc;
                transform: rotate(-135deg);
                z-index: 30;
            }

</style>