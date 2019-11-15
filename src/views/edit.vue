<template>
    <div class="edit">
        <Row class="h">
            <Col span="4" class="h">
                <div class="menu-1">
                    <a href="/">返回主页</a>
                    <div>
                        <span @click="newAddArticle">
                             <Icon size="20" type="md-add" />
                            新建题集
                        </span>
                        <div v-show="add">
                            <input type="text" v-model="newTitle" class="title" placeholder="请输入题集名...">
                            <div>
                                <Button  shape="circle"  ghost>提交</Button>
                                <Button type="text" ghost @click="editArticleTitieHide()">取消</Button>
                            </div>
                        </div>

                    </div>
                    <ul>
                        <li class="active" @click="chooseTopic($event.currentTarget)">日记本</li>
                        <li @click="chooseTopic($event.currentTarget)">随笔</li>
                        <li @click="chooseTopic($event.currentTarget)" v-for="item in title">
                            <Col span="21" class="tit1">{{item}}</Col>
                            <Col span="3">
                                <Dropdown placement="bottom-end" trigger="click">
                                    <a href="javascript:void(0)">
                                        <Icon type="ios-more" color="white" size="20" />
                                    </a>
                                    <DropdownMenu slot="list">
                                        <DropdownItem><Icon type="ios-create-outline" />修改题目</DropdownItem>
                                        <DropdownItem><Icon type="ios-trash-outline" />删除题目</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </Col>
                        </li>
                    </ul>
                </div>
            </Col>
            <Col span="20" class="h">
                <Col span="8" class="h">
                   文章列表
                </Col>
                <Col span="16" class="h">
                    编辑器
                </Col>
            </Col>
        </Row>

    </div>
</template>

<script>
    export default {
        name: "edit",
        data(){
            return{
                add:false,
                newTitle:'',
                title:['dsdasdas','xasd','不检查考试','dsdasdas','xasd','不检查考试','dsdasdas','xasd','不检查考试','dsdasdas','xasd','不检查考试','dsdasdas','xasd','不检查考试','dsdasdas','xasd','不检查考试','dsdasdas','xasd','不检查考试','dsdasdas','xasd','不检查考试','dsdasdas','xasd','不检查考试']

            }
        },
        methods:{
            //新增题集
            newAddArticle(){
               this. editArticleTitieShow()
            },
            // 显示题集编辑
            editArticleTitieShow(){
                this.add = true;
                this.$nextTick(function(){
                    $('.title').focus();
                })
            },
            // 收起题集编辑
            editArticleTitieHide(){
                this.add = false;
            },
            //题集提交
            articleTitieSub(){
                console.log()

            },
            //题集选择
            chooseTopic(node){
                if(!$(node).hasClass('active')){
                    $(node).siblings().removeClass('active');
                    $(node).addClass('active');
                }
            }

        }
    }
</script>

<style scoped lang="less">
    .edit{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        .h{
            height: 100%;
        }
        .menu-1{
            width: 100%;
            height: 100%;
            background: #404040;
            padding-top: 30px;
            &>a{
                width: 85%;
                border:1px solid #409eff;
                padding: 8px;
                text-align: center;
                font-size: 15px;
                border-radius: 25px;
                display: block;
                margin: 0 auto;
                margin-bottom: 30px;
            }
            &>div{
                width: 100%;
                &>span{
                    width: 100%;
                    display: block;
                    margin-bottom: 10px;
                    cursor: pointer;
                    color: #f2f2f2;
                    font-size: 16px;
                    font-weight: bold;
                    line-height: 1.5;
                    padding: 0 15px;
                    box-sizing: border-box;

                }
                &>div{
                    width: 85%;
                    margin: 0 auto;
                    margin-bottom: 10px;
                    &>input{
                        width: 100%;
                        height: 35px;
                        outline: none;
                        border: none;
                        border: 1px solid #333;
                        padding: 4px 6px;
                        color: #ccc;
                        font-size: 14px;
                        line-height: 20px;
                        margin-bottom: 10px;
                        background-color: #595959;
                    }
                    &>div{
                        display: flex;
                        justify-content: space-between;
                    }
                }
            }
            &>ul{
                width: 100%;
                height: calc(100% - 130px);
                overflow-y: auto;
                &>li{
                    width: 100%;
                    padding: 0 15px;
                    box-sizing: border-box;
                    display: flex;
                    align-items: center;
                    clear: both;
                    line-height: 40px;
                    font-size: 15px;
                    color: #f2f2f2;
                    cursor: pointer;
                    border-left: 4px solid #404040;
                    &:hover{
                        background: #666666;
                    }
                    .tit1{
                        line-height: 40px;
                        font-size: 15px;
                        color: #f2f2f2;
                        cursor: pointer;
                    }

                }
                .active{
                    border-left: 4px solid #409eff;
                    background: #666;
                }
            }
        }
    }

</style>
