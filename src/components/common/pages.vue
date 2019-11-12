<template>
    <div class="lotus-pagination" id="lotus-pagination">
        <div class="lotus-pagination-total" id="lotus-pagination-total">共有<span id="lotus-pagination-total-num"></span>条记录
        </div>
        <div class="lotus-pagination-list" id="lotus-pagination-list">
            <a id="lotus-pagination-list-prev" href="javascript:void(0);">< 上一页</a>
            <div class="lotus-pagination-list-item" id="lotus-pagination-list-item"></div>
            <a id="lotus-pagination-list-next" href="javascript:void(0);">下一页 ></a>
            <span class="lotus-pagination-list-total" id="lotus-pagination-list-total"></span>
            <span class="lotus-pagination-list-go">到第 <label><input id="lotus-pagination-list-cur" value="1"
                                                                    type="text"></label> 页</span>
            <span class="lotus-pagination-list-ensure" id="lotus-pagination-list-ensure">确定</span>
        </div>
    </div>
</template>

<script>
    import './../../../static/css/pages.css'
    import './../../../static/js/pages'

    export default {
        name: "pages",
        data(){
            return{
                pageIndex:0,
                totalNum:100,
                showPageSize:10,

            }
        },
        methods:{
            getData() {
                this.axios
                    .get("http://132.232.33.218:8081/v2/api-docs/v1/questions")
                    .then(response => {
                        if (response.status == 200) {
                            this.lists = response.data
                        }
                    });
            },
        },
        mounted() {
            var _this = this;
            lotusPagination.init({
                index: 0,//翻页索引值
                totalNum: _this.totalNum,//总数量
                showPageSize: _this.showPageSize,//一页显示多少个
                maxShowNum: 5,//分页最大显示数量
                parentDom: 'lotus-pagination',
                leftPageTotal: 'lotus-pagination-total-num',
                domItemList: 'lotus-pagination-list-item',
                prevBtn: 'lotus-pagination-list-prev',
                nextBtn: 'lotus-pagination-list-next',
                enSureBtn: 'lotus-pagination-list-ensure',
                curNum: 'lotus-pagination-list-cur',
                rightPageTotal: 'lotus-pagination-list-total',
                hideLeftPageTotal: false,
                callback: function (response) {
                    _this.pageIndex = response + 1;
                    _this.getData();
                    $('body,html').animate({
                        scrollTop: "27px"
                    }, 200)
                }
            });

        }
    }
</script>

<style scoped>

</style>
