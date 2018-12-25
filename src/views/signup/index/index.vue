<!--<template>-->


    <!--<lr-layout :title="title" @on-resize="onResize" :is-navbar="false">-->

        <!--&lt;!&ndash;主体部分&ndash;&gt;-->
        <!--<div ref="bg" v-lazy:background-image="'/mobile/images/signup_bg.jpg'" style=" background-size: 100% 95%;">-->
            <!--<van-row style="position: absolute; bottom: 0; width: 100%;">-->
                <!--<van-col span="12">-->
                    <!--<van-button @click="onLogin()" type="primary" size="large">登录</van-button>-->
                <!--</van-col>-->
                <!--<van-col span="12">-->
                    <!--<van-button type="default" size="large" @click="onSignup">注册</van-button>-->
                <!--</van-col>-->
            <!--</van-row>-->
        <!--</div>-->


        <!--&lt;!&ndash;弹出部分&ndash;&gt;-->

        <!--&lt;!&ndash;显示注册类型列表&ndash;&gt;-->
        <!--<van-actionsheet v-model="signupShow" :actions="actions" @select="onSelect" cancel-text="取消"/>-->

        <!--&lt;!&ndash;显示选中类型的介绍信息&ndash;&gt;-->
        <!--<div>-->
            <!--<van-actionsheet v-model="signupInfoShow" :title="signupInfoTitle" @cancel="onSignup">-->
                <!--<div style="padding: 10px; min-height: 100px">-->
                    <!--<template v-if="signupInfoContent">-->
                        <!--<div v-html="signupInfoContent"></div>-->
                    <!--</template>-->
                    <!--<template v-else>-->
                        <!--没有介绍信息-->
                    <!--</template>-->
                <!--</div>-->

                <!--<van-button size="large" type="primary" @click="onNext">我知道了,下一步</van-button>-->
            <!--</van-actionsheet>-->

        <!--</div>-->

    <!--</lr-layout>-->


<!--</template>-->

<!--<script>-->

  <!--import { isUrl } from '@/util/index.js';-->

  <!--export default {-->

    <!--data() {-->
      <!--return {-->
        <!--title: '注册',-->
        <!--actions: [-->
          <!--{-->
            <!--name: '生产经营单位注册',-->
            <!--info: '<p><strong>生产经营单位：</strong>生产经营单位，是指在中华人民共和国领域内从事生产经营活动的单位，\n' +-->
              <!--'            包括工、矿、商、贸等。按照《中华人民共和国安全生产法》的规定，\n' +-->
              <!--'            生产经营单位对安全生产承担主体责任，必须遵守本法和其他有关安全生产的法律、\n' +-->
              <!--'            法规，加强安全生产管理，建立、健全安全生产责任制度，\n' +-->
              <!--'            完善安全生产条件，确保安全生产。其主要负责人对本单位的安全生产工作全面负责。</p>'-->

          <!--},-->
          <!--// {-->
          <!--//   name: '技术服务机构注册',-->
          <!--//   info: '<p><strong>安全评价机构：</strong>是指依法取得安全评价相应的资质，按照资质证书规定的业务范围开展安全评价活动的社会中介服务组织。<br/>\n' +-->
          <!--//     '                <strong>安全生产检测检验机构：</strong>是指依法取得安全生产检测检验资质，并在资质有效期和批准的检测检验业务范围内独立开展检测检验活动的社会中介服务组织。<br/>\n' +-->
          <!--//     '                <strong>职业卫生服务机构：</strong>是指为预防和控制职业病危害向政府、用人单位、劳动者、社会提供的技术性服务工作的社会中介服务组织。</p>\n'-->
          <!--//-->
          <!--// },-->
          <!--// {-->
          <!--//   name: '考试培训机构注册'-->
          <!--// },-->
          <!--// {-->
          <!--//   name: '集团公司注册'-->
          <!--// },-->
          <!--// {-->
          <!--//   name: '应急组织机构注册'-->
          <!--// },-->
          <!--// {-->
          <!--//   name: '政府监管用户注册'-->
          <!--// }-->
        <!--],-->

        <!--signupShow: false,-->
        <!--signupInfoShow: false,-->
        <!--signupInfoTitle: '', //注册信息介绍弹窗标题-->
        <!--signupInfoContent: '' //注册信息介绍弹窗内容-->

      <!--};-->
    <!--},-->
    <!--async mounted(){-->

      <!--let account=await this.$store.getters.account-->

      <!--if (typeof account != 'undefined' || account != 'err'){-->
        <!--console.log('已登录,现在跳转到首页')-->
        <!--this.$router.replace({name:'home-home'})-->
      <!--}-->
    <!--},-->
    <!--methods: {-->


      <!--onResize(i) {-->
        <!--this.$refs.bg.style.height = i + 'px';-->
      <!--},-->

      <!--onSignup() {-->
        <!--this.signupShow = true;-->
      <!--},-->
      <!--onSignupType: function(e) {-->
        <!--this.signupShow = false;-->
        <!--this.signupInfoShow = true;-->
        <!--this.signupInfoTitle = e.name;-->
        <!--this.signupInfoContent = e.info;-->
      <!--},-->

      <!--onSelect(item) {-->
        <!--this.signupShow = false;-->
        <!--this.signupInfoShow = true;-->
        <!--this.signupInfoTitle = item.name;-->
        <!--this.signupInfoContent = item.info;-->
      <!--},-->

      <!--//继续注册到搜索页面-->
      <!--onNext: function() {-->
        <!--this.$router.push({ name: 'signup-search' });-->
      <!--},-->

      <!--onLogin() {-->
        <!--window.location =isUrl.origin + '/cas/login?service=' + isUrl.origin + '/mobile';-->
        <!--// window.top.location.href = 'https://www.baidu.com'-->
      <!--}-->

    <!--},-->
    <!--computed: {-->
      <!--routerQuery() {-->
        <!--return this.$route.query;-->
      <!--},-->
      <!--routerParams() {-->
        <!--return this.$route.params;-->
      <!--}-->

    <!--}-->
  <!--};-->
<!--</script>-->

<!--<style scoped>-->
    <!--.van-button {-->
        <!--border-radius: 0;-->
    <!--}-->
<!--</style>-->

