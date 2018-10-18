<template>
  <div class="shop-page">
    <Header :seller="seller" />
    <mt-navbar v-model="selected">
      <mt-tab-item id="goods">点餐</mt-tab-item>
      <mt-tab-item id="ratings">评价</mt-tab-item>
      <mt-tab-item id="seller">商家</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="goods">
        <Goods :seller="seller" />
      </mt-tab-container-item>
      <mt-tab-container-item id="ratings">
        <Ratings :seller="seller" />
      </mt-tab-container-item>
      <mt-tab-container-item id="seller">
        <Seller :seller="seller" />
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
  import Header from "./components/header";
  import Goods from "./components/goods";
  import Ratings from "./components/ratings";
  import Seller from "./components/seller";
  import * as shoppingApi from "~/assets/services/shopping";

  export default {
    components: {
      Header,
      Goods,
      Ratings,
      Seller
    },
    data() {
      return {
        selected: "goods",
        seller: {}
      };
    },
    async asyncData() {
      const {
        data
      } = await shoppingApi.seller();
      return {
        seller: data
      };
    },
    created() {
      // vue resource
      // this.$http.get('api/seller').then((res) => {
      //   res = res.body;
      //   if(res.errno === ERR_OK){
      //     this.seller = res.data;
      //     console.log(this.seller);
      //   }
      // })
    },
  };

</script>

<style lang="scss">
  @import "../../assets/styles/mixin";

  .shop-page {
    font-size: px2rem(24px);

    .mint-navbar {
      position: sticky;
      top: 0;
      z-index: 20;

      .mint-tab-item-label {
        font-size: px2rem(30px);
      }

      .mint-tab-item {
        padding: 10px 0;

        &.is-selected {
          color: inherit;
          border: none;
          position: relative;

          &::after {
            content: " ";
            display: inline-block;
            @include wh(20%, 2px);
            background: #2395ff;
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
          }
        }
      }
    }
  }

</style>
