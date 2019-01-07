<template>
    <div class="ass">
      <iframe src="https://segmentfault.com/a/1190000004460234" :style="{width: '100%',
        padding:0,
        margin:0,
        border:'none',
       height:pageHeight}"></iframe>
    </div>
</template>

<script>

    export default {

        computed:{
        	pageHeight(){
        		return this.$store.state.pageHeight-6+'px'
          }
        }
    };
</script>

<style lang="less" scoped>

</style>
