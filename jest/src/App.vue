<template>
  <div id="app">
    <HelloWorld msg="Hello!" />
    <counter></counter>
    <toggle></toggle>
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

    button
        font-weight: 700
        text-transform: uppercase
</style>
