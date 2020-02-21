<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <counter></counter>
    <toggle></toggle>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Counter from "./components/Counter.vue";
import Toggle from "./components/Toggle.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Counter,
    Toggle
  }
};
</script>

<style lang="sass">
#app 
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px

.component-border
    border: solid 1pt grey
    margin: 5vw
    padding: 2vw
</style>
