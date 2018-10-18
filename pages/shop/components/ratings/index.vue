<template>
  <div class="ratings-page">
    <div class="ratings-content">
      <div class="overview">
        <div class="overview-left">
          <h1 class="score">{{ seller.score }}</h1>
          <div class="title">
            商家评分
            <rating-star :rating="seller.score" />
          </div>
        </div>
        <div class="overview-right">
          <div class="score-wrapper">
            <span class="title">味道</span>
            <p class="score">{{ seller.serviceScore }}</p>
          </div>
          <div class="score-wrapper">
            <span class="title">包装</span>
            <p class="score">{{ seller.foodScore }}</p>
          </div>
          <div class="score-wrapper">
            <span class="title">配送</span>
            <p class="score">{{ seller.deliveryTime }}</p>
          </div>
        </div>
      </div>
      <div class="placeholder"/>
      <ratingselect 
        :select-type="selectType" 
        :only-content="onlyContent" 
        :ratings="ratings" 
        @select="selectRating"
        @toggle="toggleContent" />
      <div class="rating-wrapper">
        <ul>
          <li 
            v-for="(rating, index) in ratings" 
            v-show="needShow(rating.rateType, rating.text)" 
            :key="index" 
            class="rating-item">
            <div class="avatar">
              <span :style="'background-position: 0 '+rating.avatar"/>
            </div>
            <div class="content">
              <h1 class="name">{{ rating.username }}</h1>
              <div class="star-wrapper">
                <rating-star 
                  :size="24" 
                  :rating="rating.score" />
              </div>
              <p class="text">{{ rating.text }}</p>
              <div 
                v-show="rating.recommend && rating.recommend.length" 
                class="recommend">
                <span 
                  v-for="(item, index) in rating.recommend" 
                  :key="index" 
                  class="item">{{ item }}</span>
              </div>
              <div class="time">
                {{ rating.rateTime }}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import ratingStar from "~/components/ratingStar";
  import ratingselect from "./ratingselect";
  import * as shoppingApi from "~/assets/services/shopping";
  import moment from "moment";

  export default {
    components: {
      ratingStar,
      ratingselect
    },
    props: {
      seller: {
        default: {}
      }
    },
    data() {
      return {
        ratings: [],
        selectType: 2,
        onlyContent: true
      };
    },
    mounted() {
      shoppingApi.ratings().then(res => {
        if (res.code === 0) {
          this.ratings = res.data;
          this.ratings.map(item => {
            item.rateTime = moment(item.rateTime).format("YYYY/M/D");
          });
        }
      });
    },
    methods: {
      needShow(type, text) {
        if (this.onlyContent && !text) {
          return false;
        }
        if (this.selectType === 2) {
          return true;
        } else {
          return type === this.selectType;
        }
      },
      selectRating(type) {
        this.selectType = type;
      },
      toggleContent() {
        this.onlyContent = !this.onlyContent;
      }
    },
  };

</script>


<style lang="scss">
  @import "../../../../assets/styles/mixin";

  .ratings-page {
    background: #fff;

    .placeholder {
      height: px2rem(20px);
      background: #f5f5f5;
    }

    .overview {
      display: flex;
      padding: 18px 0;

      .overview-left {
        width: px2rem(340px);
        @include fj(center);
        align-items: center;
        text-align: center;

        .score {
          font-size: px2rem(80px);
          margin-right: px2rem(20px);
          color: #ff6000;
          font-weight: 400;
        }

        .title {
          font-size: 12px;
        }
      }

      .overview-right {
        flex: 1;
        @include fj(space-around);
        align-items: center;
        text-align: center;
        color: #666;

        .score-wrapper {
          .title {
            display: inline-block;
          }

          .score {
            font-size: px2rem(40px);
          }
        }
      }
    }

    .rating-wrapper {
      padding: 0 18px;

      .rating-item {
        display: flex;
        padding: 18px 0;

        .avatar {
          flex: 0 0 28px;
          width: 28px;
          margin-right: 12px;

          span {
            border-radius: 50%;
            display: inline-block;
            width: 30px;
            height: 30px;
            background: url("../../../../assets/images/sprite-avatar.png");
            background-position: 0 0;
            background-size: 30px;
          }
        }

        .content {
          position: relative;
          flex: 1;
          font-size: px2rem(28px);

          .name {
            margin-bottom: 4px;
            line-height: 12px;
            color: rgb(7, 17, 27);
          }

          .star-wrapper {
            margin-bottom: 6px;

            .star {
              display: inline-block;
              margin-right: 6px;
              vertical-align: top;
            }
          }

          .text {
            margin: 8px 0;
            line-height: 18px;
            color: rgb(7, 17, 27);
          }

          .recommend {
            line-height: 16px;
            font-size: 0;

            .icon-thumb_up,
            .item {
              display: inline-block;
              margin: 0 8px 4px 0;
              font-size: 9px;
            }

            .icon-thumb_up {
              color: rgb(0, 160, 220);
            }

            .item {
              padding: 0 6px;
              border: 1px solid rgba(7, 17, 27, 0.1);
              border-radius: 1px;
              color: rgb(147, 153, 159);
              background: #fff;
            }
          }

          .time {
            position: absolute;
            top: 0;
            right: 0;
            line-height: 12px;
            font-size: 10px;
            color: rgb(147, 153, 159);
          }
        }
      }
    }
  }

</style>
