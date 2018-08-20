<template>
  <div class="discover-page">
    <mt-header fixed title="发现"></mt-header>
    发现
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
    padding: 40px 0 53px 0;
  }
</style>

