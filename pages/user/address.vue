<template>
  <div class="address-page">
    <mt-header 
      fixed 
      title="我的地址">
      <div 
        slot="left" 
        @click="$router.go(-1)">
        <mt-button icon="back"/>
      </div>
    </mt-header>
    <ul>
      <li 
        v-for="item in addressList" 
        :key="item.id" 
        class="address-item">
        <div>
          <p>
            {{ item.name }}
            <span>{{ item.phone }}</span>
          </p>
          <p class="detail">{{ item.address }} {{ item.details }}</p>
        </div>
        <svg 
          width="15" 
          height="15" 
          @click="delectAddress(item.id)">
          <use xlink:href="#delete"/>
        </svg>
      </li>
    </ul>
    <router-link 
      :to="{path:'/user/addAddress', query:{ pkid: 0 }}" 
      class="add-address" 
      tag="div">
      <img 
        src="~/assets/images/add.png" 
        alt="">
      新增收货地址
    </router-link>
  </div>
</template>

<script>
  import {
    getAddress,
    deleteAddress
  } from "~/assets/services/user";
  import {
    MessageBox,
    Toast
  } from "mint-ui";

  export default {
    head: {
      title: "我的地址"
    },
    data() {
      return {
        addressList: []
      };
    },
    mounted() {
      this.dataInit();
    },
    methods: {
      async dataInit() {
        const {
          data
        } = await getAddress();
        this.addressList = data;
      },
      async delectAddress(id) {
        await MessageBox.confirm("删除该地址", "删除地址");
        try {
          const {
            code
          } = await deleteAddress({
            address_id: id
          });
          if (code === 0) {
            Toast({
              message: "删除地址成功",
              position: "bottom",
              duration: 1500
            });
            this.dataInit();
          }
        } catch (error) {}
      }
    }
  };

</script>

<style lang="scss">
  @import "../../assets/styles/mixin";

  .address-page {
    padding: px2rem(88px) 0 0 0;

    .add-address {
      width: 100%;
      height: px2rem(100px);
      line-height: px2rem(100px);
      background: #fff;
      position: fixed;
      bottom: 0;
      @include fj(center);
      align-items: center;
      font-size: px2rem(32px);
      color: #3190e8;

      img {
        width: px2rem(40px);
        height: px2rem(40px);
        margin-right: 5px;
      }
    }

    .address-item {
      @include fj();
      align-items: center;
      height: px2rem(140px);
      font-size: px2rem(34px);
      padding: 0 px2rem(30px);
      background: #fff;

      span {
        color: #666;
      }

      .detail {
        font-size: px2rem(28px);
        color: #666;
      }
    }
  }

</style>
