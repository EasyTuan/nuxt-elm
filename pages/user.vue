<template>
  <div class="user-page">
    我的
    <Tabbar page='3' />
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
.user-page {
  padding-bottom: 53px;
}
</style>

