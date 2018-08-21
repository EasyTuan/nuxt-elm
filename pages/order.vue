<template>
  <div class="order-page">
    <mt-header fixed title="订单"></mt-header>
    <div class="no-data">
      <img class="nodata" src="~/assets/images/nodata.png" alt="">
      <p>登陆后查看外卖订单</p>
      <button class="login" @click="$router.push('/login')">立即登录</button>
    </div>
    <Tabbar page='2' />
  </div>
</template>

<script>
  import Tabbar from '~/components/tabbar';

  export default {
    components: {
      Tabbar
    },
    head: {
      title: '订单'
    }
  }
</script>

<style lang="scss">
  @import '../assets/styles/mixin';

  .order-page {
    padding: px2rem(88px) 0 53px 0;
    .no-data {
      text-align: center;
      .nodata {
        width: px2rem(400px);
        height: px2rem(400px);
        margin: 15vh auto px2rem(10px) auto;
      }
      p {
        color: #6a6a6a;
        font-size: px2rem(32px);
        margin-bottom: px2rem(15px);
      }
      .login {
        width: px2rem(240px);
        height: px2rem(80px);
        background: #56d176;
        border: none;
        color: #fff;
        font-size: px2rem(28px);
        border-radius: 2px;
      }
    }
  }
</style>

