<template>
  <div>
    <button class="btn btn-primary" @click="increase">Increase</button>
    <button class="btn btn-danger" @click="decrease">Decrease</button>
  </div>
</template>

<script>
  export default {
    name: "app-counter",
    methods: {
      increase() {
        this.$store.state.counter++;
      },
      decrease() {
        this.$store.state.counter--;
      }
    }
  };
</script>

<style>
  button {
    margin: 10px;
    width: 140px;
    height: 60px;
    font-size: 40px;
  }
</style>
