<template>
    <div class="MarkdownPreview">
        <div class="content">
            <Row type="flex" justify="space-between">
                <Col span="16">
                    <h1 class="title">{{val.title}}</h1>
                    <MarkdownPreview theme="oneDark" :initialValue="val.content" copyCode copyBtnText="复制代码"/>
                </Col>
                <Col span="7">
                  
                </Col>
            </Row>
        </div>

    </div>
</template>

<script>
    import {MarkdownPreview} from 'vue-meditor'

    export default {
        name: "checkContent",
        components: {
            MarkdownPreview
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
			// val current = this.getStore("userId");
			// if (current == null || current == undefined){
			// 	this.val = "";
			// }else{
			// 	this.getQRecord(this.$route.query.id, '').then((res) => {
			// 	    if (res.code == 200) {
			// 	        this.val = res.result
			// 	    }
				
			// 	});
			// }
           
            // this.$router.afterEach((to, from, next) => {
            //     window.scrollTo(0, 0);
            // });
        },
        methods: {
		},

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
    .title{
        font-weight: normal;
		padding-left: 12px;
        margin: 15px 0;
    }
	

</style>
