<template>
    <div class="MarkdownPreview">
        <headerTop></headerTop>
        <div class="content">
            <Row type="flex" justify="space-between">
                <Col span="16">
                    <h1 class="title">{{val.title}}</h1>
                    <MarkdownPreview theme="oneDark" :initialValue="data" copyCode copyBtnText="复制代码"/>
                    <div class="rate">
                        <div>
                            <span>收藏</span>|<span>喜欢</span>
                        </div>
                        <a href="">提交更好的答案</a>
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
                val: '',
                data:'``` javascript\n' +
                        '<template>\n' +
                    '    <div class="markdown">\n' +
                    '        <MarkdownPro :autoSave=\'autoSave\' @on-save="handleOnSave" :height="height" v-model="val"/>\n' +
                    '    </div>\n' +
                    '</template>\n' +
                    '```'

            }
        },
        created() {
            this.getDetails(this.$route.query.id, '').then((res) => {
                if (res.code == 200) {
                    this.val = res.result
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
        text-align: center;
        margin-top: 15px;
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
