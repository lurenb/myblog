<template>
  <div class="index">
    <div class="header-part">
      <swiper-box></swiper-box>
      <!-- 轮播图 -->
      <home-hero></home-hero>
      <!-- 广告部分 -->
    </div>
    <div class="product-part">
      <!-- 手机 -->
      <iphone-box></iphone-box>
    </div>
    <aside-one></aside-one>
  </div>
</template>

<script>
import IphoneBox from "../components/indexcp/IphoneBox";
import SwiperBox from "../components/indexcp/SwiperBox";
import HomeHero from "../components/indexcp/HomeHero";
import AsideOne from "../components/indexcp/Aside";
export default {
  components: {
    SwiperBox,
    HomeHero,
    IphoneBox,
    AsideOne
  },
  data() {
    return {
      list: {}
    };
  },
  mounted() {
    // this.init();
  },
  methods: {
    // init() {
    //   this.axios.get("/mock").then(res => {
    //     this.list = res.projects;
    //   });
    // }
  }
};
</script>
<style lang="scss" scoped>
.header-part {
  display: flex;
  flex-direction: column;
  width: 1226px;
  margin: 0 auto;
}
.product-part {
  width: 1349px;
  background-color: #f5f5f5;
  flex-direction: column;
}
</style>