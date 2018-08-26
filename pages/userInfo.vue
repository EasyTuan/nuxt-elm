<template>
  <div class="userInfo-page">
    <mt-header fixed title="用户资料">
      <div slot="left" @click="$router.go(-1)">
        <mt-button icon="back"></mt-button>
      </div>
    </mt-header>
    <mt-button type="primary" size="large" @click="outlogin()">退出登录</mt-button>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    methods: {
      ...mapActions([
        'outLogin',
      ]),
      outlogin() {
        this.outLogin();
        this.$router.go(-1);
      }
    }
  }
</script>

<style lang="scss">
  @import '../assets/styles/mixin';

  .userInfo-page {
    padding: px2rem(188px) 0 0 0;

  }
</style>
