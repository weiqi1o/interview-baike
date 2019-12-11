<template>
    <div class="markdown">
        <headerTop></headerTop>
        <div class="mar">
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
            <MarkdownPro class="MarkdownPro" :toolbars="save" autoSave @on-save="handleOnSave" :bordered='bordered' :height="height" v-model="content"/>
        </div>

    </div>
</template>

<script>
    import {MarkdownPro} from 'vue-meditor'
    import headerTop from "../components/common/headerTop";
    export default {
        name: "markdown",
        components: {
            MarkdownPro,headerTop
        },
        data() {
            return {
                content: '``` javascript\n' +
                    '<template>\n' +
                    '    <div class="markdown">\n' +
                    '        <MarkdownPro :autoSave=\'autoSave\' @on-save="handleOnSave" :height="height" v-model="val"/>\n' +
                    '    </div>\n' +
                    '</template>\n' +
                    '```',
                height: '',
                bordered: false,
                save: {
                    save: true,
                },
                modal1: false,
                val:''
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
                this.val= {
                    title:this.$route.query.v.title,
                    labels:this.$route.query.v.labels,
                    description:this.$route.query.v.description,
                    content:this.content
                };
                this.addQuestion(this.val).then((res)=>{
                    console.log(res)
                })
            },
            isMobile() {
                if (navigator.userAgent.match(/Android/i)
                    || navigator.userAgent.match(/webOS/i)
                    || navigator.userAgent.match(/iPhone/i)
                    || navigator.userAgent.match(/iPad/i)
                    || navigator.userAgent.match(/iPod/i)
                    || navigator.userAgent.match(/BlackBerry/i)
                    || navigator.userAgent.match(/Windows Phone/i)
                ) return true;
                return false;
            }

        },
        mounted() {
            if (this.isMobile()) {
                this.save = {
                    save: true,
                    h1:false,
                    h3:false,
                    strong: false,
                    italic: false,
                    overline: false,
                    quote: false,
                    ul: false,
                    ol: false,
                    checked: false,
                    notChecked: false,
                    split: false,
                    theme: false,
                    exportmd: false,
                    importmd: false,
                    table: false,
                    hr:false,
                    fullscreen:false
                };
                $('.but').css({'right':'30px'});
                $('.codemirror').css({'overflow':'initial'})
            }
        },
        beforeMount() {
            var height = document.documentElement.clientHeight || document.body.clientHeight;
            this.height = height - 66;
        }
    }
</script>

<style  lang="less">
    .mar {
        max-width: 1200px;
        margin: 0 auto;
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

    /*.edit{*/
        /*display: none !important;*/
    /*}*/
    @media all and  (min-width:481px)  {
        .but {
            right: 5px;
        }
    }
</style>
