<template>
  <div class="discover-page">
    <mt-header 
      fixed 
      title="修改用户名">
      <div 
        slot="left" 
        @click="$router.go(-1)">
        <mt-button icon="back"/>
      </div>
    </mt-header>
    <div style="height: 10px;"/>
    <mt-field 
      v-model="username" 
      placeholder="请输入用户名"/>
    <section class="setname">
      <p class="unlikep">用户名长度在2到24位之间</p>
      <button 
        class="submit" 
        @click="submit()">确认修改</button>
    </section>
  </div>
</template>

<script>
  import {
    Toast
  } from "mint-ui";
  import {
    retsetName
  } from "~/assets/services/user";
  import {
    mapActions
  } from "vuex";

  export default {
    head: {
      title: "修改用户名"
    },
    data() {
      return {
        username: ""
      };
    },
    methods: {
      ...mapActions(["update"]),
      async submit() {
        if (this.username === "") {
          Toast("请输入用户名");
          return;
        }
        if (this.username.length < 2 || this.username.length > 24) {
          Toast("用户名长度不合法");
          return;
        }
        const {
          code
        } = await retsetName({
          username: this.username
        });
        if (code === 0) {
          Toast("修改成功");
          this.update({
            username: this.username
          });
          setTimeout(() => {
            this.$router.go(-1);
          }, 1000);
        }
      }
    }
  };

</script>

<style lang="scss">
  @import "../../assets/styles/mixin";

  .discover-page {
    padding: px2rem(88px) 0 0 0;

    .setname {
      padding: 0 px2rem(30px);

      p {
        width: 100%;
        @include sc(0.4rem, #666);
        padding: 0.4rem 0 1rem;
      }

      .unlikep {
        @include sc(0.58rem, #a9a9a9);
        padding: px2rem(20px) 0;
      }

      .submit {
        box-sizing: border-box;
        width: 100%;
        height: px2rem(96px);
        background: #56d176;
        border: none;
        color: #fff;
        font-size: px2rem(34px);
        border-radius: 8px;
      }
    }
  }

</style>
