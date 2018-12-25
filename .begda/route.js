
import store from "@/stores/index";
store.commit('os') //获取当前设备 ,由于路由生成的文件是级别高的,所以判断设备写在这里 第一次运行
// 检测当前是什么设备
let os = store.getters.mobile;
export default [{ name:'home',
                            path:'/home',
                            chunkName:'./home/index',
                            component:(resolve)=>{
                if(os){
                     require(['@/views/home/index_m.vue'], resolve)
            
                }else{
                    require(['@/views/home/index.vue'], resolve)
                }
            }
                            },{ name:'liaohui',
                            path:'/liaohui',
                            chunkName:'./liaohui/index',
                            component:(resolve)=>{
                if(os){
                     require(['@/views/liaohui/index_m.vue'], resolve)
            
                }else{
                    require(['@/views/liaohui/index.vue'], resolve)
                }
            }
                            },{ name:'list',
                            path:'/list',
                            chunkName:'./list/index',
                            component:(resolve)=>{
               require(['@/views/list/index.vue'], resolve)
            }
                            },{ name:'list1',
                            path:'/list1',
                            chunkName:'./list1',
                            component:(resolve)=>{
               require(['@/views/list1.vue'], resolve)
            }
                            },{ name:'list2',
                            path:'/list2',
                            chunkName:'./list2',
                            component:(resolve)=>{
               require(['@/views/list2.vue'], resolve)
            }
                            },{ name:'list-list1',
                            path:'/list/list1',
                            chunkName:'./list/list1',
                            component:(resolve)=>{
               require(['@/views/list/list1.vue'], resolve)
            }
                            },{ name:'list-list2',
                            path:'/list/list2',
                            chunkName:'./list/list2',
                            component:(resolve)=>{
               require(['@/views/list/list2.vue'], resolve)
            }
                            },{ name:'signup-index',
                            path:'/signup/index',
                            chunkName:'./signup/index/index',
                            component:(resolve)=>{
               require(['@/views/signup/index/index.vue'], resolve)
            }
                            }]
