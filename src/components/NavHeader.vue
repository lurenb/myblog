<template>
  <div class="header">
    <!-- 导航顶部栏 -->
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <span class="sep">|</span>
          <a href="javascript:;">MIUI</a>
          <span class="sep">|</span>
          <a href="javascript:;">loT</a>
          <span class="sep">|</span>
          <a href="javascript:;">云服务</a>
          <span class="sep">|</span>
          <a href="javascript:;">金融</a>
          <span class="sep">|</span>
          <a href="javascript:;">有品</a>
          <span class="sep">|</span>
          <a href="javascript:;">小爱开发平台</a>
          <span class="sep">|</span>
          <a href="javascript:;">企业团购</a>
          <span class="sep">|</span>
          <a href="javascript:;">资质证照</a>
          <span class="sep">|</span>
          <a href="javascript:;">协议规则</a>
          <span class="sep">|</span>
          <a href="javascript:;" class="downapp">
            下载app
            <span class="appQRcode">
              <img src="/imgs/nav/miDQcode.png" alt="erweima" width="90px" height="90px" />小米商城APP
            </span>
          </a>
          <span class="sep">|</span>
          <a href="javascript:;">Select Location</a>
        </div>
        <div class="top-user">
          <a href="/login">登录</a>
          <span class="sep">|</span>
          <a href="javascript:;">注册</a>
          <span class="sep">|</span>
          <a href="javascript:;">消息通知</a>
          <span class="sep">|</span>
          <a href="javascript:;" class="my-cart">
            <span class="icon-cart"></span>购物车
          </a>
        </div>
      </div>
    </div>
    <!-- 导航头部栏 -->
    <div class="nav-header">
      <div class="container">
        <!-- 头部logo -->
        <div class="header-logo">
          <a href="javascript:;" class="logo"></a>
        </div>
        <!-- 头部菜单 -->
        <div class="header-menu">
          <ul class="item-meun">
            <li class="first">
              <a href>
                <span>小米手机</span>
              </a>
              <div class="item-children">
                <ul class="children-list">
                  <li v-for="(item,index) in miList" :key="index">
                    <a href="#" target="_blank">
                      <img :src="item.img" alt />
                      <h2 class="title">{{item.title}}</h2>
                      <p class="price">{{item.price}}</p>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="first">
              <a href>
                <span>Redmi红米</span>
              </a>
            </li>
            <li class="first">
              <a href>
                <span>电视</span>
              </a>
            </li>
            <li class="first">
              <a href>
                <span>笔记本</span>
              </a>
            </li>
            <li class="first">
              <a href>
                <span>家电</span>
              </a>
            </li>
            <li class="first">
              <a href>
                <span>路由器</span>
              </a>
            </li>
            <li class="first">
              <a href>
                <span>智能硬件</span>
              </a>
            </li>
            <li class="first">
              <a href>
                <span>服务</span>
              </a>
            </li>
            <li class="first">
              <a href>
                <span>社区</span>
              </a>
            </li>
          </ul>
        </div>
        <!-- 搜索功能 -->
        <div class="header-search">
          <form
            action="https://search.mi.com/search"
            class="container"
            @mouseenter="seenter"
            @mouseleave="leave"
          >
            <input
              type="search"
              name="keyword"
              class="text"
              :class="{mouseinout: inout, mousefocus: mousefocus}"
              @focus="focus"
              @blur="blur"
            />
            <i class="iconfont icon-fangdajing"></i>
            <input
              class="search-btn"
              type="submit"
              value
              :class="{mouseinout: inout, mousefocus: mousefocus}"
            />
            <a href="javascript:;">小米10</a>
            <a href="javascript:;">RedmiK30 Pro</a>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-header",
  data() {
    return {
      inout: false,
      mousefocus: false,
      miproduct: false,
      miList: [
        {
          img: "/imgs/nav/小米手机/mi10 pro.webp",
          title: "小米10 pro",
          price: "4999元起"
        },
        {
          img: "/imgs/nav/小米手机/mi10.webp",
          title: "小米10",
          price: "3999元起"
        },
        {
          img: "/imgs/nav/小米手机/小米CC9 Pro.webp",
          title: "小米CC9 Pro",
          price: "2599元起"
        },
        {
          img: "/imgs/nav/小米手机/小米9 Pro 5G.webp",
          title: "小米9 Pro 5G",
          price: "3699元起"
        },
        {
          img: "/imgs/nav/小米手机/miCC9.png",
          title: "小米CC9",
          price: "1499元起"
        },
        {
          img: "/imgs/nav/小米手机/miCC9e.png",
          title: "小米cc9e",
          price: "1299元起"
        }
      ]
    };
  },
  methods: {
    seenter() {
      this.inout = true;
    },
    leave() {
      this.inout = false;
    },
    focus() {
      this.mousefocus = true;
    },
    blur() {
      this.mousefocus = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./../assets/scss/mixin.scss";
.header {
  // 导航顶部栏
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background: #333333;
    color: antiquewhite;
    .container {
      @include flex();
      width: 1226px;
      margin-right: auto;
      margin-left: auto;
      a {
        display: inline-block;
        color: #b0b0b0;
        &:hover {
          color: #fff;
        }
      }
      .sep {
        margin: 0 0.3em;
        color: #424242;
      }
      .downapp {
        position: relative;
        &:hover .appQRcode {
          height: 148px;
        }
        .appQRcode {
          background-color: #fff;
          position: absolute;
          z-index: 99999;
          top: 40px;
          left: 50%;
          margin-left: -60px;
          width: 124px;
          height: 0;
          box-shadow: 0 1px 5px #aaa;
          text-align: center;
          overflow: hidden;
          font-size: 13px;
          color: black;
          transition: height 0.3s;
          img {
            display: block;
            margin: 10px auto 5px;
          }
        }
        &:hover::before {
          position: absolute;
          bottom: 0;
          left: 20px;
          content: "";
          border: 5px solid transparent;
          border-bottom-color: white;
        }
      }
      .my-cart {
        width: 110px;
        text-align: center;
        background: #424242;
        .icon-cart {
          display: inline-block;
          width: 16px;
          height: 12px;
          background: url("/imgs/icon-cart.png") no-repeat center;
          background-size: contain;
          margin-right: 4px;
        }
      }
    }
  }
  // 导航头部位置
  .nav-header {
    position: relative;
    .container {
      @include flex();
      height: 100px;
      // line-height: 100px;
      width: 1226px;
      margin: 0 auto;
      .header-logo {
        margin-top: 15px;
        .logo {
          position: relative;
          display: inline-block;
          overflow: hidden;
          width: 55px;
          height: 55px;
          background-color: #ff6700;
          &::after,
          &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 55px;
            height: 55px;
            transition: all 0.2s;
          }
        }
        .logo::before {
          background: url("/imgs/nav/milogo.png") no-repeat 50% 50%;
          opacity: 1;
        }
        .logo::after {
          background: url("/imgs/nav/logo-house.png") no-repeat 50% 50%;
          opacity: 0;
          margin-left: -55px;
        }
        /* css过渡方式完成logo切换 */
        .logo:hover::after {
          margin-left: 0;
          opacity: 1;
        }
        .logo:hover::before {
          opacity: 0;
          margin-left: 55px;
        }
      }
      .header-menu {
        display: inline-block;
        widows: 650px;
        .item-meun {
          display: flex;
          font-size: 16px;
          .first {
            height: 100px;
            line-height: 100px;
            padding: 0 10px;
            &:hover span {
              color: #ff6700;
            }
            &:hover .item-children {
              display: block;
            }
            .item-children {
              display: none;
              margin-top: -1px;
              position: absolute;
              z-index: 20;
              left: 0px;
              background-color: #fff;
              width: 1349px;
              border-top: 1px solid #e0e0e0;
              .children-list {
                display: flex;
                justify-content: center;
                text-align: center;
                font-size: 12px;
                box-shadow: 0 3px 4px rgba(0, 0, 0, 0.18);
                li {
                  line-height: 0;
                  padding: 35px 12px 15px;
                  &::before {
                    content: "";
                    position: absolute;
                    width: 1px;
                    height: 100px;
                    background-color: #e0e0e0;
                  }
                  &:nth-child(1)::before {
                    content: "";
                    width: 0px;
                  }
                  a {
                    display: inline-block;
                    width: 180px;
                    img {
                      width: 160px;
                      height: 110px;
                    }
                    .title {
                      font-weight: normal;
                      width: 180px;
                      height: 20px;
                      line-height: 20px;
                      font-size: 12px;
                    }
                    .price {
                      width: 180px;
                      height: 20px;
                      line-height: 20px;
                      color: #ff6700;
                    }
                  }
                }
              }
            }
          }
        }
      }
      .header-search {
        .container {
          position: relative;
          width: 300px;
          height: 50px;
          a {
            position: absolute;
            height: 16px;
            line-height: 16px;
            padding: 2px 2px;
            background-color: #efe7e1;
            color: #7c7c95;
            &:hover {
              background-color: #ff6700;
              color: #fff;
            }
            &:nth-of-type(1) {
              left: 120px;
            }
            &:nth-of-type(2) {
              right: 53px;
            }
          }
          .text {
            position: absolute;
            left: 0;
            width: 249px;
            height: 50px;
            padding: 0 10px;
            border: 1px solid #e0e0e0;
            border-right: none;
          }
          .search-btn {
            position: absolute;
            right: 0;
            width: 52px;
            height: 50px;
            font-size: 24px;
            line-height: 24px;
            background-color: #fff;
            color: #616161;
            border: 1px solid #e0e0e0;
            &:hover {
              background-color: #ff6700;
              color: #fff;
              cursor: pointer;
            }
          }
          i {
            position: absolute;
            right: 20px;
            font-size: 16px;
            z-index: 20;
            &:hover {
              cursor: pointer;
            }
          }
          input::-webkit-search-cancel-button {
            display: none;
          }
          .mouseinout {
            border-color: #b0b0b0;
          }
          .mousefocus {
            border-color: #ff6700 !important;
          }
        }
      }
    }
  }
}
</style>