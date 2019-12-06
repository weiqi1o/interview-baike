<template>
  <div id="app">
    <landing class="landing"></landing>
    <router-view />
  </div>
</template>

<script>
    import landing from "./components/landing/landing";
    export default {
        components:{ landing },
    }
</script>
<style lang="less">
  *{
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .landing {
    display: none;
    z-index: 999;
  }
</style>
