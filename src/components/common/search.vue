<template>
    <div class="search">
        <!--<input v-model="val"@keyup.enter="serach"/>-->
        <AutoComplete
                v-model="val"
                @on-search="handleSearch2"
                @on-select='serach_'
                placeholder="搜索..."
                style="width:100%">
            <Option v-for="item in data2" :value="item" :key="item">{{ item }}</Option>
        </AutoComplete>
        <button @click="serach_">
            <img src="./../../../static/imgs/icon_search.png" alt=""/>
        </button>
    </div>
</template>

<script>
    import Bus from "./../../../static/js/bus";

    export default {
        name: "search",
        data() {
            return {
                val: "",
                data2: []
            };
        },
        created() {
            if (this.$route.query.data) {
                this.val = this.$route.query.data;
                this.search({data: this.val}).then(response => {
                    if (response.code == 200) {
                        this.passValue(response.result);
                    }
                });
            }
        },
        methods: {
            handleSearch2(value) {
                var _this = this;
                this.getQuestionSimilar({title: value}).then((res) => {
                    if (res.code == 200 && this.val != '') {
                        this.data2 = [];
                        res.result.forEach((v) => {
                            this.data2.push(v.title)
                        })
                    }

                });
                $('.search input').keydown(function () {
                    if (event.keyCode == 13) {
                        _this.serach_()
                    }
                })
            },
            //传值给列表组件
            passValue(val) {
                Bus.$emit("newList", val);
            },
            //搜索
            serach_(value) {
                if(!this.val) return;
                if (!this.$route.query.data) {
                    var data = typeof(value)=='string'?value:this.val
                    //首页搜索
                    this.$router.push({
                        path: "/lists",
                        query: {data: data}
                    });
                }else {
                    //列表页搜索
                    var data = typeof(value)=='string'?value:this.val
                    this.search({data:data}).then(response => {
                        if (response.code == 200) {
                            this.passValue(response.result);
                        }
                    });
                }
            }
        },
        mounted() {

        }
    };
</script>

<style lang="less">
    .search {
        width: 100%;
        position: relative;
        box-shadow: 1px 1px 6px 0 rgba(119, 119, 119, 0.5);
        border-radius: 25px;
        input {
            width: 100%;
            height: 45px;
            font-size: 18px;
            border: 0;
            border-radius: 25px;
            border: none;
            outline: none;
            text-indent: 1em;
            &:focus {
                box-shadow: none;
            }
        }

        & > button {
            width: 65px;
            height: 45px;
            color: #000;
            outline: 0;
            text-indent: -9999px;
            background: url(./../../../static/imgs/icon_search.png) no-repeat center center;
            background-size: 20px 20px;
            position: absolute;
            top: 0;
            right: 0;
            border: none;
            z-index: 100;
            cursor: pointer;
        }
    }
</style>
