<template>
	<div class="edit">
		<div class="title">
			<!-- <input type="text" v-if="!supplementId" v-model="title" placeholder="添加标题"  @on-change="similarTitle()"> -->
			<AutoComplete style="margin-bottom: 10px;" v-if="!supplementId" v-model="title" size="large" placeholder="输入题目"
			 @on-change="similarTitle">
				<div class="demo-auto-complete-item">
					<div v-if="similarList != null && similarList.length > 0" class="demo-auto-complete-group">
						<span>发现相似题目,看看是否重复了?</span>
					</div>
					<Option v-for="option in similarList" :value="option.title" :key="option.id">
						<span class="demo-auto-complete-title">{{ option.title }}</span>
						<router-link style="float: right;" :to="{path:'/lists/details',query:{id:option.id}}" target="_blank">
							查看
						</router-link>
					</Option>
				</div>
			</AutoComplete>
			<input type="text" v-else v-model="supplementVal.title" readonly class="supplementTitle">
			<div v-if="!supplementId">
				<Tag v-for="item in checkedLabels" v-if="checkedLabels" :key="item.id" :name="item.id" size="large" closable
				 @on-close="handleClose2">{{ item.name}}
				</Tag>
				<Button v-show="!supplementId" type="dashed" @click="handleAdd">选择标签</Button>
			</div>
			<Tag v-else v-for="item in supplementVal.labels" :key="item.id" :name="item.id" color="primary" size="large">{{ item.name}}
			</Tag>
			<!-- <Button v-show="!supplementId" type="dashed" @click="handleAdd">选择标签</Button> -->
			<Modal v-show="!supplementId" v-model="modal1" title="选择标签" @on-ok="ok">
				<Tag v-for="item in labels" :key="item.id" :name="item.id" size="large" checkable color="primary" @on-change="labChecked"
				 :checked="item.checked">{{ item.name}}
				</Tag>
				<!--               <div>
                    <Input v-model="labelVal" placeholder="自定义标签" clearable style="width: 200px"/>
                    <Button class="but" type="primary" @click="addLabel">添加</Button>
                </div> -->

			</Modal>
			<Divider />
			<textarea v-if="!supplementId" v-model="description" placeholder="题目描述 支持markdown" rows="3"></textarea>
			<textarea v-else v-model="supplementDescription" placeholder="变更内容或原因" rows="3"></textarea>
		</div>

	</div>
</template>

<script>
	import headerTop from "../components/common/headerTop";

	export default {
		name: "edit",
		components: {
			headerTop
		},
		data() {
			return {
				title: '',
				labels: [],
				description: '',
				modal1: false,
				labelVal: '',
				checkedLabels: [],
				checkedLabelsId: [],
				storageLabels: [],
				supplementId: '',
				supplementVal: '',
				supplementDescription: '',
				similarList: []

			}
		},
		created() {
			this.supplementId = this.$route.query.supplement;
			if (this.supplementId) {
				this.getDetails(this.supplementId, '').then((res) => {
					if (res.code == 200) {
						this.supplementVal = res.result
					}

				})
			};
			this.Labels()
		},
		methods: {
			similarTitle(value) {
				if (this.title.length > 3) {
					this.getQuestionSimilar({
						title: value
					}).then((res) => {
						if (res.code == 200) {
							this.similarList = res.result;
						}
					});
				}
			},
			//获取标签
			Labels() {
				this.getLabels().then((res) => {
					var data = res.result;
					this.$nextTick(() => {
						data.forEach((v) => {
							v.checked = false
						});
						this.labels = data
					})
				});


			},
			//添加自定义标签
			addLabel() {
				var newLab = true;
				this.labels.forEach((v) => {
					if (v.name.toLowerCase() == $.trim(this.labelVal) && $.trim(this.labelVal)) {
						newLab = false
						this.$Message.error('该标签已存在！');
					}
					return newLab
				});
				if (newLab && $.trim(this.labelVal)) {
					this.addLabels({
						name: $.trim(this.labelVal)
					}).then((res) => {
						this.labels.push({
							checked: true,
							name: $.trim(this.labelVal),
							id: res.result.id
						});
						this.storageLabels.push({
							checked: true,
							name: $.trim(this.labelVal),
							id: res.result.id
						})
					})
				}
			},
			//打开添加标签
			handleAdd() {
				this.modal1 = true;
			},
			//标签初始化选择
			initCheck(name) {
				this.labels.forEach((v) => {
					if (v.id == name) {
						v.checked = !v.checked
					}
				});
			},
			//删除已选择标签
			handleClose2(event, name) {
				var rlab = '';
				this.checkedLabels.forEach((v) => {
					if (v.id == name) {
						rlab = v;
					}
				});
				this.initCheck(name);
				this.checkedLabelsId.splice(this.checkedLabelsId.indexOf(name), 1)
				const index = this.checkedLabels.indexOf(rlab);
				this.checkedLabels.splice(index, 1);

			},
			//确认标签选择
			ok() {
				this.checkedLabels = this.storageLabels
			},
			//选择标签
			labChecked(checked, name) {
				if (checked) {
					this.checkedLabelsId.push(name);
					this.initCheck(name);
				} else {
					this.checkedLabelsId.splice(this.checkedLabelsId.indexOf(name), 1);
					this.initCheck(name);
					return;
				}
				this.storageLabels = [];
				this.labels.forEach((v) => {
					var vi = v;
					this.checkedLabelsId.forEach((h) => {
						if (vi.id == h) {
							this.storageLabels.push(vi)
						}
					})

				})
			},
			to() {
				if (!this.title && !this.supplementId) {
					this.$Message.error('题目标题不能为空！');
					return;
				}
				this.$emit('titleData', {
					title: this.title,
					conent: this.supplementVal.content,
					labels: this.checkedLabels,
					description: this.description,
					supplementDescription: this.supplementDescription,
				})
			},
		}
	}
</script>

<style lang="less">
	.demo-auto-complete-group {
		font-size: 12px;
		padding: 4px 6px;
	}

	.demo-auto-complete-group span {
		color: #666;
		font-weight: bold;
	}

	.edit {

		margin: 0 auto;

		&>h1 {
			max-width: 1200px;
			margin: 0 auto;
			font-weight: normal;
			margin-top: 20px;
			font-size: 25px;
		}

		.title {
			max-width: 1200px;
			margin: 15px auto;

			&>input {
				font-size: 25px;
				border: 1px solid #d8d8d8;
				outline: none;
				width: 100%;
				height: 50px;
				text-indent: 1em;
				margin-bottom: 15px;
				color: #515a6e;
				border-radius: 6px;
			}

			&>input:nth-of-type(2) {
				font-size: 20px;
			}

			&>textarea {
				font-size: 20px;
				border: none;
				outline: none;
				width: 100%;
				color: #515a6e;
				resize: none;
				// margin-top: 20px;
			}

		}

		.content {
			max-width: 1200px;
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

				&>img {

					width: 40px;
					vertical-align: middle;
				}

				&>span {
					font-size: 25px;
					color: white;
					vertical-align: middle;
				}
			}
		}

	}

	.but {
		margin-left: 15px;
	}

	.supplementTitle {
		border: none !important;
		text-indent: 0 !important;
	}
</style>
