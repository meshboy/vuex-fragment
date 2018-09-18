<template>
<div>
    <button class="btn btn-primary" @click="increase">Increase</button>
    <button class="btn btn-danger" @click="decrease">Decrease</button>
     <button class="btn btn-info" @click="asyncIncrease(5)">Async Increase by 5</button>
</div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "app-counter",
  methods: {
    // increase() {
    //   this.$store.state.counter++;
    // },
    // decrease() {
    //   this.$store.state.counter--;
    // }

    // increase() {
    //   this.$store.commit('increase');
    // },

    // decrease() {
    //   this.$store.commit('decrement');
    // }

    // increase() {
    //   this.$store.dispatch('increase');
    // }

    /**
     * The map Actions snippet below are the same, es6 came into play
     **/
    //     //this an es6 alternative for increment: 'increment
    ...mapActions({
      increase: "increase",
      decrease: "decrease"
    }),

    // to avoid object repetition
    // ...mapActions([
    //     //this an es6 alternative for increment: 'increment'
    //  'increase',
    //  'decrease',
    // ])

    asyncIncrease(incrementalValue) {
      const objectValue = {
        incrementalValue
      };

      this.$store.dispatch("asyncIncrement", objectValue);
    }
  }
};
</script>

<style>
button {
  margin: 10px;
  width: 170px;
  height: 60px;
  font-size: 40px;
}
</style>
