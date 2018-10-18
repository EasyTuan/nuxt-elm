<template>
  <div class="shopcart">
    <div 
      class="content" 
      @click="toggleList">
      <div class="content-left">
        <div class="logo-wrapper">
          <div 
            :class="{'highlight':totalCount>0}" 
            class="logo">
            <span 
              v-if="totalCount<=0" 
              class="icon-shopping_cart">
              <img 
                src="~/assets/images/cart.svg" 
                alt="">
            </span>
            <span 
              v-else 
              class="icon-shopping_cart highlight">
              <img 
                src="~/assets/images/cart2.svg" 
                alt="">
            </span>
          </div>
          <div 
            v-show="totalCount>0" 
            class="num">{{ totalCount }}</div>
        </div>
        <div 
          :class="{'highlight':totalPrice>0}" 
          class="price">￥{{ totalPrice }}元</div>
        <div class="desc">另需配送费￥{{ deliveryPrice }}元</div>
      </div>
      <div class="content-right">
        <div 
          :class="payClass" 
          class="pay">{{ payDesc }}</div>
      </div>
    </div>
    <div class="ball-container">
      <div 
        v-for="(ball, index) in balls" 
        :key="index">
        <transition 
          name="drop" 
          @before-enter="beforeDrop" 
          @enter="dropping" 
          @after-enter="afterDrop">
          <div 
            v-show="ball.show" 
            class="ball">
            <div class="inner inner-hook"/>
          </div>
        </transition>
      </div>
    </div>
    <div 
      v-show="listShow" 
      class="mark" 
      @click="toggleList"/>
    <transition name="fold">
      <div 
        v-show="listShow" 
        class="shopcart-list">
        <div class="list-header">
          <h1 class="title">已选商品</h1>
          <span 
            class="empty" 
            @click="empty">清空</span>
        </div>
        <div 
          ref="listContent" 
          class="list-content">
          <ul>
            <li 
              v-for="(food, index) in selectFoods" 
              :key="index" 
              class="food">
              <span class="name">{{ food.name }}</span>
              <div class="price">
                <span>￥{{ food.price*food.count }}</span>
              </div>
              <div class="cartcontrol-wrapper">
                <cartcontrol 
                  :food="food" 
                  @add="addFood"/>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import cartcontrol from "./cartcontrol";

  export default {
    components: {
      cartcontrol
    },
    props: {
      selectFoods: {
        type: Array,
        default () {
          return [];
        }
      },
      deliveryPrice: {
        type: Number,
        default: 0
      },
      minPrice: {
        type: Number,
        default: 0
      }
    },

    data() {
      return {
        balls: [{
            show: false
          },
          {
            show: false
          },
          {
            show: false
          },
          {
            show: false
          },
          {
            show: false
          }
        ],
        dropBalls: [],
        fold: true
      };
    },

    computed: {
      totalPrice() {
        let total = 0;
        this.selectFoods.forEach(food => {
          total += food.price * food.count;
        });
        return total;
      },
      totalCount() {
        let count = 0;
        this.selectFoods.forEach(food => {
          count += food.count;
        });
        return count;
      },
      payDesc() {
        if (this.totalPrice === 0) {
          return `¥${this.minPrice}元起送`;
        } else if (this.totalPrice < this.minPrice) {
          let diff = this.minPrice - this.totalPrice;
          return `还差¥${diff}元起送`;
        } else {
          return "去结算";
        }
      },
      payClass() {
        if (this.totalPrice < this.minPrice) {
          return "not-enough";
        } else {
          return "enough";
        }
      },
      listShow() {
        if (!this.totalCount) {
          return false;
        }
        return !this.fold;
      }
    },

    methods: {
      toggleList() {
        if (!this.totalCount) {
          return;
        }
        this.fold = !this.fold;
      },
      hideList() {
        this.fold = true;
      },
      empty() {
        this.selectFoods.forEach(food => {
          food.count = 0;
        });
      },
      pay() {
        if (this.totalPrice < this.minPrice) {
          return;
        }
        window.alert(`支付${this.totalPrice}元`);
      },
      addFood(target) {
        this.drop(target);
      },

      drop(el) {
        for (let i = 0; i < this.balls.length; i++) {
          let ball = this.balls[i];
          if (!ball.show) {
            ball.show = true;
            ball.el = el;
            this.dropBalls.push(ball);
            return;
          }
        }
      },
      beforeDrop(el) {
        let count = this.balls.length;
        while (count--) {
          let ball = this.balls[count];
          if (ball.show) {
            let rect = ball.el.getBoundingClientRect();
            let x = rect.left - 32;
            let y = -(window.innerHeight - rect.top - 22);
            el.style.display = "";
            el.style.webkitTransform = `translate3d(0,${y}px,0)`;
            el.style.transform = `translate3d(0,${y}px,0)`;
            let inner = el.getElementsByClassName("inner-hook")[0];
            inner.style.webkitTransform = `translate3d(${x}px,0,0)`;
            inner.style.transform = `translate3d(${x}px,0,0)`;
          }
        }
      },
      dropping(el, done) {
        let rf = el.offsetHeight;
        this.$nextTick(() => {
          el.style.webkitTransform = "translate3d(0,0,0)";
          el.style.transform = "translate3d(0,0,0)";
          let inner = el.getElementsByClassName("inner-hook")[0];
          inner.style.webkitTransform = "translate3d(0,0,0)";
          inner.style.transform = "translate3d(0,0,0)";
          el.addEventListener("transitionend", done);
        });
      },
      afterDrop(el) {
        let ball = this.dropBalls.shift();
        if (ball) {
          ball.show = false;
          el.style.display = "none";
        }
      }
    },
  };

