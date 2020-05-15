<template>
  <div class="iphone-box">
    <h2 class="title">
      手机
      <a href="javascript:;">
        <span>
          查看更多
          <i class="iconfont icon-right_x"></i>
        </span>
      </a>
    </h2>
    <div class="iphonetype">
      <a href="/product/" class="bigone">
        <img src="/imgs/iphonebox/miMIX.jpg" alt />
      </a>
      <ul class="others">
        <li v-for="(item, index) in iphoneList" :key="index">
          <a href="javascript:;">
            <img :src="item.img" alt />
            <h3 class="title">{{item.name}}</h3>
            <p class="desc">{{item.desc}}</p>
            <p class="price">
              <span class="num">{{item.price + '元'}}</span>
              <span>起</span>
            </p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iphoneList: [
        {
          name: "小米10",
          desc: "晓龙865/1亿像素相机",
          price: "3999",
          img: "/imgs/iphonebox/mi10.jpg"
        },
        {
          name: "Redmi K30",
          desc: "120Hz流速屏，全速热爱",
          price: "1699",
          img: "/imgs/iphonebox/redmi30.jpg"
        },
        {
          name: "Redmi K30 5G",
          desc: "双模5G,120Hz流速屏",
          price: "1999",
          img: "/imgs/iphonebox/redmik30.jpg"
        },
        {
          name: "小米CC9 Pro",
          desc: "1亿像素 五摄四闪",
          price: "2599",
          img: "/imgs/iphonebox/xiaomicc9.jpg"
        },
        {
          name: "Redmi 8",
          desc: "5000mAh超长续航",
          price: "699",
          img: "/imgs/iphonebox/rdmi8.jpg"
        },
        {
          name: "Redmi 8A",
          desc: "5000mAh超长续航",
          price: "699",
          img: "/imgs/iphonebox/redmi8k.jpg"
        },
        {
          name: "Redmi Note 8 Pro",
          desc: "6400万全场景四摄",
          price: "1199",
          img: "/imgs/iphonebox/note8pro.jpg"
        },
        {
          name: "Redmi Note 8",
          desc: "千元4800万四摄",
          price: "899",
          img: "/imgs/iphonebox/note8.jpg"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./../../assets/scss/mixin.scss";
.iphone-box {
  width: 1226px;
  margin: 0 auto;
  .title {
    position: relative;
    @include height(58px);
    span {
      position: absolute;
      right: 0;
      // 查看更多字体图标设置
      i {
        border-radius: 100%;
        background-color: #333333;
        color: #b0b0b0;
        transform: all 0.2s;
        &:hover {
          background-color: #ff6700;
          color: #ffffff;
        }
      }
    }
  }
  .iphonetype {
    @include flex();
    .bigone {
      height: 614px;
      width: 234px;
      transition: all 0.4s;
      &:hover {
        @include silder();
      }
    }
    .others {
      width: 992px;
      height: 614px;
      @include flex();
      flex-wrap: wrap;
      li {
        width: 234px;
        height: 260px;
        background-color: #fff;
        margin-left: 14px;
        margin-bottom: 14px;
        padding: 20px 0;
        text-align: center;
        transition: all 0.4s;
        &:hover {
          @include silder();
        }
        a {
          width: 234px;
          height: 250px;
          img {
            height: 160px;
            width: 160px;
            margin: 0 37px 18px;
          }
          .title {
            height: 21px;
            line-height: 21px;
            margin: 0 10px 2px;
          }
          .desc {
            height: 18px;
            line-height: 18px;
            margin: 0 10px 10px;
            color: #b0b0b0;
          }
          .price {
            font-size: 14px;
            height: 21px;
            line-height: 21px;
            color: #ff6700;
            margin: 0 10px 14px;
          }
        }
      }
    }
  }
}
</style>