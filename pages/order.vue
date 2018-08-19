<template>
  <div class="order-page">
    订单
    <Tabbar page='2' />
  </div>
</template>

<script>
import Tabbar from '~/components/tabbar';

export default {
  components: {
    Tabbar
  }
}
</script>

<style lang="scss">
@import '../assets/styles/mixin.scss';
.order-page {
  padding-bottom: 53px;
}
</style>

