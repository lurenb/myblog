<template>
  <div>
    <nav-header></nav-header>
    <router-view></router-view>
  </div>
</template>

<script>
import NavHeader from "./NavHeader";
export default {
  // name:'nav-home'
  components: {
    NavHeader
  },
  created() {
    document.title = "小米商城首页";
    window.scroll(0, 0);
  }
};
</script>

<style lang="scss" scoped>
</style>