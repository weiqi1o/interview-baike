<template>
	<div class="index">
		<div class="header">
			<headerTop></headerTop>
		</div>
		<Row>
			<Col style="height: 1px" :xs="0" :md="6">
			</Col>
			<Col :xs="24" :md="12">
			<div class="searchBox">
				<img alt="Vue logo" src="./../../static/imgs/logo_index_zh_CN.png" />
				<search></search>
				<p>本站共收录了<span>{{count}}</span>道题目</p><router-link tag="a" to="/markdown">贡献题目</router-link>
			</div>
			</Col>
			<Col style="height: 1px" :xs="0" :md="6">
			</Col>
		</Row>
	</div>
</template>

<script>
	// @ is an alias to /src
	import search from "./../components/common/search";
	import headerTop from './../components/common/headerTop'

	export default {
		name: "index",
		components: {
			search,
			headerTop,
		},
		data() {
			return {
				val: "",
				count: 0,
                join:true
			};
		},
		created() {
			this.countQuestionNum('').then((res) => {
				if (res.code == 200) {
					this.count = res.result
				}

			})
		},
		methods: {},

	};
</script>

<style lang="less">
	.index {
		.header {
			width: 100%;
			background: #f4f4f4;
		}

		.searchBox {
			width: 90%;
			margin: 0 auto;

			&>img {
				width: 75%;
				display: block;
				margin: 0 auto;
				margin-bottom: 25px;
			}

			&>p {
				margin-top: 20px;
				color: #9b9b9b;
				font-size: 16px;
				font-weight: 400;

				&>span {
					color: #177cb0;
					margin: 0 10px;
				}
			}
		}
	}
</style>
