<template>
  <div class="home-page">
    首页
    <Tabbar page='0' />
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
.home-page {
  padding-bottom: 53px;
}
</style>

