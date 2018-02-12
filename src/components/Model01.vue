<template>
    <div :class="modelOneLine" :style="flexWrap">
      <div :class="optionClass" v-for="option in data.options">
        <input class="control" :value="option.value" 
            :id="option.optionId" type="checkbox" name="qusetion" 
            v-model="data.answer" @click="optionClick">
        <div class="bgheight"></div>
        <label class="option front" :for="option.optionId" 
            :style="data.optionsFroundcolor">
          <span :class="optionPic" ><img :src="option.imgFrontSrc"></span>
          <span :class="optionWord">{{option.title}}</span>
        </label>
        <label class="option back" :for="option.optionId" 
            :style="data.optionsBackcolor">
          <span :class="optionPic" ><img :src="option.imgBackSrc"></span>
          <span :class="optionWord">{{option.title}}</span>
        </label>
      </div>
    </div>
</template>

<script>
export default {
  name: 'model01',
  props: ['data'],
  methods: {
      optionClick(event) {
          if (this.data.answer.length >= this.data.maxChoose) {
              this.data.answer.splice(0, 1);
          }
      },
  },
  computed: {
      optionPic() {
          return this.data.bigPic ? "bigPic" : "pic";
      },
      optionWord() {
          return {
              "pic-title": this.data.bigPic,
              "barTitle": this.data.oneLine,
          }
      },
      flexWrap() {
          return !this.data.oneLine ? 'flex-wrap:wrap;' : '';
      },
      modelOneLine() {
          return {
              "model-1": true,
              "barChart": this.data.options.length > 2 && this.data.oneLine,
          }
      },
      optionClass() {
          return {
              "flipCard col-2": this.data.options.length <= 2,
              "flipCard col-4": !this.data.oneLine,
              "oneline": this.data.options.length > 2 && this.data.oneLine
          }
      },
      FroundBgColor() {
          if (this.data.optionsFroundcolor.backgroundColor === '' && this.data.optionsFroundcolor.backgroundImage === '') {
              return {
                  backgroundColor: option.bgColor,
                  background: `linear-gradient(to right,
                    ${option.bgColorTop},
                    ${option.bgColorBottom})`
              }
          }
      }
  }
}
</script>

<style>
    .model-1 {
        display: flex;
        justify-content: center;
    }

    .model-1 .col-2 .option {
        display: flex;
        justify-content: center;
        align-items: center
    }

    .model-1 .col-4 .pic {
        max-width: 40px;
        display: block;
        margin: 20px auto 0 auto;
    }

    .model-1 .control {
        display: none;
    }

    .flipCard .option {
        font-size: 16px;
        border-radius: 10px;
        position: relative;
        text-align: center;
        cursor: pointer;
    }

    .flipCard .bgheight {
        padding: 40% 0;
    }

    .flipCard .front,
    .flipCard .back {
        position: absolute;
        left: 0;
        top: 0;
        overflow: hidden;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        -webkit-transition: transform 0.5s ease;
        -moz-transition: transform 0.5s ease;
        -o-transition: transform 0.5s ease;
        transition: transform 0.5s ease;
    }

    .flipCard .front {
        z-index: 2;
        -webkit-transform: rotateY(0deg);
        -moz-transform: rotateY(0deg);
        -ms-transform: rotateY(0deg);
        -o-transform: rotateY(0deg);
        transform: rotateY(0deg);
    }

    .flipCard .back {
        z-index: 1;
        -webkit-transform: rotateY(180deg);
        -moz-transform: rotateY(180deg);
        -ms-transform: rotateY(180deg);
        -o-transform: rotateY(180deg);
        transform: rotateY(180deg);
    }

    .flipCard .control:checked~.front {
        transform: rotateY(180deg);
    }

    .flipCard .control:checked~.back {
        transform: rotateY(0deg);
    }

    .flipCard .pic-title {
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        text-align: center;
        z-index: 10;
        padding: 10px;
    }

    .oneline {
        position: relative;
        width: 100%;
    }

    .oneline .option {
        position: absolute;
        bottom: 0;
        left: 0;
        border: 1px solid #f5f5f5;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        cursor: pointer;
    }
    .barChart {
        background-color: #fff;
        padding: 10px;
    }

    .barChart .bgheight {
        padding:100% 0;
    }

    .barChart .back {
        overflow: hidden;
        height: 0;
        bottom: -5%;
        -webkit-transition: height 0.5s ease;
        -moz-transition: height 0.5s ease;
        -o-transition: height 0.5s ease;
        transition: height 0.5s ease;
    }

    .barChart .barTitle {
        padding: 10px;
        display: block;
    }

    .barChart .control:checked~.back {
        height: 110%;
    }
</style>
