<template>
    <div class="lists">
        <headerTop></headerTop>
        <div class="content">
            <div>
                <div v-for=" items in lists.data">
                    <h4>
                        <a href="">{{ items.title}}</a>
                    </h4>
                    <p>{{items.summary}}</p>
                    <div>
                        <span v-for="item in items.labels">{{item.name}}</span>
                    </div>
                </div>
                <pages :pageNum = lists ></pages>
            </div>
        </div>
        <pages v-show="lists.totalPage > 0" :pagesData="lists"></pages>
      </div>
    </div>
  </div>
</template>

<script>
import headerTop from "../components/common/headerTop";
import pages from "../components/common/pages";
import Bus from "./../../static/js/bus";

export default {
  name: "lists",
  components: { headerTop, pages },
  data() {
    return {
      lists: ""
    };
  },
  mounted() {
    var _this = this;
    Bus.$on("newList", function(val) {
      _this.lists = val;
    });
  }
};
</script>

<style scoped lang="less">
.content {
  width: 1200px;
  margin: 0 auto;
  margin-top: 20px;
  & > div {
    width: 800px;
    & > div {
      & > h4 {
        & > a {
          display: block;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          color: #365bb3;
          text-decoration: none;
        }
        &:visited {
          color: #600090;
        }
        a:hover {
          text-decoration: underline;
        }
      }
      & > p {
        margin-top: 7px;
        margin-bottom: 0;
        word-wrap: break-word;
        color: #646464;
        font-size: 14px;
        line-height: 22px;
      }
      & > div {
        color: #006d21;
        font-size: 13px;
        margin-bottom: 26px;
        margin-top: 4px;
        & > span {
          display: inline-block;
          max-width: 70%;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
      }
    }
  }
}
</style>
