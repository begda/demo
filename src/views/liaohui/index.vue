<template>
    <div class="ass">
        这是liaohui {{new Date().getTime()}}
        <el-button @click="fanhui()">返回home并刷新home</el-button>
        <el-button @click="fanhui2()">返回list并刷新home</el-button>
    </div>
</template>

<script>

    export default {
        app() {
            return {
                // header:false,
                iframe:{side:true}
            }
        },
        methods:{
            fanhui(){
                this.$refreshLeave({name:'home',query:{ttt:200000}})
            },
	        fanhui2(){
		        this.$refreshLeave({name:'list',query:{ttt:200000}})
	        }
        },
        mixins:[require('./mixin')]
    };
</script>

<style lang="less" scoped>
    .ass {
        background: rgba(144, 255, 142, 0.2);
    }

</style>
