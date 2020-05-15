<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
    <el-header style="text-align: left; font-size: 16px">
      <span>路人丙的博客后台</span>
      <router-link to="/blog/home">返回首页</router-link>
    </el-header>
    <el-container>
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu router>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-menu"></i>文章..
            </template>
            <el-menu-item-group>
              <el-menu-item index="/blog/backstage/index">文章列表(&gt;&and;&lt;)</el-menu-item>
              <el-menu-item index="/blog/backstage/create">写个文章(&gt;_&lt;)</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-edit"></i>随记..
            </template>
            <el-menu-item-group>
              <el-menu-item index="/blog/backstage/diary">过往随记(●′ω`●)</el-menu-item>
              <el-menu-item index="/blog/backstage/newdiary">写篇随记吧 (ง •̀_•́)ง</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-edit"></i>分类..
            </template>
            <el-menu-item-group>
              <el-menu-item index="/blog/backstage/category">分类详情(￢_￢)</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-edit"></i>留言..
            </template>
            <el-menu-item-group>
              <el-menu-item index="/blog/backstage/comment">留言列表(•ิ_•ิ)</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <!-- 首页内容 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.fetch();
  },
  methods: {
    fetch() {
      this.$http.get("userid").then(res => {
        if (res.data.code == 400 || res.status == 404) {
          this.$alert("请先登录！", {
            confirmButtonText: "OK",
            callback: () => {
              this.$router.push("/blog/login");
            }
          });
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/base.css";
.el-header {
  font-family: mengqucct;
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.el-aside {
  color: #333;
}
.el-header {
  display: flex;
  justify-content: space-between;
}
</style>