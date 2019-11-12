<template>
    <div class="index">
        <div class="searchBox">
            <img alt="Vue logo" src="./../../static/imgs/logo_index_zh_CN.png"/>
            <search></search>
            <p>这是一个<span>不追踪</span>你的搜索引擎</p>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import search from './../components/common/search'

    export default {
        name: "index",
        components: {search},
        data() {
            return {
                val: ''
            }
        },
        methods: {
            serach() {
                console.log(this.val)
            }

        }
    };
</script>

<style lang="less">
    .index {
        .searchBox {
            width: 640px;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            & > img {
                width: 460px;
                display: block;
                margin: 0 auto;
                margin-bottom: 25px;
            }
            & > p {
                margin-top: 20px;
                color: #9b9b9b;
                font-size: 16px;
                font-weight: 400;
                & > span {
                    color: #177CB0;
                    margin: 0 10px;
                }
            }

        }
    }
</style>
