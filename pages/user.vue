<template>
  <div class="user-page">
    <mt-header fixed title="我的"></mt-header>
    我的
    <Tabbar page='3' />
  </div>
</template>

<script>
  import Tabbar from '~/components/tabbar';

  export default {
    components: {
      Tabbar
    },
    head: {
      title: '我的'
    }
  }
</script>

<style lang="scss">
  @import '../assets/styles/mixin';

  .user-page {
    padding: 40px 0 53px 0;
  }
</style>

