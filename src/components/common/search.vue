<template>
    <div class="search">
        <input type="search" v-model="val" placeholder="搜索..." @keyup.enter="serach">
        <button @click="serach"><img src="./../../../static/imgs/icon_search.png" alt=""></button>
    </div>
</template>

<script>
    export default {
        name: "search",
        data() {
            return {
                val: ''
            }
        },
        methods: {
            serach() {
                console.log(this.val)
            }

        }
    }
</script>

<style scoped lang="less">
        .search {
            width: 100%;
            position: relative;
            & > input {
                width: 100%;
                height: 45px;
                font-size: 18px;
                box-shadow: 1px 1px 6px 0 rgba(119, 119, 119, .5);
                border: 0;
                border: none;
                border-radius: 25px !important;
                padding-left: 20px;
                padding-right: 60px;
                box-sizing: border-box;
                outline: none;
            }
            & > button {
                width: 65px;
                height: 45px;
                color: #000;
                outline: 0;
                text-indent: -9999px;
                background: url(./../../../static/imgs/icon_search.png) no-repeat center center;
                background-size: 20px 20px;
                position: absolute;
                top: 0;
                right: 0;
                border: none;
                z-index: 100;
                cursor: pointer;
            }
        }

</style>
