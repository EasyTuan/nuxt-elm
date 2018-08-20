<template>
  <div class="order-page">
    <mt-header fixed title="订单"></mt-header>
    订单
    <Tabbar page='2' />
  </div>
</template>

<script>
  import Tabbar from '~/components/tabbar';

  export default {
    components: {
      Tabbar
    },
    head: {
      title: '订单'
    }
  }
</script>

<style lang="scss">
  @import '../assets/styles/mixin';

  .order-page {
    padding: 40px 0 53px 0;
  }
</style>

