<template>
    <div class="index">
        <div class="header">
            <Row>
                <Col :xs="0" :md="18" style="height: 1px"></Col>
                <Col :xs="24" :md="6">
                    <headerL></headerL>
                </Col>
            </Row>

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
        <landing class="landing"></landing>
    </div>
</template>

<script>
    // @ is an alias to /src
    import search from "./../components/common/search";
    import landing from "./../components/landing/landing";
    import headerL from './../components/landing/headerL'

    export default {
        name: "index",
        components: {search, landing,headerL},
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
            max-width: 1200px;
            margin: 0 auto;
            text-align: end;
            padding: 10px 0;


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
        .landing {
            display: none;
        }
    }
</style>
