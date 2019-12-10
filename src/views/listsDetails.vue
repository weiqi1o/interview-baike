<template>
    <div class="MarkdownPreview">
        <headerTop></headerTop>
        <div class="content">
            <Row type="flex" justify="space-between">
                <Col span="16">
                    <MarkdownPreview theme="oneDark" :initialValue="val" copyCode copyBtnText="复制代码"/>
                </Col>
                <Col span="7">
                    <div class="card">
                        <Card >
                            <p slot="title">No border title</p>
                            <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
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
                    this.val = res.result.content
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

</style>
