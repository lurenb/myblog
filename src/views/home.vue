<template>
  <el-container class="home">
    <el-header class="header">
      <nav-header></nav-header>
      <search></search>
    </el-header>
    <type-type></type-type>
    <el-container class="content">
      <el-main>
        <router-view></router-view>
      </el-main>
      <div class="aside">
        <introduce></introduce>
        <comments></comments>
      </div>
    </el-container>
    <el-backtop :right="7"></el-backtop>
    <el-footer class="footer">Footer</el-footer>
  </el-container>
</template>
<script>
import NavHeader from "../components/front/navheader.vue";
import TypeType from "../components/front/typetype.vue";
import search from "../components/front/search.vue";
import introduce from "../components/front/introduce.vue";
import comments from "../components/front/comments.vue";
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  components: {
    NavHeader,
    TypeType,
    search,
    introduce,
    comments
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  background: url("../assets/img/5.png") no-repeat fixed;
  background-size: cover;
  .header {
    margin-top: 20px;
  }
  .content {
    .el-main {
      margin-top: 40px;
      margin-left: 32px;
    }
    .aside {
      display: flex;
      flex-direction: column;
      margin-top: 40px;
    }
  }
  .footer {
    line-height: 60px;
    text-align: center;
    color: #fff;
    background-color: #333;
  }
}
</style>