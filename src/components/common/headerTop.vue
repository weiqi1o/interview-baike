<template>
<div class="header">
    <div class="search">
        <search></search>
    </div>
    <div class="nav">
        <span>IT</span>
        <span>视频</span>
        <span>图片</span>
        <span>网页</span>
    </div>

</div>
</template>

<script>
    import search from './search'
    export default {
        name: "headerTOP",
        components:{ search }
    }
</script>

<style scoped lang="less">

    .header{
        width: 100%;
        padding: 0 8%;
        box-sizing: border-box;
        background: url("./../../../static/imgs/logo_search_page.png") no-repeat calc(7% - 40px) top;
        background-size: 40px;
        .search{
            width: 640px;
        }
        .nav{
            width: 100%;
            margin: 0 auto;
            margin-top: 15px;
            &>span{
                cursor: pointer;
                color: #777;
                display: inline-block;
                margin-right: 20px;
                margin-bottom: 0;
                text-align: center;
                padding: 0 10px 5px;
                font-size: 14px;
                font-weight: 700;
                border-bottom: 2px solid white;
            }
            .active{
                border-color: #ACACAC;
            }
        }
    }

</style>
