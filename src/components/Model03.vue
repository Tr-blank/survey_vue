<template>
  <div class="model-3" >
    <ul class="range-pic"> 
      <li v-for="(option, index) in data.options" 
        :class="{
          'rangePic col-50':(index == nowNumber-1),
          'rangePic col-25':(index == nowNumber || index == nowNumber-2),
          'rangePic col-0':(index > nowNumber || index < nowNumber-2)
        }">
        <img :src="option.imgSrc">
      </li>
    </ul>
    <input type="range" class="inputRange" 
      min="1" 
      :max="data.options.length" 
      step="1" 
      value="1" 
      v-model="nowNumber"
      @change="nowAnswer"
      :style="rangeStyle">
    <ul class="range-title">
      <li v-for="option in data.options">
          {{option.title}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Model03',
  props: ['data'],
  data() {
      return {
          nowNumber: 1,
          rangeStyle: {
              background: `linear-gradient(to right,
                ${this.data.rangeBgColorLeft},
                ${this.data.rangeBgColorRight})`
          }
      }
  }, methods: {
      nowAnswer() {
          this.data.answer = this.data.options[this.nowNumber - 1].title;
      }
  },
  computed: {
      imgClass() {
          return "col-50"

      }
  }
}
</script>
<style>
 .model-3 .inputRange {
                width: 100%;
                height: 31px;
                cursor: pointer;
                border-radius: 5px;
                border: 5px solid #fff;
                -webkit-appearance: none;
                outline: none;
            }

            .model-3 .rangePic {
                overflow: hidden;
                text-align: center;
                -webkit-transition: width 0.5s ease;
                -moz-transition: width 0.5s ease;
                -o-transition: width 0.5s ease;
                transition: width 0.5s ease;
                display: flex;
                justify-content: center;
                align-items: center
            }

            .model-3 .col-50 {
                width: 50%;
            }

            .model-3 .col-25 {
                width: 25%;
            }

            .model-3 .col-0 {
                width: 0%;
            }

            .model-3 .range-title,
            .model-3 .range-pic {
                display: flex;
                margin: 10px 0;
                padding: 0;
                list-style-type: none;
                justify-content: space-between;
            }

            .model-3 .range-pic {
                min-height: 310px;
            }
</style>