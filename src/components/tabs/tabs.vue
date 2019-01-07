<template>
	<el-tabs type="border-card" closable
	         @tab-remove="removeTab"
	         @tab-click="onTab"
	         v-model="activeTab">
		<el-tab-pane :label="item.title" :name="item.name" v-for="(item,key) in tabs" :key="key"></el-tab-pane>
	</el-tabs>
</template>

<script>
	export default {
		name: "tabs"
	}
</script>

<style scoped>

</style>
