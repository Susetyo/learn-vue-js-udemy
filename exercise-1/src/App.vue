<template>
  <div id="app">
     <!-- 1) Fill the <p> below with your Name and Age - using Interpolation -->
      <p>VueJS is pretty cool - {{name}} ({{age}})</p>
      <!-- 2) Output your age, multiplied by 3 -->
      <p>{{ age * 3 }}</p>
      <!-- 3) Call a function to output a random float between 0 and 1 (Math.random()) -->
      <p>{{ randomMath() }}</p>
      <!-- 4) Search any image on Google and output it here by binding the "src" attribute -->
      <div>
          <img v-bind:src="image" style="width:100px;height:100px">
      </div>
      <!-- 5) Pre-Populate this input with your name (set the "value" attribute) -->
      <div>
          <input type="text" v-bind:value = "name">
      </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data: function(){
    return {
      name: 'Susetyo Pambudi',
      age:24,
      image: 'https://danielmiessler.com/images/Glider_clarince63.png'
    }
  },
  methods:{
    randomMath: function(){
      return Math.random();
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
</style>
