<template>
	<div>
		<Tabs value="name1" :animated="false">
			<TabPane :label="label" name="name1">
				<List>
					<ListItem v-for="items in lists" :key="items.id">
						<ListItemMeta :title="items.title" :description="items.changeDesc" />
						<div class="labels">
							<router-link :to="{path:'/setting/checkContent',query:{id:items.id}}" target="_blank">
								查看
							</router-link>
						</div>
						<template slot="action">
							<li>
								<a @click="changeState(items.id,'PASS','')">通过</a>
							</li>
							<li>
								<a @click="repulse(items.id)">退回</a>
							</li>
						</template>
					</ListItem>
				</List>
			</TabPane>
			<!-- <TabPane label="我的提交"  name="name2">标签二的内容</TabPane> -->
		</Tabs>
		<Modal v-model="isLook" title="退回理由" @on-ok="ok">
			<textarea v-model="reason" placeholder="退回理由" rows="3" style="width: 100%;"></textarea>
		</Modal>
	</div>
</template>

<script>
	import {
		MarkdownPreview
	} from 'vue-meditor'
	import {
		Modal
	} from 'view-design';
	import checkOps from "@/api/index";
	export default {
		name: "articles",
		components: {
			MarkdownPreview
		},
		data() {
			return {
				repulseId: '',
				reason: '',
				lists: '',
				isLook: false,
				label: (h) => {
					return h('div', [
						h('span', '审核中'),
						h('Badge', {
							props: {
								count: 3
							}
						})
					])
				}
			}
		},
		created() {
			this.getCheckRecord('').then((res) => {
				if (res.code == 200) {
					this.lists = res.result
				}

			})
		},
		methods: {
			//打回
			repulse(id) {
				this.isLook = true;
				this.repulseId = id;
			},
			//改变状态
			changeState(id, state, reason) {
				checkOps(id, {
					"checkStateEnum": state,
					"reason": reason
				}).then((res) => {
					if (res.code == 200) {
						//message提示
					}
				})
			},
			//确认打回
			ok() {
				this.$options.methods.changeState(this.repulseId, 'NOT_PASS', this.reason);
			}
		}
	}
</script>

<style scoped>

</style>