</script>

<style lang="scss">
  .shopcart {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 50;
    width: 100%;
    height: 48px;
    background: #000;

    .content {
      display: flex;
      background: rgba(61, 61, 63, 0.9);
      font-size: 0;
      color: rgba(255, 255, 255, 0.4);

      .content-left {
        flex: 1;

        .logo-wrapper {
          display: inline-block;
          vertical-align: top;
          position: relative;
          top: -10px;
          margin: 0 12px;
          padding: 6px;
          width: 56px;
          height: 56px;
          box-sizing: border-box;
          border-radius: 50%;
          background-image: radial-gradient(circle, #363636 6.266667vw, #444 0);

          .logo {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            text-align: center;
            background: #2b343c;

            &.highlight {
              background: rgb(0, 160, 220);
            }

            .icon-shopping_cart {
              margin: 0 auto;
              padding: 20% 0;
              display: block;
              width: 60%;
              height: 60%;
              color: #80858a;
            }
          }

          .num {
            position: absolute;
            top: 0;
            right: 0;
            width: 24px;
            height: 16px;
            line-height: 16px;
            text-align: center;
            border-radius: 16px;
            font-size: 9px;
            font-weight: 700;
            color: #ffffff;
            box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.4);
            background-image: linear-gradient(-90deg, #ff7416, #ff3c15 98%);
          }
        }

        .price {
          display: inline-block;
          vertical-align: top;
          margin-top: 12px;
          line-height: 24px;
          padding-right: 12px;
          box-sizing: border-box;
          border-right: 1px solid rgba(255, 255, 255, 0.1);
          font-size: 16px;
          font-weight: 700;

          &.highlight {
            color: #fff;
          }
        }

        .desc {
          display: inline-block;
          vertical-align: top;
          margin: 12px 0 0 12px;
          line-height: 24px;
          font-size: 10px;
        }
      }

      .content-right {
        flex: 0 0 105px;
        width: 105px;

        .pay {
          height: 48px;
          line-height: 48px;
          text-align: center;
          font-size: 14px;
          font-weight: 700;

          &.not-enough {
            color: #fff;
          }

          &.enough {
            background: #00b43c;
            color: #fff;
          }
        }
      }
    }

    .ball-container {
      .ball {
        position: fixed;
        left: 32px;
        bottom: 22px;
        z-index: 200;

        &.drop-transition {
          transition: all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41);

          .inner {
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: rgb(0, 160, 220);
            transition: all 0.4s;
          }
        }
      }
    }

    .mark {
      position: fixed;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.4);
      z-index: -2;
    }

    .shopcart-list {
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
      width: 100%;
      transform: translate3d(0, -100%, 0);

      &.fold-enter-active,
      &.fold-leave-active {
        transition: all 0.5s;
      }

      &.fold-enter,
      &.fold-leave-active {
        transform: translate3d(0, 0, 0);
      }

      .list-header {
        height: 40px;
        line-height: 40px;
        padding: 0 18px;
        background: #f3f5f7;
        border-bottom: 1px solid rgba(7, 17, 27, 0.1);

        .title {
          float: left;
          font-size: 14px;
          color: rgb(7, 17, 27);
        }

        .empty {
          float: right;
          font-size: 12px;
          color: rgb(0, 160, 220);
        }
      }

      .list-content {
        padding: 0 18px;
        max-height: 217px;
        overflow: hidden;
        background: #fff;

        .food {
          display: flex;
          align-items: center;
          position: relative;
          padding: 12px 0;
          box-sizing: border-box;
          position: relative;

          &:after {
            display: block;
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            border: 1px solid rgba(7, 17, 27, 0.1);
            content: " ";
          }

          .name {
            line-height: 24px;
            font-size: 14px;
            color: rgb(7, 17, 27);
          }

          .price {
            position: absolute;
            right: 90px;
            bottom: 12px;
            line-height: 24px;
            font-size: 14px;
            font-weight: 700;
            color: rgb(240, 20, 20);
          }

          .cartcontrol-wrapper {
            position: absolute;
            right: 0;
          }
        }
      }
    }
  }

</style>
