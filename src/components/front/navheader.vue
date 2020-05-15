<template>
  <ul class="nav">
    <li @click="changeIndex(0)" :class="{active:currentIndex === 0}">
      <!-- <a href="javascript:;">首页</a> -->
      <router-link to="/blog/home">首页</router-link>
    </li>
    <div class="study" @click="changeIndex(1)" :class="{active:currentIndex === 1}">
      <el-dropdown trigger="click" @command="toCategory">
        <span class="el-dropdown-link">
          学习分类
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            icon="el-icon-reading"
            v-for="(item, index) in category"
            :key="index"
            :command="item.title"
          >{{item.title}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <li @click="changeIndex(2)" :class="{active:currentIndex === 2}">
      <router-link to="/blog/diary">生活随笔</router-link>
    </li>
    <div class="shiyanshi" @click="changeIndex(3)" :class="{active:currentIndex === 3}">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          实验室
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-reading">
            <router-link to="/mi" target="_blank">小米商城首页</router-link>
          </el-dropdown-item>
          <el-dropdown-item icon="el-icon-reading">
            <router-link to="/game" target="_blank">拼图小游戏</router-link>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <li @click="changeIndex(4)" :class="{active:currentIndex === 4}">
      <router-link to="/blog/login">作者入口</router-link>
    </li>
    <li class="slide"></li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      category: [],
      currentIndex: 0
    };
  },
  mounted() {
    this.getCategory();
  },
  methods: {
    changeIndex(index) {
      this.currentIndex = index;
    },
    getCategory() {
      this.$http.get("category").then(res => {
        this.category = res.data;
      });
    },
    toCategory(title) {
      if (this.$route.path == `/blog/articletype/${title}`) {
        return;
      } else {
        this.$router.push(`/blog/articletype/${title}`);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
ul.nav {
  font-family: mengqucct;
  font-size: 15px;
  position: fixed;
  z-index: 99;
  height: 50px;
  display: flex;
  background: #333333e5;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 2px 3px 5px 3px rgb(68, 67, 67);
  .study,
  .shiyanshi {
    width: 150px;
    height: 50px;
    text-align: center;
    cursor: pointer;
    span {
      position: relative;
      display: block;
      line-height: 50px;
      text-align: center;
      color: #fff;
      transition: 0.5s;
      i {
        color: #fff;
      }
    }
  }
  .study.active ~ .slide {
    left: 150px;
    opacity: 1;
  }
  .shiyanshi.active ~ .slide {
    left: 450px;
    opacity: 1;
  }
  li {
    width: 150px;
    height: 50px;
    a {
      position: relative;
      display: block;
      line-height: 50px;
      text-align: center;
      color: #fff;
      transition: 0.5s;
    }
    &:nth-child(1).active ~ .slide {
      left: 0;
      opacity: 1;
    }

    &:nth-child(3).active ~ .slide {
      left: 300px;
      opacity: 1;
    }
    &:nth-child(5).active ~ .slide {
      left: 600px;
      opacity: 1;
    }
  }
  .active {
    a {
      color: #000;
      font-size: 20px;
      z-index: 2;
    }
    span {
      color: #000;
      font-size: 20px;
      z-index: 2;
      i {
        color: #000;
      }
    }
  }
  .slide {
    position: absolute;
    width: 150px;
    height: 50px;
    top: 0;
    left: 0;
    z-index: 1;
    transition: 0.5s;
    opacity: 0;
    background: rgba(142, 235, 130, 0.7);
    border-radius: 12px;
  }
}
.el-dropdown-menu {
  font-family: mengqucct;
  font-size: 15px;
  background-color: rgb(142, 235, 130);
  border: none;
}
</style>