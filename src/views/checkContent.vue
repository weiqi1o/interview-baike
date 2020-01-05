<template>
    <div class="markdown">
        <headerTop></headerTop>
        <div class="mar">
			<MarkdownPreview  theme="oneDark" :initialValue="val.content" copyCode copyBtnText="复制代码"/>
        </div>
    </div>
</template>

<script>
    import {MarkdownPreview} from 'vue-meditor'
    import headerTop from './../components/common/headerTop';
    export default {
        name: "checkContent",
        components: {
            MarkdownPreview,headerTop
        },
        data() {
            return {
                val: ''
            }
        },
        created() {
			this.getQRecord(this.$route.query.id, '').then((res) => {
			    if (res.code == 200) {
			        this.val = res.result
			    }
			
			});
        },
        methods: {
		}

    }
</script>


<style lang="less">
    .mar {
        max-width: 1200px;
        margin: 0 auto;
        position: relative;
    }

    /*.edit{*/
    /*display: none !important;*/
    /*}*/
    @media all and  (min-width: 481px) {
        .but {
            right: 5px;
        }
    }
</style>