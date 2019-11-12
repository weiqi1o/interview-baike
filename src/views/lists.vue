<template>
    <div class="lists">
        <headerTop></headerTop>
        <div class="content">
            <div>
                <div>
                    <h4>
                        <a href="">SSS_百度百科</a>
                    </h4>
                    <p>下载手机版必应词典n.特殊溶性物质；物生可溶物质网络病态窦房结综合征(sick sinus syndrome)；世界战线；病窦综合征
                        词典n.特殊溶性物质；物生可溶物质网络病态窦房结综合征(sick sinus syndrome)；世界战线；病窦综合征
                        词典n.特殊溶性物质；物生可溶物质网络病态窦房结综合征(sick sinus syndrome)；世界战线；病窦综合征
                        词典n.特殊溶性物质；物生可溶物质网络病态窦房结综合征(sick sinus syndrome)；世界战线；病窦综合征
                        词典n.特殊溶性物质；物生可溶物质网络病态窦房结综合征(sick sinus syndrome)；世界战线；病窦综合征
                        词典n.特殊溶性物质；物生可溶物质网络病态窦房结综合征(sick sinus syndrome)；世界战线；病窦综合征</p>
                    <div>
                        <span>https://baike.baidu.com/item/SSS/1502470</span>
                    </div>
                </div>
                <pages></pages>
            </div>
        </div>
    </div>
</template>

<script>
    import headerTop from "../components/common/headerTop";
    import pages from '../components/common/pages'

    export default {
        name: "lists",
        components: {headerTop,pages}
    };
</script>

<style scoped lang="less">
    .content {
        width: 1200px;
        margin: 0 auto;
        margin-top: 20px;
        & > div {
            width: 800px;
            & > div {
                & > h4 {
                    & > a {
                        display: block;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        color: #365bb3;
                        text-decoration: none;
                    }
                    &:visited {
                        color: #600090;
                    }
                    a:hover{text-decoration:underline}
                }
                & > p {
                    margin-top: 7px;
                    margin-bottom: 0;
                    word-wrap: break-word;
                    color: #646464;
                    font-size: 14px;
                    line-height: 22px;
                }
                & > div {
                    color: #006D21;
                    font-size: 13px;
                    margin-bottom: 26px;
                    margin-top: 4px;
                    & > span {
                        display: inline-block;
                        max-width: 70%;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        overflow: hidden;
                    }
                }

            }
        }

    }
</style>
