<template>
  <div class="goods-page">
    <div class="menu-wrapper">
      <ul>
        <li
          v-for="(item, index) in goods"
          :key="index"
          :class="{'current':currentIndex === index}"
          class="menu-item"
          @click="selectMenu(index,$event)">
          <span class="text">
            <!-- <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span> -->
            {{ item.name }}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper">
      <ul>
        <li
          v-for="(item, index) in goods"
          :key="index"
          class="food-list food-list-hook">
          <h1
            :id="'a'+index"
            class="title">{{ item.name }}</h1>
          <ul>
            <li
              v-for="(food, index) in item.foods"
              :key="index"
              class="food-item border-1px">
              <div class="icon">
                <img :src="food.icon" >
              </div>
              <div class="content">
                <h2 class="name">{{ food.name }}</h2>
                <p class="desc">{{ food.description }}</p>
                <div class="extra">
                  <span class="count">月售{{ food.sellCount }}份</span><span>好评率{{ food.rating }}%</span>
                </div>
                <div class="price">
                  <span class="now">￥<b>{{ food.price }}</b></span>
                  <cartcontrol :food="food" />
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <shopcart
      ref="shopcart"
      :select-foods="selectFoods"
      :delivery-price="seller.deliveryPrice"
      :min-price="seller.minPrice"/>
  </div>
</template>

<script>
  import shopcart from "./shopcart";
  import cartcontrol from "./cartcontrol";
  import * as shoppingApi from "~/assets/services/shopping";

  export default {
    components: {
      shopcart,
      cartcontrol
    },
    props: {
      seller: {
        default: {}
      }
    },
    data() {
      return {
        goods: [],
        listHeight: [],
        scrollY: 0,
        classMap: ["decrease", "discount", "special", "invoice", "guarantee"],
        currentIndex: 0,
        isScroll: false
      };
    },
    computed: {
      selectFoods() {
        let foods = [];
        this.goods.forEach(good => {
          good.foods.forEach(food => {
            if (food.count) {
              foods.push(food);
            }
          });
        });
        return foods;
      }
    },
    created() {},
    mounted() {
      shoppingApi.goods().then(res => {
        if (res.code === 0) {
          this.goods = res.data;
        }
      });

      //菜品滚动选择类目
      document.querySelector(".foods-wrapper").addEventListener(
        "scroll",
        this.throttle(() => {
          // 防止手动选择的时候误操作
          if (this.isScroll) {
            return;
          }
          this.goods.map((item, index) => {
            const rect_top = document
              .querySelector("#a" + index)
              .getBoundingClientRect().top;
            const container_top = document
              .querySelector(".foods-wrapper")
              .getBoundingClientRect().top;
            if (
              rect_top - container_top < 100 &&
              rect_top - container_top > -100
            ) {
              this.currentIndex = index;
            }
          });
        }, 50)
      );
    },
    methods: {
      selectMenu(index) {
        if (index === this.currentIndex) {
          return;
        }
        this.currentIndex = index;
        this.animateScroll("#a" + index, ".foods-wrapper", 50);
      },
      // 平滑滚动方法
      animateScroll(element, container, speed) {
        this.isScroll = true;
        let rect =
          document.querySelector(element).getBoundingClientRect().top -
          document.querySelector(container).getBoundingClientRect().top;
        //获取元素相对窗口的top值，此处应加上窗口本身的偏移
        let top = rect + document.querySelector(container).scrollTop;
        let currentTop = 0;
        let requestId;
        //采用requestAnimationFrame，平滑动画
        const step = timestamp => {
          if (currentTop <= top) {
            document.querySelector(container).scrollTo(0, currentTop);
            requestId = window.requestAnimationFrame(step);
          } else {
            window.cancelAnimationFrame(requestId);
            this.isScroll = false;
          }
          currentTop += speed;
        };
        window.requestAnimationFrame(step);
      },
      // 函数防抖
      throttle(method, delay) {
        var timer = null;
        return function () {
          clearTimeout(timer);
          timer = setTimeout(() => {
            method.apply(this, arguments);
          }, delay);
        };
      }
    },
  };

</script>

<style lang="scss">
  @import "../../../../assets/styles/mixin";

  .goods-page {
    display: flex;
    background: #fff;
    width: 100%;

    .menu-wrapper {
      flex: 0 0 80px;
      width: 80px;
      height: calc(100vh - 38px);
      overflow-x: hidden;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      background: #f8f8f8;

      .menu-item {
        display: table;
        height: 54px;
        padding: 0 12px;
        line-height: 14px;

        &.current {
          position: relative;
          margin-top: -1px;
          z-index: 10;
          background: #ffffff;

          .text {
            color: #333;
          }
        }

        .icon {
          display: inline-block;
          vertical-align: middle;
          width: 12px;
          height: 12px;
          margin-right: 2px;
          background-size: 12px 12px;
          background-repeat: no-repeat;

          // &.decrease {
          //   bg-image('decrease_3');
          // }

          // &.discount {
          //   bg-image('discount_3');
          // }

          // &.guarantee {
          //   bg-image('guarantee_3');
          // }

          // &.invoice {
          //   bg-image('invoice_3');
          // }

          // &.special {
          //   bg-image('special_3');
          // }
        }

        .text {
          display: table-cell;
          width: 56px;
          vertical-align: middle;
          font-size: 12px;
          position: relative;
          color: #666;
        }
      }
    }

    .foods-wrapper {
      width: calc(100vw - 80px);
      height: calc(100vh - 38px);
      overflow-x: hidden;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      padding-bottom: 60px;

      .title {
        padding-left: 14px;
        height: 30px;
        line-height: 30px;
        font-size: 12px;
        color: #666;
      }

      .food-item {
        display: flex;
        margin: 10px;
        padding-bottom: 18px;
        position: relative;

        &:after {
          display: block;
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          content: " ";
        }

        &:last-child {
          margin-bottom: 0;

          &:after {
            display: none;
          }
        }

        .icon {
          flex: 0 0 80px;
          margin-right: 10px;
        }

        .content {
          flex: 1;
          position: relative;

          .name {
            margin: 2px 0 8px 0px;
            height: 14px;
            line-height: 14px;
            font-size: 14px;
            color: rgb(7, 17, 27);
          }

          .desc,
          .extra {
            line-height: 10px;
            font-size: 12px;
            color: rgb(147, 153, 159);
            transform: scale(0.9) translateX(-6%);
          }

          .desc {
            margin-bottom: 8px;
            line-height: 12px;
            max-width: px2rem(350px);
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          .extra {
            .count {
              margin-right: 12px;
            }
          }

          .price {
            width: 100%;
            font-weight: 700;
            position: absolute;
            bottom: 0;
            @include fj(space-between);

            .now {
              margin-right: 8px;
              font-size: 14px;
              color: rgb(255, 83, 57);
            }

            .old {
              text-decoration: line-through;
              font-size: 10px;
              color: rgb(147, 153, 159);
            }

            b {
              font-weight: normal;
              font-size: 18px;
            }
          }
        }
      }
    }
  }

</style>
