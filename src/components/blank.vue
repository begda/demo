<template>
</template>
<script>
	/*
	* 用于刷新来往的页面
	* 如果有页面跳转到这里,使用路由的离开生命周期来清楚上个页面的缓存,实现组件刷新的效果
	* */
	import store from '@/stores/index'

	export default {
		name: 'blank',
		app(){
			return {cache:false}
		},
		beforeRouteEnter(to, from, next) {
			// 设置不缓存页面的name
			store.commit('setNoCache', from.name)
			let fromRute = {...from} // 新建一个对象把from对象放进去,避免直接修改from对象
			delete fromRute.matched  //删除这个不要的参数,因为这玩意太大了
			next(vm => {
				vm.$router.replace(fromRute) // 重定向到来的页面,然后清除当前不缓存的页面,让页面重新缓存
				vm.$store.commit('removeNoCache', from.name)
			})
		},

	}
</script>
