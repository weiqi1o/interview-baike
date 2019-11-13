<template>
    <div class="search">
        <input
                type="search"
                v-model="val"
                placeholder="搜索..."
                @keyup.enter="serach"
        />
        <button @click="serach">
            <img src="./../../../static/imgs/icon_search.png" alt=""/>
        </button>
        {{val.val}}
    </div>
</template>

<script>
    import Bus from './../../../static/js/bus'

    export default {
        name: "search",
        data() {
            return {
                val: "",
            };
        },
        created(){
            if (this.$route.query.data) {
                this.val = this.$route.query.data;
                this.getData();
            }
        },
        methods: {
            //传值给列表组件
            passValue(val) {
                Bus.$emit('newList', val);
            },
            //搜索
            serach() {
                if (!this.$route.query.data) {
                    //首页搜索
                    this.$router.push({
                        path: "/lists", query: {data: this.val}
                    });
                }else{
                    //列表页搜索
                   this.getData();
                }



            },

            //获取数据
            getData(){
                this.getRequest("http://132.232.33.218:8081/v1/questions", {data: this.val})
                    .then(response => {
                        if (response.code == 200) {
                            this.passValue(response.result);
                        }
                    });
            }
        },
        mounted() {
        }
    };
</script>

<style scoped lang="less">
    .search {
        width: 100%;
        position: relative;
        & > input {
            width: 100%;
            height: 45px;
            font-size: 18px;
            box-shadow: 1px 1px 6px 0 rgba(119, 119, 119, 0.5);
            border: 0;
            border: none;
            border-radius: 25px !important;
            padding-left: 20px;
            padding-right: 60px;
            box-sizing: border-box;
            outline: none;
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
