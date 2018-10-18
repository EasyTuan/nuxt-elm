<template>
  <div class="user-page">
    <mt-header
      fixed
      title="我的"/>
    <section>
      <section class="profile-number">
        <router-link
          :to="userInfo&&userInfo.user_id? '/user/info' : '/login'"
          class="profile-link">
          <img
            v-if="userInfo&&userInfo.user_id&&userInfo.avatar"
            :src="userInfo.avatar"
            class="privateImage">
          <span
            v-else
            class="privateImage">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAM1BMVEXE5/XI6fbT7fjW7/jl9fvw+f3////a8Pnt+PzL6vb7/v7i8/rP7Pf4/P7e8vn0+/3p9vvI4mwRAAACI0lEQVR4Ae3YBxbkIAgGYDCKgqbc/7LbS5hJexvMNr7Xp/0j9oBzzjnnnHPOuX8Qhq/wycwhJvopxQGfSM2F3pXcOZuj0DaJDN1gpSMRoY9B6Jhk6AALnSsI1tpIV0jrX+ZHyp3putwzN9XA8BmHmvolN1LGCWENp5GUADZYVGyGd1lFC4OJmVYqbKu0MoOFem22TPrv3cf004ywa6A1htvStdw2Go+vcC03C5EuzV3pSv/iQsqCllN4gj1tJmWC+342JV1dx8cGBuR8nEbznVHNkQW28UxKBeV+pRtsCrrMEsDGeLIIVlISgg08HqiYSIlgJRxWuoku8wA2VCU3dwVlZugQnE4PnYt+t05wR6FvysmeIPltrC8mC3U97t65bRQq9whO23uC6gRp9sFMa9NOJ8z2wWF3T1BvDfdXzLLb4oL7a1m9P53mq50PwSR42ltA2v6eEC2uFGH38Ja39wRVDUGDTSJudH+ETSg3G6wuESO8anxSpww3xF+aGvX+yWvQZ72rohQ0O+wFeI6q9QiPYr0cPGih31Rs1pfjBy2/KxnlYjJPtTYwNFy7CE5CnyzGxf4pMWzhQkTWyTjTWkV4hVW6PNhjIWUZdF+okgiDnSakSakhMHAItQhpAXom7xN+8nG1OnTawkRXJARzlc5V6KElOpYadJJH2jdm6CjPtG3O0FmL780eY4MncI5J6CtJMTM8iwODc84555xzzv0PPgKMKi2olgNo0QAAAABJRU5ErkJggg==">
          </span>
          <div class="user-info">
            <p>{{ username }}</p>
            <p>
              <span class="user-icon">
                <svg
                  class="icon-mobile"
                  fill="#fff">
                  <svg
                    id="mobile"
                    viewBox="0 0 655 1024"
                    width="100%"
                    height="100%">
                    <path d="M0 122.501v778.998C0 968.946 55.189 1024 123.268 1024h408.824c68.52 0 123.268-54.846 123.268-122.501V122.501C655.36 55.054 600.171 0 532.092 0H123.268C54.748 0 0 54.846 0 122.501zM327.68 942.08c-22.622 0-40.96-18.338-40.96-40.96s18.338-40.96 40.96-40.96 40.96 18.338 40.96 40.96-18.338 40.96-40.96 40.96zM81.92 163.84h491.52V819.2H81.92V163.84z"/>
                  </svg>
                </svg>
              </span>
              <span class="icon-mobile-number">{{ mobile }}</span>
            </p>
          </div>
          <span class="arrow">
            <svg
              class="arrow-svg"
              fill="#fff">
              <svg
                id="arrow-right"
                viewBox="0 0 1024 1024"
                class="icon"
                width="100%"
                height="100%">
                <path
                  d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z"
                  class="selected"/>
              </svg>
            </svg>
          </span>
        </router-link>
      </section>
      <section class="info-data">
        <ul class="clear">
          <li class="info-data-link">
            <span class="info-data-top"><b>0.00</b>元</span>
            <span class="info-data-bottom">钱包</span>
          </li>
          <router-link
            :to="userInfo&&userInfo.user_id? '/user/benefit' : '/login'"
            class="info-data-link">
            <span class="info-data-top"><b>0</b>个</span>
            <span class="info-data-bottom">红包</span>
          </router-link>
          <li class="info-data-link">
            <span class="info-data-top"><b>0</b>个</span>
            <span class="info-data-bottom">金币</span>
          </li>
        </ul>
      </section>
      <section class="profile-1reTe">
        <!-- 我的地址 -->
        <router-link
          :to="userInfo&&userInfo.user_id? '/user/address' : '/login'"
          class="myorder">
          <aside>
            <svg fill="#4aa5f0">
              <svg
                id="address"
                viewBox="0 0 16 16"
                width="100%"
                height="100%">
                <g
                  fill="none"
                  fill-rule="evenodd">
                  <path
                    fill="none"
                    d="M0 0h16v16H0z"/>
                  <path
                    fill="#4AA5F0"
                    d="M8 2.667A2.667 2.667 0 1 1 8 8a2.667 2.667 0 0 1 0-5.333M2.273 6.509a5.48 5.48 0 0 1-.051-.732 5.778 5.778 0 1 1 11.556 0 5.54 5.54 0 0 1-.085.948 5.704 5.704 0 0 1-.258.999 6.565 6.565 0 0 1-.081.22c-.016.039-.03.078-.047.116C11.932 11.45 8 13.778 8 13.778S3.734 11.273 2.535 7.64a5.756 5.756 0 0 1-.262-1.132zm8.584 6.701c2.516.124 5.143.43 5.143 1.068 0 .901-5.233 1.138-8 1.138-2.768 0-8-.237-8-1.138 0-.639 2.627-.944 5.143-1.068 1.22 1.044 2.3 1.61 2.404 1.663.14.07.296.108.453.108.156 0 .314-.038.454-.109.104-.052 1.184-.618 2.403-1.662z"/>
                </g>
              </svg>
            </svg>
          </aside>
          <div class="myorder-div">
            <span>我的地址</span>
            <span class="myorder-divsvg">
              <svg fill="#bbb">
                <use
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xlink:href="#arrow-right"/>
              </svg>
            </span>
          </div>
        </router-link>
      </section>
      <section class="profile-1reTe">
        <!-- 金币商城 -->
        <a
          href="https://home.m.duiba.com.cn/#/chome/index"
          class="myorder">
          <aside>
            <svg fill="#fc7b53">
              <svg
                id="point"
                viewBox="0 0 16 16"
                width="100%"
                height="100%">
                <g
                  fill="none"
                  fill-rule="evenodd">
                  <path
                    fill="none"
                    d="M0 0h16v16H0z"/>
                  <path
                    fill="#94D94A"
                    d="M2.257.5h11.486a1 1 0 0 1 .998.936l.757 11.728a2 2 0 0 1-1.996 2.129H2.498a2 2 0 0 1-1.996-2.129L1.26 1.436A1 1 0 0 1 2.257.5zm9.658 3.782C11.82 6.452 10.14 8.18 7.95 8.18c-2.202 0-3.925-1.747-4.003-3.933a.594.594 0 0 1 .36-1.075.596.596 0 1 1 .25 1.14c.109 1.82 1.548 3.26 3.393 3.26 1.853 0 3.263-1.455 3.357-3.287a.595.595 0 0 1 .3-1.113.595.595 0 1 1 .307 1.11z"/>
                </g>
              </svg>
            </svg>
          </aside>
          <div class="myorder-div">
            <span>金币商城</span>
            <span class="myorder-divsvg">
              <svg fill="#bbb">
                <use
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xlink:href="#arrow-right"/>
              </svg>
            </span>
          </div>
        </a>
        <!-- 分享拿10元现金 -->
        <a
          href="https://h5.ele.me/commend/#/"
          class="myorder">
          <aside>
            <svg fill="#ffc636">
              <svg
                id="commend"
                viewBox="0 0 40 40"
                width="100%"
                height="100%">
                <g
                  fill="none"
                  fill-rule="evenodd">
                  <path
                    fill="#FC7B53"
                    d="M21 12c-.167-.434-1-1-1-1-.275.437-.767.601-1 1v7H4v-6c0-.843.716-1.562 2-2h6c-1.49.06-2.84-.711-3-2 .06-1.814 1.949-4.528 5-4 2.552.733 4.541 2.943 6 5 1.6-2.094 3.778-4.58 7-5 2.23-.288 4.282 2.198 4 4-.208 1.276-1.582 2.06-3 2h6c1.173.437 1.89 1.156 2 2v6H21v-7zm-7-6c-1.123-.321-1.966.238-3 1 .097.68-.258 1.373 0 2 1.653 1.192 5.452 1.096 8 1-1.202-1.529-2.679-3.07-5-4zm16 3c.726-1.246-1.22-3.714-3-3-2.313 1.075-3.755 2.506-5 4 1.071 0 2.158.023 3 0 1.542-.075 3.965-.16 5-1zM19 36H8c-1.326-.255-2-.907-2-2V20h13v16zm13 0H21V20h13v14c-.47 1.53-1.124 1.745-2 2z"/>
                </g>
              </svg>
            </svg>
          </aside>
          <div class="myorder-div">
            <span>分享拿10元现金</span>
            <span class="myorder-divsvg">
              <svg fill="#bbb">
                <use
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xlink:href="#arrow-right"/>
              </svg>
            </span>
          </div>
        </a>
      </section>
      <section class="profile-1reTe">
        <!-- 我的客服 -->
        <router-link
          to="/user/service"
          class="myorder">
          <aside>
            <svg fill="#4aa5f0">
              <svg
                id="service"
                viewBox="0 0 54 54"
                width="100%"
                height="100%">
                <g
                  fill="none"
                  fill-rule="evenodd">
                  <path
                    stroke="#4DA6F0"
                    stroke-width="3"
                    d="M48 28c0 11.598-9.402 21-21 21"/>
                  <path
                    fill="#4DA6F0"
                    d="M43 40.012v-18h2a9 9 0 0 1 9 9 9 9 0 0 1-9 9h-2zM10 40.012H9a9 9 0 0 1-9-9 9 9 0 0 1 9-9h1v18zM27 46a3 3 0 1 0 0 6 3 3 0 1 0 0-6"/>
                  <path
                    fill="#4DA6F0"
                    d="M43 24h6c0-12.426-9.574-23-22-23S4 11.574 4 24h6c0-9.098 7.902-17 17-17 9.097 0 16 7.902 16 17z"/>
                </g>
              </svg>
            </svg>
          </aside>
          <div class="myorder-div">
            <span>我的客服</span>
            <span class="myorder-divsvg">
              <svg fill="#bbb">
                <use
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xlink:href="#arrow-right"/>
              </svg>
            </span>
          </div>
        </router-link>
        <!-- 下载饿了么APP -->
        <router-link
          to="/download"
          class="myorder">
          <aside>
            <svg fill="#3cabff">
              <svg
                id="download"
                viewBox="0 0 40 40"
                width="100%"
                height="100%">
                <path d="M30 5H10c-2.8 0-5 2.2-5 5v20c0 2.8 2.2 5 5 5h20c2.8 0 5-2.2 5-5V10c0-2.8-2.2-5-5-5zm-3.9 22.7c-.1.2-.3.4-.6.5-4.3 2.8-10.1 1.6-13-2.8-2.8-4.3-1.6-10.2 2.8-13 4.3-2.8 10.2-1.6 13 2.8.2.2.3.5.4.8.1.2 0 .5-.2.7l-8.8 5.7c-.2.2-.6.1-.7-.2l-.5-.7c-.4-.6-.2-1.5.4-1.9l5.6-3.6c.2-.2.3-.5.2-.7l-.1-.1c-2.2-1.8-5.4-2.1-7.9-.4-3.1 2-4 6.1-2 9.2 2 3.1 6.1 4 9.2 2 .6-.4 1.3-.2 1.7.4l.3.7c.1.2.4.5.2.6zm3.1-4.4l-.9.6c-.2.2-.6.1-.7-.2L26.5 22c-.2-.2-.1-.6.2-.7l1.8-1.1c.2-.2.6-.1.7.2l.6.9c.3.6.1 1.5-.6 2z"/>
              </svg>
            </svg>
          </aside>
          <div
            class="myorder-div"
            style="border-bottom:0;">
            <span>下载饿了么APP</span>
            <span class="myorder-divsvg">
              <svg fill="#bbb">
                <use
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xlink:href="#arrow-right"/>
              </svg>
            </span>
          </div>
        </router-link>
      </section>
    </section>
    <Tabbar page="3" />
  </div>
