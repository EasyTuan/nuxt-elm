<template>
  <div class="page-addAddress">
    <mt-header 
      fixed 
      title="添加地址">
      <div 
        slot="left" 
        @click="$router.go(-1)">
        <mt-button icon="back"/>
      </div>
    </mt-header>
    <mt-field 
      v-model="name" 
      label="联系人" 
      placeholder="你的姓名"/>
    <mt-field 
      v-model="phone" 
      label="电话" 
      placeholder="你的手机号" 
      type="tel"/>
    <mt-field 
      v-model="address" 
      label="地址" 
      placeholder="小区、写字楼、学校等"/>
    <mt-field 
      v-model="details" 
      label="门牌号" 
      placeholder="10号楼5层501室"/>
    <button 
      class="submit-btn" 
      @click="submit()">保存</button>
  </div>
</template>

<script>
  import {
    Toast
  } from "mint-ui";
  import {
    mapGetters
  } from "vuex";
  import v from "~/assets/utils/validate";
  import {
    addAddress
  } from "~/assets/services/user";

  export default {
    data() {
      return {
        name: "",
        phone: "",
        address: "",
        details: ""
      };
    },
    head: {
      title: "添加地址"
    },
    computed: {
      ...mapGetters(["userInfo"])
    },
    mounted() {
      // document.querySelector('title').innerHTML = this.$route.query.title;
      this.initData();
    },
    methods: {
      //数据初始化
      initData() {
        if (this.$route.query.pkid != 0) {}
      },
      async submit() {
        if (!v.required(this.name)) {
          Toast({
            message: "请输入联系人",
            position: "bottom",
            duration: 1500
          });
          return;
        }
        if (!v.tel(this.phone)) {
          Toast({
            message: "手机号格式不正确",
            position: "bottom",
            duration: 1500
          });
          return;
        }
        if (!v.required(this.address)) {
          Toast({
            message: "请输入地址",
            position: "bottom",
            duration: 1500
          });
          return;
        }
        const {
          code
        } = await addAddress({
          name: this.name,
          phone: this.phone,
          address: this.address,
          details: this.details
        });
        if (code === 0) {
          Toast({
            message: "保存成功!",
            position: "bottom",
            duration: 1500
          });
          this.$router.go(-1);
        }
      }
    }
  };

</script>

<style lang="scss">
  @import "../../assets/styles/mixin";

  .page-addAddress {
    padding: px2rem(88px) 0 0 0;

    .mint-cell-wrapper {
      //该默认label字体16px为14px
      font-size: 14px;
    }

    .mint-field-core {
      font-size: 14px;
    }

    .submit-btn {
      width: 90%;
      display: block;
      margin: px2rem(50px) auto;
      height: px2rem(80px);
      background: #56d176;
      border: none;
      color: #fff;
      font-size: px2rem(28px);
      border-radius: 2px;
    }
  }

</style>
