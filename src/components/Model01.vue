<template>
    <div :class="modelOneLine" :style="flexWrap">
      <div :class="optionClass" v-for="option in data.options">
        <input class="control" :value="option.value" 
            :id="option.optionId" type="checkbox" :name="option.name" 
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
