<template>
  <div class="benefit-page">
    <mt-header fixed title="我的优惠">
      <div slot="left" @click="$router.go(-1)">
        <mt-button icon="back"></mt-button>
      </div>
    </mt-header>
    <img class="benefit-img" src="~/assets/images/benefit.gif" alt="">
    <h2>没有红包</h2>
    <p>快去抢几个吧</p>
  </div>
</template>

<script>
export default {
  head: {
    title: "我的优惠"
  }
};
</script>

<style lang="scss">
@import "../../assets/styles/mixin";
.benefit-page {
  text-align: center;
  .benefit-img {
    width: 60vw;
    margin: 30% auto 0 auto;
  }
  h2 {
    margin: px2rem(30px) 0;
    font-size: px2rem(32px);
    font-weight: normal;
    color: #6a6a6a;
  }
  p {
    font-size: px2rem(24px);
    color: #999;
  }
}
</style>
