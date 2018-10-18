<template>
  <div class="shop-header">
    <div class="head">
      <nav :style="`background-image: url('${banner}');`">
        <i 
          class="mintui mintui-back" 
          @click="$router.go(-1);"/>
        <img 
          :src="seller.avatar" 
          class="shop-logo">
      </nav>
    </div>
    <div class="content">
      <h2>{{ seller.name }}</h2>
      <div class="info">
        <span>评价{{ seller.score }}</span>
        <span>月售{{ seller.sellCount }}单</span>
        <span>蜂鸟快送约{{ seller.deliveryTime }}分钟</span>
      </div>
    </div>
    <div class="foot">
      <p>
        <mt-badge 
          size="small" 
          color="rgb(240, 115, 115)">满减</mt-badge>
        满36减21，满50减26，满80减44
      </p>
      <span class="announcement">公告：专注汉堡品牌，华莱士简单有滋味，本店位于：金港路183号。如果您的美食凉了，或者口味不好，错送，漏送等，请及时联系我们：18385528274，如您对我们的送餐服务口味满意请给5星好评哟，谢谢！我们将竭诚为您服务！</span>
    </div>
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

  .shop-header {
    background: #fff;

    .head {
      height: px2rem(200px);

      nav {
        height: px2rem(200px);
        background-position: 50%;
        background-size: cover;
        background-repeat: no-repeat;
        padding: px2rem(10px);
        position: relative;

        .mintui-back {
          font-size: px2rem(46px);
          color: #fff;
        }

        .shop-logo {
          width: px2rem(150px);
          height: px2rem(150px);
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }

    .content {
      font-size: px2rem(24px);
      margin-top: px2rem(50px);
      text-align: center;

      h2 {
        font-size: px2rem(40px);
      }

      .info {
        color: #666;

        span {
          margin: 0 px2rem(10px);
        }
      }
    }

    .foot {
      padding: 0 px2rem(70px);
      margin-top: 10px;
      font-size: px2rem(24px);

      .mint-badge {
        transform: scale(0.8) translateX(-10%);
        border-radius: 1px;
      }

      .announcement {
        display: inline-block;
        width: 100%;
        color: #666;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }

</style>
