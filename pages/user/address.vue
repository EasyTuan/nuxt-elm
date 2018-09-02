<template>
  <div class="address-page">
    <mt-header fixed title="我的地址">
      <div slot="left" @click="$router.go(-1)">
        <mt-button icon="back"></mt-button>
      </div>
    </mt-header>
    反正又下了单，要地址做啥
  </div>
</template>

<script>
  export default {
    head: {
      title: '我的地址'
    }
  }
</script>

<style lang="scss">
  @import '../../assets/styles/mixin';

  .address-page {
    padding: px2rem(188px) 0 0 0;
    font-size: px2rem(30px);
    text-align: center;
  }
</style>
