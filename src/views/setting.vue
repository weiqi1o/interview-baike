<template>
    <div class="setting">
        <headerTop></headerTop>
        <div class="banner">
            <Row >
                <Col :xs="12" :md="12">
                    <div class="Avatar">
                        <Avatar size="large" class="Avatar_" src="https://i.loli.net/2017/08/21/599a521472424.jpg"/>
                        <div>
                            <h4>你好你好你好</h4>
                            <div>
                                <span v-for="item in 5">java</span>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col :xs="12" :md="12" >
                    <div class="data">
                        <div>
                            <span>6</span>
                            <span>发布题目</span>
                        </div>
                        <div>
                            <span>200</span>
                            <span>浏览数总数</span>
                        </div>
                        <div>
                            <span>100</span>
                            <span>点赞总数</span>
                        </div>
                    </div>
                </Col>
            </Row>

        </div>
        <div class="content">
            <Menu class="nav" v-show="mode2" mode="vertical" :theme="theme1"  active-name="1">
                <MenuItem name="1">
                    <Icon type="ios-paper" />
                    内容管理
                </MenuItem>
                <MenuItem name="2">
                    <Icon type="ios-people"  />
                    用户管理
                </MenuItem>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-stats"  />
                        统计分析
                    </template>
                    <MenuGroup title="使用">
                        <MenuItem name="3-1">新增和启动</MenuItem>
                        <MenuItem name="3-2">活跃分析</MenuItem>
                        <MenuItem name="3-3">时段分析</MenuItem>
                    </MenuGroup>
                    <MenuGroup title="留存">
                        <MenuItem name="3-4">用户留存</MenuItem>
                        <MenuItem name="3-5">流失用户</MenuItem>
                    </MenuGroup>
                </Submenu>
                <MenuItem name="4">
                    <Icon type="ios-construct"  class="icon"/>
                    综合设置
                </MenuItem>
            </Menu>
            <Menu class="nav" v-show="!mode2" mode="horizontal" :theme="theme1"  active-name="1">
                <MenuItem name="1">
                    内容管理1
                </MenuItem>
                <MenuItem name="2">
                    用户管理
                </MenuItem>
                <Submenu name="3">
                    <template slot="title">
                        统计分析
                    </template>
                    <MenuGroup title="使用">
                        <MenuItem name="3-1">新增和启动</MenuItem>
                        <MenuItem name="3-2">活跃分析</MenuItem>
                        <MenuItem name="3-3">时段分析</MenuItem>
                    </MenuGroup>
                    <MenuGroup title="留存">
                        <MenuItem name="3-4">用户留存</MenuItem>
                        <MenuItem name="3-5">流失用户</MenuItem>
                    </MenuGroup>
                </Submenu>
                <MenuItem name="4">
                    综合设置
                </MenuItem>
            </Menu>
            <div class="item">
                <basics></basics>
            </div>
        </div>

    </div>
</template>

<script>
    import headerTop from "../components/common/headerTop";
    import search from "./../components/common/search";
    import basics from "./../components/set/basics"

    export default {
        name: "setting",
        components: {search, basics, headerTop},
        data() {
            return {
                avatar: true,
                theme1: 'light',
                mode2:'vertical',
            }
        },
        methods:{
            resize(){
                var _this = this;
                if($(window).width()<=480){
                    this.mode2 =''
                }
                $(window).resize(function () {
                    if($(window).width()<=480 && _this.mode2 =='vertical'){
                        _this.mode2 =''
                    }
                    if($(window).width()>480 && _this.mode2 ==''){
                        _this.mode2 ='vertical'
                    }
                });
            }

        },
        mounted(){
            this. resize()
        }
    }
</script>

<style scoped lang="less">
    .setting {
        width: 100%;
        .header {
            width: 100%;
            background: #333;

        }
        .banner {
            background: #0092ca;
            width: 100%;
            padding: 30px 0;
            & > div {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 90%;
                margin: 0 auto;
                .Avatar {
                    .Avatar_ {
                        width: 100px;
                        height: 100px;
                    }
                    & > div {
                        margin-left: 20px;
                        display: inline-block;
                        & > h4 {
                            color: white;
                            font-size: 20px;
                            margin-bottom: 10px;
                        }
                        & > div {
                            & > span {
                                font-size: 15px;
                                padding: 0 8px;
                                background: white;
                                border-radius: 2px;
                                display: inline-block;
                                margin-right: 5px;
                            }
                        }
                    }
                }
                .data {
                    background: #1c4763;
                    padding: 5px 10px;
                    display: inline-block;
                    & > div {
                        margin-left: 0;
                        padding: 0 35px;
                        border-right: 1px solid #0092ca;
                        display: inline-block;
                        & > span:nth-of-type(1) {
                            display: block;
                            font-size: 26px;
                            color: white;
                            font-weight: bold;
                            text-align: center;
                        }
                        & > span:nth-of-type(2) {
                            font-size: 12px;
                            color: white;
                            text-align: center;
                        }
                    }
                    & > div:nth-last-of-type(1) {
                        border-right: none;
                    }
                }
            }

        }
        .content {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            margin-top: 30px;
            .nav {
                display: inline-block;
            }
            .item {
                width: 60%;
                display: inline-block;
                vertical-align: top;
                margin: 30px;
                box-sizing: border-box;
            }
        }

    }
    @media all and  (max-width:870px) and (min-width:481px)  {
        .data{
            &>div{
                display: block !important;
                border: none !important;
            }
        }
        .nav{
            width: auto !important;
        }
    }
    @media all and (max-width:480px) {
        .nav{
            width: 100% !important;
        }
        .ivu-menu-item,.ivu-menu-submenu{
            padding: 0 5px !important;
        }
        .data{
            &>div{
                display: block !important;
                border: none !important;
            }
        }
    }

</style>
