<template>
  <div class="header">
    <a href="/">
      <img src="./../../../static/imgs/logo_search_page.png" alt="" />
    </a>
    <div class="search">
      <search></search>
    </div>
    <div class="nav">
      <span class="active" @click="choose($event.currentTarget)">IT</span>
      <span @click="choose($event.currentTarget)">视频</span>
      <span @click="choose($event.currentTarget)">图片</span>
      <span @click="choose($event.currentTarget)">网页</span>
    </div>
  </div>
</template>

<script>
import search from "./search";
export default {
  name: "headerTOP",
  components: { search },
  data() {
    return {
      lists: ""
    };
  },
  methods: {
    active(node) {
      if (!$(node).hasClass("active")) {
        $(node)
          .siblings()
          .removeClass("active");
        $(node).addClass("active");
      }
    },
    choose(node) {
      this.active(node);
    }
  },
  mounted() {}
};
</script>

<style scoped lang="less">
.header {
  width: 100%;
  padding: 0 8%;
  box-sizing: border-box;
  background: #f4f4f4;
  padding-top: 15px;
  & > a {
    vertical-align: middle;
    margin-right: 15px;
    & > img {
      width: 40px;
    }
  }
  .search {
    width: 640px;
    display: inline-block;
    vertical-align: middle;
  }
  .nav {
    width: 100%;
    margin: 0 auto;
    margin-top: 15px;
    & > span {
      cursor: pointer;
      color: #777;
      display: inline-block;
      margin-right: 20px;
      margin-bottom: 0;
      text-align: center;
      padding: 0 10px 5px;
      font-size: 14px;
      font-weight: 700;
      border-bottom: 2px solid #f4f4f4;
    }
    .active {
      border-color: #acacac;
    }
  }
}
</style>
