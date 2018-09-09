<template>
  <div class="address-page">
    <mt-header fixed title="我的地址">
      <div slot="left" @click="$router.go(-1)">
        <mt-button icon="back"></mt-button>
      </div>
    </mt-header>
    <div class="add-address">
      <img src="~/assets/images/add.png" alt="">
      新增收货地址
    </div>
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
    padding: px2rem(88px) 0 0 0;
    .add-address {
      width: 100%;
      height: px2rem(100px);
      line-height: px2rem(100px);
      background: #fff;
      position: fixed;
      bottom: 0;
      @include fj(center);
      align-items: center;
      font-size: px2rem(32px);
      color: #3190e8;
      img {
        width: px2rem(40px);
        height: px2rem(40px);
        margin-right: 5px;
      }
    }
  }
</style>
