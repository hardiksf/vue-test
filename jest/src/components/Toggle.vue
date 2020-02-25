<template>
  <div class="component-border">
    <h2>{{ title }}</h2>
    <p class="toggle">
      Toggle button is {{ isButtonToggled ? "blue" : "green" }}
    </p>
    <button
      type="button"
      class="btn text-uppercase font-weight-bold"
      @click="toggleButton"
      :class="[isButtonToggled ? blueButtonClass : greenButtonClass]"
    >
      {{ isButtonToggled ? "blue button" : "green button" }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  },
  data() {
    return {
      blueButtonClass: "btn-primary",
      greenButtonClass: "btn-success",
      isButtonToggled: true,
      blue: "blue",
      green: "gren"
    };
  },
  methods: {
    toggleButton() {
      this.isButtonToggled = !this.isButtonToggled;
    }
  }
};
</script>
