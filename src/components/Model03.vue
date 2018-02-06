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