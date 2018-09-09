<template>
  <div class="ratingselect">
    <div class="rating-type border-1px">
      <span @click="select(2,$event)" class="block positive" :class="{'active':selectType===2}">{{desc.all}}
        <span class="count">{{ratings.length}}</span>
      </span>
      <span @click="select(0,$event)" class="block positive" :class="{'active':selectType===0}">{{desc.positive}}<span
          class="count">{{positives.length}}</span></span>
      <span @click="select(1,$event)" class="block negative" :class="{'active':selectType===1}">{{desc.negative}}<span
          class="count">{{negatives.length}}</span></span>
    </div>
    <div @click="toggleContent" class="switch" :class="{'on':onlyContent}">
      <!-- <span class="icon-check_circle"></span> -->
      <svg width="12" height="12" class="check"><use xlink:href="#select"></use></svg>
      <span class="text">只看有内容的评价</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      ratings: {
        type: Array,
        default() {
          return [];
        }
      },
      selectType: {
        type: Number,
        default: 2
      },
      onlyContent: {
        type: Boolean,
        default: false
      },
      desc: {
        type: Object,
        default() {
          return {
            all: '全部',
            positive: '满意',
            negative: '不满意'
          };
        }
      }
    },
    computed: {
      positives() {
        return this.ratings.filter((rating) => {
          return rating.rateType === 0;
        });
      },
      negatives() {
        return this.ratings.filter((rating) => {
          return rating.rateType === 1;
        });
      }
    },
    methods: {
      select(type, event) {
        this.$emit('select', type);
      },
      toggleContent(event) {
        this.$emit('toggle');
      }
    }
  };
</script>

<style lang="scss">
  .ratingselect {
    .rating-type {
      padding: 18px 0;
      margin: 0 18px;
      font-size: 0;
      .block {
        display: inline-block;
        padding: 8px 12px;
        margin-right: 8px;
        line-height: 16px;
        border-radius: 1px;
        font-size: 12px;
        color: rgb(77, 85, 93);
        &.active {
          color: #fff;
        }
        .count {
          margin-left: 2px;
          font-size: 12px;
        }
        &.positive {
          background: rgba(0, 160, 220, 0.2);
          &.active {
            background: rgb(0, 160, 220);
          }
        }
        &.negative {
          background: rgba(77, 85, 93, 0.2);
          &.active {
            background: rgb(77, 85, 93)
          }
        }
      }
    }
    .switch {
      display: flex;
      align-items: center;
      padding: 12px 18px;
      line-height: 24px;
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);
      color: rgb(147, 153, 159);
      font-size: 0;
      svg {
        margin-right: 5px;
        fill:#e8e8e8;
      }
      &.on {
        .check {
          fill: #76d572;
        }
      }
      .icon-check_circle {
        display: inline-block;
        vertical-align: top;
        margin-right: 4px;
        font-size: 24px;
      }
      .text {
        display: inline-block;
        vertical-align: top;
        font-size: 12px;
      }
    }
  }
</style>
