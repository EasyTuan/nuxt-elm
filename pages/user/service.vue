<template>
  <div class="service-page">
    <mt-header 
      fixed 
      title="我的客服">
      <div 
        slot="left" 
        @click="$router.go(-1)">
        <mt-button icon="back"/>
      </div>
    </mt-header>
    <section class="service_connect">
      <a 
        href="https://help.ele.me/#im?from=eleme-app?status=4" 
        class="service_left">
        <svg>
          <use 
            xmlns:xlink="http://www.w3.org/1999/xlink" 
            xlink:href="#human"/>
        </svg>
        <span>在线客服</span>
      </a>
      <a 
        href="tel:10105757" 
        class="service_right">
        <svg>
          <use 
            xmlns:xlink="http://www.w3.org/1999/xlink" 
            xlink:href="#phone"/>
        </svg>
        <span>电话客服</span>
      </a>
    </section>
  </div>
</template>

<script>
  export default {
    head: {
      title: "我的客服"
    }
  };

</script>

<style lang="scss">
  @import "../../assets/styles/mixin";

  .service-page {
    padding: px2rem(88px) 0 0 0;
    height: 100vh;
    background: #fff;

    .service_connect {
      @include fj;

      a {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 4rem;
        border-bottom: 1px solid #f5f5f5;

        svg {
          @include wh(1rem, 1rem);
        }

        span {
          margin-top: 0.4rem;
          @include sc(0.6rem, #666);
        }
      }

      .service_left {
        border-right: 1px solid #f5f5f5;
      }
    }
  }

</style>
