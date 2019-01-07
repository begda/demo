
import store from "@/stores/index";
store.commit('os') //获取当前设备 ,由于路由生成的文件是级别高的,所以判断设备写在这里 第一次运行
// 检测当前是什么设备
let os = store.getters.mobile;
export default [{ name:'home',
                 path:'/home',
                 chunkName:'./home/index',
                 component:async (resolve)=>{
                    let module;
		                if(os){
		                  module=	await import('@/views/home/index_m.vue')
		                  module.default.name='home' //给组件设置名字
			                return module
		                }else{
		                  module=	await import('@/views/home/index.vue')
			                module.default.name='home' //给组件设置名字
			                return module
		                }
                 }
                 },{ name:'liaohui',
                 path:'/liaohui',
                 chunkName:'./liaohui/index',
                 component:async (resolve)=>{
                    let module;
		                if(os){
		                  module=	await import('@/views/liaohui/index_m.vue')
		                  module.default.name='liaohui' //给组件设置名字
			                return module
		                }else{
		                  module=	await import('@/views/liaohui/index.vue')
			                module.default.name='liaohui' //给组件设置名字
			                return module
		                }
                 }
                 },{ name:'list',
                 path:'/list',
                 chunkName:'./list/index',
                 component:async (resolve)=>{
                    let module=	await import('@/views/list/index.vue')
                    module.default.name='list' //给组件设置名字
                    return module
                 }
                 },{ name:'list1',
                 path:'/list1',
                 chunkName:'./list1',
                 component:async (resolve)=>{
                    let module=	await import('@/views/list1.vue')
                    module.default.name='list1' //给组件设置名字
                    return module
                 }
                 },{ name:'list2',
                 path:'/list2',
                 chunkName:'./list2',
                 component:async (resolve)=>{
                    let module=	await import('@/views/list2.vue')
                    module.default.name='list2' //给组件设置名字
                    return module
                 }
                 },{ name:'zijiedian',
                 path:'/zijiedian',
                 chunkName:'./zijiedian',
                 component:async (resolve)=>{
                    let module;
		                if(os){
		                  module=	await import('@/views/zijiedian_m.vue')
		                  module.default.name='zijiedian' //给组件设置名字
			                return module
		                }else{
		                  module=	await import('@/views/zijiedian.vue')
			                module.default.name='zijiedian' //给组件设置名字
			                return module
		                }
                 },
                 children:[{ name:'zijiedian-1',
                 path:'1',
                 chunkName:'./zijiedian/1',
                 component:async (resolve)=>{
                    let module=	await import('@/views/zijiedian/1.vue')
                    module.default.name='zijiedian-1' //给组件设置名字
                    return module
                 }
                 },{ name:'zijiedian-2',
                 path:'2',
                 chunkName:'./zijiedian/2',
                 component:async (resolve)=>{
                    let module;
		                if(os){
		                  module=	await import('@/views/zijiedian/2_m.vue')
		                  module.default.name='zijiedian-2' //给组件设置名字
			                return module
		                }else{
		                  module=	await import('@/views/zijiedian/2.vue')
			                module.default.name='zijiedian-2' //给组件设置名字
			                return module
		                }
                 }
                 }]
                 },{ name:'iframe-1',
                 path:'/iframe/1',
                 chunkName:'./iframe/1',
                 component:async (resolve)=>{
                    let module=	await import('@/views/iframe/1.vue')
                    module.default.name='iframe-1' //给组件设置名字
                    return module
                 }
                 },{ name:'list-list1',
                 path:'/list/list1',
                 chunkName:'./list/list1',
                 component:async (resolve)=>{
                    let module=	await import('@/views/list/list1.vue')
                    module.default.name='list-list1' //给组件设置名字
                    return module
                 }
                 },{ name:'list-list2',
                 path:'/list/list2',
                 chunkName:'./list/list2',
                 component:async (resolve)=>{
                    let module=	await import('@/views/list/list2.vue')
                    module.default.name='list-list2' //给组件设置名字
                    return module
                 }
                 },{ name:'signup-index',
                 path:'/signup/index',
                 chunkName:'./signup/index/index',
                 component:async (resolve)=>{
                    let module=	await import('@/views/signup/index/index.vue')
                    module.default.name='signup-index' //给组件设置名字
                    return module
                 }
                 }]
