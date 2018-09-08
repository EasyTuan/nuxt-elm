<template>
  <div class="shop-header">
    <div class="head">
      <nav style="background-image: url(//fuss10.elemecdn.com/6/25/36b82a63fb57a99fb8665c9cd26f9png.png?imageMogr/format/webp/thumbnail/750x/);">
        <i @click="$router.go(-1);" class="mintui mintui-back"></i>
        <img class="shop-logo" src="//fuss10.elemecdn.com/7/48/0620c527031e3b0883c6e0370604epng.png?imageMogr/format/webp/thumbnail/150x/">
      </nav>
    </div>
    <div class="content">
      <h2>华莱士炸鸡汉堡（金港店）</h2>
      <div class="info">
        <span>评价4.7</span>
        <span>月售3849单</span>
        <span>蜂鸟快送约33分钟</span>
      </div>
    </div>
    <div class="foot">
      <p>
        <mt-badge size="small" color="rgb(240, 115, 115)">满减</mt-badge>
        满36减21，满50减26，满80减44
      </p>
      <span class="announcement">公告：专注汉堡品牌，华莱士简单有滋味，本店位于：金港路183号。如果您的美食凉了，或者口味不好，错送，漏送等，请及时联系我们：18385528274，如您对我们的送餐服务口味满意请给5星好评哟，谢谢！我们将竭诚为您服务！</span>
    </div>
  </div>
</template>

<script>
export default {};
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
    font-size: px2rem(12px);
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
    font-size: px2rem(12px);
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
