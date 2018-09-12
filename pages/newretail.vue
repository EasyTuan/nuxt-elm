<template>
  <div class="newretail-page">
    <mt-header fixed :title="$route.query.title">
      <div slot="left" @click="$router.go(-1)">
        <mt-button icon="back"></mt-button>
      </div>
    </mt-header>
    <ShopList />
  </div>
</template>

<script>
import ShopList from "~/components/shopList";
export default {
  components: {
    ShopList
  }
};
</script>

<style lang="scss">
@import "../assets/styles/mixin";
.newretail-page {
  padding: px2rem(88px) 0 0 0;
}
</style>
