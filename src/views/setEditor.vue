<template>
    <div class="edit">
        <h1>编辑文章</h1>
        <Divider/>
        <div class="title">
            <input type="text" placeholder="标题">
            <textarea placeholder="描述" rows="5"></textarea>
        </div>
        <Divider/>
        <div class="content">
            <h2>文章正文</h2>
            <router-link to="/markdown" class="edit">
                <img class="iconB" src="./../../static/imgs/b2.png" alt="">
                <span>写文章</span>
            </router-link>
        </div>

    </div>
</template>

<script>
    export default {
        name: "edit",
        data() {
            return {
                value17: ''
            }
        },
        methods: {}
    }
</script>

<style lang="less">
    .edit {
        & > h1 {
            width: 70%;
            margin: 0 auto;
            font-weight: normal;
            margin-top: 20px;
            font-size: 25px;
        }
        .title {
            width: 70%;
            margin: 0 auto;
            &>input {
                font-size: 32px;
                border: none;
                outline: none;
                width: 100%;
                margin-bottom:30px ;
                font-weight: bold;
                color: #515a6e;
            }
            &>textarea{
                font-size: 20px ;
                border: none;
                outline: none;
                width: 100%;
                color: #515a6e;
                resize:none
            }

        }
        .content{
            width: 70%;
            margin: 0 auto;
            .edit {
                display: block;
                width: 280px;
                border-radius: 40px;
                padding: 13px 5px;
                background: #333333;
                padding-right: 20px;
                text-align: center;
                margin: 80px auto;
                cursor: pointer;
                color: white;

                & > img {

                    width: 40px;
                    vertical-align: middle;
                }
                & > span {
                    font-size:25px;
                    color: white;
                    vertical-align: middle;
                }
            }
        }

    }

</style>
