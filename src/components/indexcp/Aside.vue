<template>
  <div>
    <div class="aside">
      <a href class="iconfont icon-ziyuan"></a>
      <a href class="iconfont icon-login_shouji"></a>
      <a href class="iconfont icon-buoumaotubiao46"></a>
      <a href class="iconfont icon-kefu"></a>
      <a href class="iconfont icon-gouwuche"></a>
      <a href="javascript:;" class="iconfont icon-huidingbu" v-show="show" @click="gotop"></a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    gotop() {
      const that = this;
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5);
        document.body.scrollTop = document.documentElement.scrollTop =
          that.scrollTop + ispeed;
        if (document.body.scrollTop <= 0) {
          clearInterval(timer);
        }
      }, 16);
    },
    handleScroll() {
      if (window.pageYOffset > 600) {
        this.show = true;
      } else {
        this.show = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.aside {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: 300px;
  left: 50%;
  margin-left: 614px;
  border-top: 1px solid #ebebeb;
  border-right: 1px solid #ebebeb;
  a {
    display: block;
    width: 27px;
    height: 42px;
    line-height: 42px;
    text-align: center;
    background-color: #ffffff;
    border-bottom: 1px solid #ebebeb;
    color: #b0b0b0;
    &::before {
      width: 20px;
      height: 20px;
    }
  }
}
</style>