<template>
    <p>
        Counter value is: {{ counter }} </p>
</template>

<script>
    export default {
        name: 'appResult',
        computed: {
            counter() {
                return this.$store.state.counter;
            }
        }
    }
</script>

<style>
    p{
        font-size: 40px;
    }
</style>