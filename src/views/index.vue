<template>
    <div class="index">
        <div class="header">
            <headerTop></headerTop>
        </div>
        <Row>
            <Col style="height: 1px" :xs="0" :md="6"></Col>
            <Col :xs="24" :md="12">
                <div class="searchBox" >
                    <img alt="Vue logo" src="./../../static/imgs/logo_index_zh_CN.png"/>
                    <search></search>
                    <p>这是一个<span>不追踪</span>你的搜索引擎</p>

                </div>
            </Col>
            <Col style="height: 1px" :xs="0" :md="6"></Col>
        </Row>
    </div>
</template>

<script>
    // @ is an alias to /src
    import search from "./../components/common/search";
    import headerTop from './../components/common/headerTop'

    export default {
        name: "index",
        components: {search,headerTop},
        data() {
            return {
                val: "",

            };
        },
        methods: {
        }
    };
</script>

<style lang="less">
    .index {
        .header {
            width: 100%;
            background: #f4f4f4;
        }
        .searchBox {
            width: 90%;
            margin: 0 auto;
            & > img {
                width: 75%;
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
                    color: #177cb0;
                    margin: 0 10px;
                }
            }
        }
    }
</style>
