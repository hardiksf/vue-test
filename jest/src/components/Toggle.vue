<template>
  <div class="component-border">
    <h2>Toggle Component</h2>
    <button type="button" class="btn text-uppercase font-weight-bold" @click="toggleButton"
    :class="[isButtonToggled ? blueButtonClass : greenButtonClass]">{{isButtonToggled? "blue button" : "green button"}}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blueButtonClass: "btn-primary",
      greenButtonClass: "btn-success",
      isButtonToggled: true,
    };
  },
  methods: {
      toggleButton() {
          this.isButtonToggled = !this.isButtonToggled;
      }
  }
};
</script>