</template>

<script>
  import Tabbar from "~/components/tabbar";
  import {
    mapGetters
  } from "vuex";

  export default {
    components: {
      Tabbar
    },
    data() {
      return {
        profiletitle: "我的",
        username: "登录/注册", //用户名
        resetname: "",
        mobile: "登录后享受更多特权", //电话号码
        avatar: "" //头像地址
      };
    },
    computed: {
      ...mapGetters(["userInfo"])
    },
    watch: {
      userInfo: function (value) {
        this.initData();
      }
    },
    mounted() {
      this.initData();
    },
    head: {
      title: "我的"
    },
    methods: {
      initData() {
        if (this.userInfo && this.userInfo.user_id) {
          this.avatar = this.userInfo.avatar;
          this.username = this.userInfo.username;
          this.mobile = this.userInfo.mobile || "登录后享受更多特权";
        } else {
          this.username = "登录/注册";
          this.mobile = "登录后享受更多特权";
        }
      }
    }
  };

</script>

<style lang="scss" scoped>
  @import "../../assets/styles/mixin";

  .user-page {
    .profile-number {
      padding-top: px2rem(88px);

      .profile-link {
        display: block;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        background: $primary;
        padding: 1.2rem 0.6rem;

        .privateImage {
          display: inline-block;
          @include wh(2.5rem, 2.5rem);
          border-radius: 50%;
          vertical-align: middle;

          img {
            background: $fc;
            border-radius: 50%;
            @include wh(2.5rem, 2.5rem);
          }
        }

        .user-info {
          margin-left: 0.8rem;
          -webkit-box-flex: 1;
          -ms-flex-positive: 1;
          flex-grow: 1;

          p {
            font-weight: 700;
            @include sc(0.8rem, $fc);

            .user-icon {
              @include wh(0.3rem, 0.5rem);
              display: inline-block;
              vertical-align: middle;
              line-height: 0.75rem;
              position: relative;
              top: -0.12rem;

              .icon-mobile {
                @include wh(100%, 100%);
              }
            }

            .icon-mobile-number {
              display: inline-block;
              margin-left: px2rem(5px);
              @include sc(0.57333rem, $fc);
            }
          }
        }

        .arrow {
          @include wh(0.46667rem, 0.98rem);
          display: inline-block;

          svg {
            @include wh(100%, 100%);
          }
        }
      }
    }

    .info-data {
      width: 100%;
      background: $fc;
      box-sizing: border-box;

      ul {
        @include fj();

        .info-data-link {
          display: inline-block;
          width: calc(100% / 3);
          border-right: 1px solid #f1f1f1;

          span {
            display: block;
            width: 100%;
            text-align: center;
          }

          .info-data-top {
            @include sc(0.55rem, #333);
            padding: 0.853333rem 0 0.453333rem;

            b {
              display: inline-block;
              @include sc(1.2rem, $primary);
              font-weight: 500;
              line-height: 1rem;
              font-family: Helvetica Neue, Tahoma;
            }
          }

          .info-data-bottom {
            @include sc(0.57333rem, #666);
            font-weight: 400;
            padding-bottom: 0.453333rem;
          }
        }

        .info-data-link:nth-of-type(2) {
          .info-data-top {
            b {
              color: #ff5f3e;
            }
          }
        }

        .info-data-link:nth-of-type(3) {
          border: 0;

          .info-data-top {
            b {
              color: #6ac20b;
            }
          }
        }
      }
    }

    .profile-1reTe {
      margin-top: 0.4rem;
      background: $fc;

      .myorder {
        padding-left: 1.6rem;
        display: flex;
        align-items: center;

        aside {
          @include wh(0.7rem, 0.7rem);
          margin-left: -0.866667rem;
          margin-right: 0.266667rem;
          display: flex;
          align-items: center;

          svg {
            @include wh(100%, 100%);
          }
        }

        .myorder-div {
          width: 100%;
          border-bottom: 1px solid #f1f1f1;
          padding: 0.433333rem 0.266667rem 0.433333rem 0;
          @include sc(0.7rem, #333);
          display: flex;
          justify-content: space-between;

          span {
            display: block;
          }

          .myorder-divsvg {
            @include wh(0.46667rem, 0.466667rem);

            svg {
              @include wh(100%, 100%);
            }
          }
        }
      }

      .myorder:nth-of-type(3) .myorder-div {
        border: 0;
      }
    }
  }

</style>
