<template>
  <div class="swiper-box">
    <!-- 轮播图部分 -->
    <swiper ref="mySwiper" :options="swiperOptions" class="swiper">
      <swiper-slide v-for="item in slideList" :key="item.id">
        <a :href="'/product/'+item.id">
          <img :src="item.img" alt />
        </a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </swiper>
    <!-- 轮播图侧边栏 -->
    <div class="nav-menu">
      <ul class="menu-wrap">
        <li class="menu-item">
          <a href="javascript:;">手机 电话卡</a>
          <!-- <div class="children">
            <ul v-for="(item,i) in menuList" v-bind:key="i">
              <li v-for="(sub,j) in item" v-bind:key="j">
                <a v-bind:href="sub?'/#/product/'+sub.id:''">
                  <img v-bind:src="sub?sub.img:'/imgs/item-box-1.png'" alt />
                  {{sub?sub.name:'小米9'}}
                </a>
              </li>
            </ul>
          </div>-->
        </li>
        <li class="menu-item">
          <a href="javascript:;">电视 盒子</a>
        </li>
        <li class="menu-item">
          <a href="javascript:;">笔记本 平板</a>
        </li>
        <li class="menu-item">
          <a href="javascript:;">家电 插线板</a>
        </li>
        <li class="menu-item">
          <a href="javascript:;">出行 穿戴</a>
        </li>
        <li class="menu-item">
          <a href="javascript:;">智能 路由器</a>
        </li>
        <li class="menu-item">
          <a href="javascript:;">电源 配件</a>
        </li>
        <li class="menu-item">
          <a href="javascript:;">健康 儿童</a>
        </li>
        <li class="menu-item">
          <a href="javascript:;">耳机 音箱</a>
        </li>
        <li class="menu-item">
          <a href="javascript:;">生活 箱包</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOptions: {
        speed: 1000,
        // 分页器
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        // 前后按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        //自动切换
        autoplay: true,
        //环路
        loop: true,
        //切换效果
        effect: "fade",
        fadeEffect: {
          crossFade: true
        }
      },
      // 轮播图片
      slideList: [
        {
          id: "1",
          img: "/imgs/swiper/swiper1.jpg"
        },
        {
          id: "2",
          img: "/imgs/swiper/swiper2.webp"
        },
        {
          id: "3",
          img: "/imgs/swiper/swiper3.webp"
        },
        {
          id: "4",
          img: "/imgs/swiper/swiper4.webp"
        },
        {
          id: "5",
          img: "/imgs/swiper/swiper5.webp"
        }
      ]
    };
  },
  directives: {
    swiper: directive
  }
};
</script>

<style lang="scss" scoped>
@import "./../../assets/scss/mixin.scss";
.swiper-box {
  position: relative;
  // 轮播图图片部分
  .swiper {
    img {
      width: 1226px;
      height: 460px;
    }
    --swiper-navigation-color: #e0e0e0; /* 单独设置按钮颜色 */
    --swiper-navigation-size: 30px; /* 设置按钮大小 */
    --swiper-pagination-color: #e0e0e0; /*设置分页符颜色 */
    .swiper-button-next {
      padding: 20px 10px 20px 16px;
      right: 0;
      &:hover {
        background-color: rgba(51, 51, 51, 0.8);
        color: #ffffff;
      }
      border-radius: 4px 0 0 4px;
    }
    .swiper-button-prev {
      padding: 20px 16px 20px 10px;
      &:hover {
        background-color: rgba(51, 51, 51, 0.8);
        color: #ffffff;
      }
      left: 234px;
      border-radius: 0 4px 4px 0;
    }
    .swiper-pagination {
      left: 1100px;
      bottom: 30px;
      width: 100px;
      .swiper-pagination-bullet {
        border: 1px solid #b0b0b0;
      }
    }
  }
  //轮播图侧边栏
  .nav-menu {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 9;
    width: 234px;
    height: 460px;
    padding: 20px 0;
    background-color: #55585a7a;
    box-sizing: border-box;
    .menu-wrap {
      .menu-item {
        height: 42px;
        line-height: 42px;
        a {
          position: relative;
          display: block;
          font-size: 14px;
          color: #ffffff;
          padding-left: 30px;
          &:after {
            position: absolute;
            right: 30px;
            top: 14px;
            content: "";
            @include bgImg(10px, 14px, "/imgs/icon-arrow.png");
          }
        }
        &:hover {
          background-color: #ff6700;
          .children {
            display: block;
          }
        }
        // .children{
        //   display:none;
        //   width:962px;
        //   height:451px;
        //   background-color:$colorG;
        //   position:absolute;
        //   top:0;
        //   left:264px;
        //   border:1px solid $colorH;
        //   ul{
        //     display:flex;
        //     justify-content:space-between;
        //     height:75px;
        //     li{
        //       height:75px;
        //       line-height:75px;
        //       flex:1;
        //       padding-left:23px;
        //     }
        //     a{
        //       color:$colorB;
        //       font-size:14px;
        //     }
        //     img{
        //       width:42px;
        //       height:35px;
        //       vertical-align:middle;
        //       margin-right:15px;
        //     }
        //   }
        // }
      }
    }
  }
}
</style>