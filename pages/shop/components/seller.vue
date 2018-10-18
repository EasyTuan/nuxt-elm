<template>
  <div class="seller-page">
    <div class="logo">
      <img 
        :src="banner" 
        alt="">
    </div>
    <h2>{{ seller.name }}</h2>
    <p>{{ seller.bulletin }}</p>
    <a 
      :href="seller.brandstory" 
      class="brandstory">查看品牌故事</a>
    <div class="placeholder"/>
    <h2>配送信息</h2>
    <p>由蜂鸟快送提供配送，约{{ seller.deliveryTime }}分钟送达，距离2.1km</p>
    <p>配送费￥{{ seller.deliveryPrice }}</p>
  </div>
</template>

<script>
  import config from "~/config";
  export default {
    props: {
      seller: {
        default: {}
      }
    },
    computed: {
      banner: function () {
        return config.IMG_URL + this.seller.banner;
      }
    }
  };

</script>

<style lang="scss">
  @import "../../../assets/styles/mixin";

  .seller-page {
    background: #fff;
    padding-bottom: px2rem(30px);

    .logo {
      padding: px2rem(30px) px2rem(30px) 0 px2rem(30px);
    }

    h2 {
      font-size: px2rem(32px);
      margin-top: px2rem(40px);
      padding: 0 px2rem(30px) px2rem(20px) px2rem(30px);
    }

    p {
      padding: 0 px2rem(30px);
      color: #666;
      font-size: px2rem(26px);
      line-height: 1.5;
    }

    .brandstory {
      display: block;
      line-height: px2rem(100px);
      margin-top: px2rem(50px);
      color: #666;
      font-size: px2rem(28px);
      text-align: center;
    }

    .placeholder {
      height: px2rem(20px);
      background: #f5f5f5;
    }
  }

</style>
