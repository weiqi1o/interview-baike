<template>
  <div id="app">
    <landing class="landing"></landing>
    <router-view class="con" />
    <foot></foot>
  </div>
</template>

<script>
    import landing from "./components/landing/landing";
    import foot from "./components/common/foot";
    export default {
        components:{ landing ,foot },
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
  .con{
    min-height: calc(100vh - 249px);
  }
  .landing {
    display: none;
    z-index: 999;
  }
</style>
