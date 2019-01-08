<template>
	<div class="layout dark">
		<el-container>

			<el-header ref="header"  class="header" v-show="meta.header">
				<el-row>
					<el-col :span="12">
						<div class="layout-logo"><i class="el-icon-success icon"></i> 前端基础开发技术展示平台</div>
					</el-col>
					<el-col :span="12">
						<el-menu mode="horizontal" style="float:right; padding-left: 15px">
							<el-submenu index="2">
								<template slot="title">头像</template>
								<el-menu>
									<el-menu-item index="2-1">用户名字</el-menu-item>
								</el-menu>
								<el-menu>
									<el-menu-item index="2-1">选项1</el-menu-item>
								</el-menu>
								<el-menu>
									<el-menu-item index="2-1">选项1</el-menu-item>
								</el-menu>
								<el-menu>
									<el-submenu index="2-4">
										<template slot="title">设置主题</template>
										<el-menu-item index="2-4-1" @click="onTheme('blue')">蓝色</el-menu-item>
										<el-menu-item index="2-4-1" @click="onTheme('dark')">暗色</el-menu-item>
									</el-submenu>
								</el-menu>

							</el-submenu>
						</el-menu>
						<div style="float:right;">

						</div>
					</el-col>
				</el-row>
			</el-header>
			<el-container>
				<el-aside :width="sideWidth+'px'" v-show="meta.side"
				          :style="{background:'#fff'}">
					<div style="position: relative; border-right: 1px #e1e1e1 solid" >
						<div style="overflow: auto;" ref="side">
							<el-menu :collapse="isCollapsed" :default-active="menuActive" class="el-menu-demo"
							         mode="vertical">
								<ba-side-menu v-for="item in menus"
								              :data="item"></ba-side-menu>
							</el-menu>
						</div>
						<div ref="trigger"
						     style=" height: 35px;width: 100%">
							<el-button @click="onCollapsed()" size="medium" style="width: 100%; border-radius: 0;
							border-bottom: 0; border-left: 0;border-right: 0;" :icon="triggerIcon"></el-button>
						</div>
					</div>

				</el-aside>

				<el-main style="padding: 0;margin:0;background: #f3f3f3">
					<!--tabs菜单-->
					<div ref="tabs" class="tabs">
						<div class="g-bd2 f-cb">
							<div class="g-mn2">
								<div class="g-mn2c">
									<el-tabs type="border-card" closable
									         @tab-remove="removeTab"
									         @tab-click="onTab"
									         v-model="activeTab">
										<el-tab-pane :label="item.title" :name="item.name" v-for="(item,key) in tabs" :key="key"></el-tab-pane>
									</el-tabs>
								</div>
							</div>
							<div class="g-sd2">
								<el-dropdown :hide-on-click="false">
									<el-button  icon="el-icon-setting"></el-button>
									<el-dropdown-menu slot="dropdown">
										<el-dropdown-item>刷新页面</el-dropdown-item>
									</el-dropdown-menu>
								</el-dropdown>
							</div>
						</div>
					</div>
					<!--/tabs菜单-->

					<div ref="content" style="overflow: hidden; width: 100%" v-loading="pageLoading">
						<div :style="{margin: '24px 0'}" v-show="meta.breadcrumb">
							面包学
						</div>

						<!--<div v-show="meta.content"-->
						     <!--:style="{padding: '20px', minHeight: '280px'}"  >-->
							<transition name="page" mode="out-in" >
								<keep-alive :exclude="noCache" >
									<router-view  v-if="pageRefresh" class="">
										<!-- 这里是会被缓存的视图组件，比如 Home！ -->
									</router-view>
								</keep-alive>
							</transition>
						<!--</div>-->

						<!--<el-footer ref="footer" v-show="meta.footer" class="footer">这是底部</el-footer>-->
					</div>

				</el-main>

			</el-container>

		</el-container>

	</div>

</template>

<script>
	import mixin from './mixin'

	export default {
		name: "dark",
		mixins: [mixin],

	}
</script>

<style lang="less">
	body{
		overflow: hidden;
	}
	.layout{
		overflow: hidden;
	}
	.dark .el-col {
		/*height: 56px;*/
	}

	.dark .el-tabs__content {
		display: none !important;
	}

	.dark .layout-logo {
		/*width: 100px;*/
		/*height: 56px;*/
		color: #fff;
		font-size: 25px;
		line-height: 60px;

		/*border-radius: 3px;*/
		float: left;
		/*position: relative;*/
		/*top: 15px;*/
		/*left: 20px;*/
		.icon {
			font-size: 30px;
		}
	}

	.dark .header {
		padding-left: 20px;
		padding-right: 0;
		display: block;
		width: 100%;

		/*height: auto;*/
		background: #0f223a;
	}

	.dark .footer {
		background: #7dbaff;

	}

	.dark .el-menu {
		background: transparent;
		border: none;
	}

	.tabs{
		height: 40px;
		background: #f3f3f3;
		border-bottom: 1px #cfcfcf solid;
		.el-tabs__header{
			background: transparent;
		}
		.el-tabs{
			background: transparent;
			box-shadow: none !important;
			border: none;
		}
		.el-button{
			/*border: none;*/
			border-top:none;
			border-bottom:none;
			border-radius: 0;
			/*box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);;*/
			padding-left: 14px;
			padding-top: 14px;
			padding-bottom: 10px;
		}
	}

	/*页面切换动画*/
	.page-enter-active, .page-leave-active {
		/*transition: opacity .1s;*/
		transition: opacity .1s;
	}

	.page-enter, .page-leave-active {
		opacity: 0.6;
	}

	/* 两列左侧自适应布局 */
	.g-bd2{margin:0;}
	.g-sd2{position:relative;float:right;width:40px;margin-left:-40px}
	.g-mn2{float:left;width:100%;;}
	.g-mn2c{margin-right:40px;}

</style>
