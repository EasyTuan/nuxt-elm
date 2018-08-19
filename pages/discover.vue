<template>
  <div class="discover-page">
    发现
    <Tabbar page='1' />
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
.discover-page {
  padding-bottom: 53px;
}
</style>

