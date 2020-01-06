<template>
    <div class="header">
        <div>
            <Row type="flex" align="middle">
                <Col :xs="0" :md="12">
                    <Row type="flex" align="middle">
                        <Col :xs="3" :md="2">
                            <a href="/" class="logo">
                                <img src="./../../../static/imgs/logo_search_page.png" alt=""/>
                            </a>
                        </Col>
                        <Col :xs="21" :md="22" >
                          <!--  <div class="label" >
                                <span v-for="item in 6">Java</span>
                            </div> -->
                        </Col>
                    </Row>
                </Col>
                <Col :xs="24" :md="12">
                    <headerL></headerL>
                </Col>
            </Row>
        </div>

    </div>
</template>

<script>
    import headerL from "./../../components/landing/headerL"

    export default {
        name: "headerTOP",
        components: { headerL},
        data() {
            return {
                lists: "",
                avatar: '002'
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
        mounted() {
        }
    };
</script>

<style scoped lang="less">
    .header {
        width: 100%;
        padding: 10px 0;
        box-sizing: border-box;
        background: #f4f4f4;
        &>div{
            max-width: 1200px;
            margin: 0 auto;
        }
        .logo {
            vertical-align: middle;
            margin-right: 15px;
            & > img {
                width: 40px;
            }
        }
        .label {
            width: 90%;
            display: inline-block;
            vertical-align: middle;
            &>span{
                color: #333333;
                font-size: 20px;
                padding: 0 10px;
                display: inline-block;
            }
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
        .demo-avatar {
            text-align: end;
            & > a {
                font-size: 16px;
                color: black;
                cursor: pointer;
            }
            & > div {

                .edit {
                    display: inline-block;
                    vertical-align: middle;
                    border-radius: 8px;
                    padding: 3px 5px;
                    background: #f5f2f0;
                    padding-right: 20px;
                    text-align: center;
                    margin-left: 15px;
                    cursor: pointer;
                    & > img {

                        width: 35px;
                        vertical-align: middle;
                    }
                    & > span {
                        font-size: 16px;
                        color: black;
                    }
                }

            }
        }
    }
</style>
