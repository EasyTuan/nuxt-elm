<template>
  <div class="discover-page">
    <mt-header fixed title="发现"></mt-header>
    <a href="https://h5.ele.me/exchange/">
      <img src="~/assets/images/discover/discover1.jpg" alt="">
    </a>
    <div style="height:12px;"></div>
    <a href="https://goods.m.duiba.com.cn/mobile/appItemDetail?appItemId=1544968&from=login&spm=14695.1.1.1">
      <img src="~/assets/images/discover/discover2.jpg" alt="">
    </a>
    <Tabbar page='1' />
  </div>
</template>

<script>
import Tabbar from "~/components/tabbar";

export default {
  components: {
    Tabbar
  },
  head: {
    title: "发现"
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

