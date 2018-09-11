<template>
  <div class="text-center" style="margin-top: 100px">
    <p class="font-weight-bold">Demonstration of state using Vuex</p>
    <br>
    <app-result/>
    <br>
    <app-counter/>
  </div>
</template>

<script>
  import appCounter from "./components/counter";
  import appResult from "./components/display";
  
  export default {
    name: "app",
    components: {
      appCounter,
      appResult
    }
  };
</script>
