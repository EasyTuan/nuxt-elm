<template>
  <div class="discover-page">
    <mt-header fixed title="发现"></mt-header>
    <img src="~/assets/images/discover/discover1.jpg" alt="">
    <div style="height:12px;"></div>
    <img src="~/assets/images/discover/discover2.jpg" alt="">
    <Tabbar page='1' />
  </div>
</template>

<script>
  import Tabbar from '~/components/tabbar';

  export default {
    components: {
      Tabbar
    },
    head: {
      title: '发现'
    }
  }
</script>

<style lang="scss">
  @import '../assets/styles/mixin';

  .discover-page {
    padding: px2rem(88px) 0 53px 0;
  }
</style>

