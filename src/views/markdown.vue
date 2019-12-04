<template>
    <div class="markdown">
        <div class="but">
            <Tooltip content="上传生成图片链接" placement="right">
                <Button class="Button" type="text" size="small" @click="modal1 = true">
                    <Icon size="18" type="md-images"/>
                </Button>
            </Tooltip>
            <Button class="Button" type="text" size="small" @click="publish">
                <Icon type="md-share-alt"/>
                发布文章
            </Button>
        </div>
        <Modal
                v-model="modal1"
                title="插入图片链接生成"
                @on-ok="ok">
            <Upload action="/">
                <Button icon="ios-cloud-upload-outline">选择图片</Button>
            </Upload>
        </Modal>
        <MarkdownPro :toolbars="save" :autoSave='autoSave' @on-save="handleOnSave" :height="height" v-model="val"/>
    </div>
</template>

<script>
    import {MarkdownPro} from 'vue-meditor'

    export default {
        name: "markdown",
        components: {
            MarkdownPro
        },
        data() {
            return {
                val: '``` javascript\n' +
                    '<template>\n' +
                    '    <div class="markdown">\n' +
                    '        <MarkdownPro :autoSave=\'autoSave\' @on-save="handleOnSave" :height="height" v-model="val"/>\n' +
                    '    </div>\n' +
                    '</template>\n' +
                    '```',
                height: '',
                autoSave: true,
                save: {
                    save: true,
                },
                modal1: false
            }
        },
        methods: {
            handleOnSave({value, theme}) {
                console.log(value, theme);
            },
            ok() {
                this.$Message.info('Clicked ok');
            },
            publish() {
                alert(this.val)
            }
        },
        mounted() {

        },
        beforeMount() {
            var height = document.documentElement.clientHeight || document.body.clientHeight;
            this.height = height;
        }
    }
</script>

<style scoped lang="less">
    .markdown {
        position: relative;
        .but {
            position: absolute;
            right: 50px;
            top: 0;
            z-index: 999999;
            border: none;
            padding: 8px 0;
            .Button {
                box-shadow: none;
            }
        }
    }


</style>
