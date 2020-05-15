
<template>
  <div class="home-hero">
    <div class="container">
      <ul class="ad-type">
        <li v-for="(item,index) in list" :key="index">
          <a href="javascript:;">
            <img :src="item.img" alt />
            {{item.name}}
          </a>
        </li>
      </ul>
      <div class="ad">
        <a href="/product/11" target="_blank">
          <img src="/imgs/detail/ad1.jpg" alt />
        </a>
      </div>
      <div class="ad">
        <a href="/product/11" target="_blank">
          <img src="/imgs/detail/ad2.jpg" alt />
        </a>
      </div>
      <div class="ad">
        <a href="/product/11" target="_blank">
          <img src="/imgs/detail/ad3.jpg" alt />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          name: "小米秒杀",
          img: "/imgs/detail/miaosha.png"
        },
        {
          name: "企业团购",
          img: "/imgs/detail/tuangou.png"
        },
        {
          name: "F码通道",
          img: "/imgs/detail/fma.png"
        },
        {
          name: "米粉卡",
          img: "/imgs/detail/mika.png"
        },
        {
          name: "以旧换新",
          img: "/imgs/detail/huanxin.png"
        },
        {
          name: "话费充值",
          img: "/imgs/detail/chongzhi.png"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./../../assets/scss/mixin.scss";
.home-hero {
  .container {
    width: 1226px;
    margin: 14px auto;
    @include flex();
    .ad-type {
      @include flex();
      background-color: #5f5750;
      box-sizing: border-box;
      flex-wrap: wrap;
      width: 234px;
      height: 170px;
      padding: 3px;
      li {
        position: relative;
        width: 70px;
        height: 82px;
        &::before {
          position: absolute;
          content: "";
          background: #665e57;
          top: -1px;
          left: 6px;
          width: 64px;
          height: 1px;
        }
        &::after {
          position: absolute;
          content: "";
          background: #665e57;
          top: 6px;
          left: 0;
          width: 1px;
          height: 70px;
        }
        a {
          display: block;
          height: 64px;
          padding-top: 18px;
          color: #e0e0e0;
          text-align: center;
          opacity: 0.7;
          transition: opacity 0.2s;
          img {
            display: block;
            width: 24px;
            height: 24px;
            margin: 0 auto 4px;
          }
          &:hover {
            opacity: 1;
          }
        }
      }
    }
    .ad {
      a {
        display: block;
        img {
          display: block;
          width: 316px;
          height: 170px;
        }
      }
    }
  }
}
</style>