<template>
  <div class="discover-page">
    <mt-header 
      fixed 
      title="发现"/>
    <a href="https://h5.ele.me/exchange/">
      <img 
        :src="discover1" 
        alt="">
    </a>
    <div style="height:12px;"/>
    <a href="https://goods.m.duiba.com.cn/mobile/appItemDetail?appItemId=1544968&from=login&spm=14695.1.1.1">
      <img 
        :src="discover2" 
        alt="">
    </a>
    <Tabbar page="1" />
  </div>
</template>

<script>
  import config from "~/config";
  import Tabbar from "~/components/tabbar";

  export default {
    components: {
      Tabbar
    },
    head: {
      title: "发现"
    },
    data() {
      return {
        discover1: `${config.IMG_URL}discover/discover1.jpg`,
        discover2: `${config.IMG_URL}discover/discover2.jpg`,
      }
    }
  };

</script>

<style lang="scss">
  @import "../assets/styles/mixin";

  .discover-page {
    padding: px2rem(88px) 0 53px 0;

    a {
      display: block;
    }
  }

</style>
