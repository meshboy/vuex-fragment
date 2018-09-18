<template>
    <div>
        <p> Counter value is: {{ counter }} </p>
        <p> Counter incremental value by (10) is: {{ increment }} </p>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "appResult",

//   computed: {
//     counter() {
//       return this.$store.getters.addCurrencyToCounter;
//     }
//   }

  /**
   * map the method(s) in getters to a property
   */
  // computed: mapGetters({
  //     counter: 'addCurrencyToCounter',
  //     increment: 'incrementCounterByTen'
  // })

  /**
   * using spread operator
   * This is useful when other properties are to be
   * added to computed proptery
   */
    computed: {
      ...mapGetters({
        counter: "addCurrencyToCounter",
        increment: "incrementCounterByTen"
      })
    }
};
</script>

<style>
p {
  font-size: 40px;
}
</style>