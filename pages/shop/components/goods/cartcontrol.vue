<template>
  <div class="cartcontrol">
    <svg
      v-show="food.count>0"
      class="inner"
      fill="rgb(35, 149, 255)"
      @click.stop.prevent="decreaseCart"><use xlink:href="#cart-minus"/></svg>
    <div
      v-show="food.count>0"
      class="cart-count">{{ food.count }}</div>
    <svg
      width="24"
      height="24"
      fill="rgb(35, 149, 255)"
      @click="addCart"><use xlink:href="#cart-add"/></svg>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  props: ['food'],
  methods: {
    addCart(event) {
      if (!this.food.count) {
        Vue.set(this.food, "count", 1);
      } else {
        this.food.count++;
      }
      this.$emit("add", event.target);
    },
    decreaseCart(event) {
      if (this.food.count) {
        this.food.count--;
      }
    }
  }
};
</script>

<style lang="scss">
.cartcontrol {
  display: flex;
  align-items: center;
  .inner {
    width: 24px;
    height: 24px;
  }
  .cart-count {
    display: inline-block;
    vertical-align: top;
    width: 25px;
    text-align: center;
    font-size: 15px;
    color: #333;
  }

  .cart-add {
    display: inline-block;
    padding: 6px;
    line-height: 24px;
    font-size: 24px;
    color: rgb(0, 160, 220);
  }
}
</style>
