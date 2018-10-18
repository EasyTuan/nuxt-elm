<template>
  <div class="forget-page">
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
      v-model="oldpass" 
      type="password" 
      placeholder="旧密码"/>
    <mt-field 
      v-model="newpass" 
      type="password" 
      placeholder="新密码"/>
    <mt-field 
      v-model="newpass2" 
      type="password" 
      placeholder="确认密码"/>
    <section class="setname">
      <p class="unlikep">用户名长度在5到24位之间</p>
      <button 
        class="submit" 
        @click="submit()">确认并保存</button>
    </section>
  </div>
</template>

<script>
  import {
    Toast
  } from "mint-ui";
  import {
    retsetPassword
  } from "~/assets/services/user";
  import md5 from "js-md5";

  export default {
    head: {
      title: "修改用户名"
    },
    data() {
      return {
        oldpass: "",
        newpass: "",
        newpass2: ""
      };
    },
    methods: {
      async submit() {
        if (this.oldpass === "") {
          Toast("请输入旧密码");
          return;
        }
        if (this.newpass === "") {
          Toast("请输入新密码");
          return;
        }
        if (this.newpass2 === "") {
          Toast("请再次输入新密码");
          return;
        }
        if (this.newpass !== this.newpass2) {
          Toast("两次输入密码不一致");
          return;
        }
        const {
          code
        } = await retsetPassword({
          oldpassword: md5(this.oldpass),
          newpassword: md5(this.newpass)
        });
        if (code === 0) {
          Toast("修改成功");
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

  .forget-page {
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
