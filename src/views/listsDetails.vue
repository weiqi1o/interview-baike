<template>
    <div class="MarkdownPreview">
        <headerTop></headerTop>
        <div class="content">
            <Row type="flex" justify="space-between">
                <Col span="16">
                    <h1 class="title">{{val.title}}</h1>

                    <MarkdownPreview theme="oneDark" :initialValue="val.content" copyCode copyBtnText="复制代码"/>
                    <div class="rate">
                        <div>
                            <span>收藏</span>|<span>喜欢</span>
                        </div>
                        <router-link :to="{path:'/markdown',query:{supplement:val.id}}">提交更好的答案</router-link>
                    </div>
                </Col>
                <Col span="7">
                    <div class="card">
                        <Card >
                            <p slot="title">贡献者</p>
                            <Tooltip class="avatar" v-for="(item,index) in 10" :content="'的撒的第'+index" placement="top-start">
                                <Avatar size="large" class="hImg" src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                            </Tooltip>
                        </Card>
                    </div>
                </Col>
            </Row>
        </div>

    </div>
</template>

<script>
    import headerTop from './../components/common/headerTop'
    import {MarkdownPreview} from 'vue-meditor'

    export default {
        name: "listsDetails",
        components: {
            MarkdownPreview,headerTop
        },
        data() {
            return {
                val: ''

            }
        },
        created() {
            this.getDetails(this.$route.query.id, '').then((res) => {
                if (res.code == 200) {
                    this.val = res.result
                    console.log(res)
                }

            })
        },
        methods: {},

    }
</script>

<style scoped lang="less">
    .MarkdownPreview{

        margin: 0 auto;
        .content{
            max-width: 1200px;
            margin: 0 auto;
        }
    }
    .card{
        padding: 30px 0;
    }
    .title{
        font-weight: normal;
		padding-left: 12px;
        // text-align: center;
        margin-top: 15px;
		border-bottom: 1px solid #d9d9d9;
    }
    .rate{
        display: flex;
        justify-content: space-between;
        align-items: center;
        &>div{
            &>span{
                display: inline-block;
                margin:0 5px;
                cursor: pointer;
                &:hover{
                    color: #409eff;
                }
            }

        }
    }
    .avatar{
        display: inline-block;
        width: 20%;
        .hImg{
            display: block;
            margin: 0 auto;
        }
    }

</style>
