<template>
  <div class="component-border">
    <h2>Counter Component</h2>
    <p>Increments following text by 1 upon button click</p>
    <p class="counter">{{ count }}</p>
    <button @click="increment">Increment above text</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    };
  },
  methods: {
    increment() {
      this.count++;
    }
  }
};
</script>

