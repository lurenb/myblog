<template>
  <div class="search">
    <div class="search-box">
      <input class="search-txt" type="text" v-model="content" />
      <span class="search-btn" @click="toSearch">
        <i class="el-icon-search"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: "查找一篇文章"
    };
  },
  methods: {
    toSearch() {
      if (this.content.trim()) {
        this.$http.get(`search/${this.content}`).then(res => {
          console.log(res.data);

          if (res.data) {
            this.$store.commit("saveSearch", res.data);
            this.$router.push(`/blog/search/${this.content}`);
          } else {
            this.$alert("抱歉...没有找到相关的文章(..•˘_˘•..)");
          }
        });
      } else {
        this.content = "请输入你想查找的文章";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.search {
  position: fixed;
  z-index: 99;
  left: 70%;
  margin-left: 30px;
  height: 50px;
  width: 300px;
}
.search-box {
  display: flex;
  position: absolute;
  left: 50%;
  top: 50%;
  box-shadow: 0 0 1px 2px rgb(240, 238, 238);
  width: 270px;
  transform: translate(-50%, -50%);
  height: 40px;
  border-radius: 40px;
  padding: 5px;
  background: #424141a4;
  transition: 0.4s;
  .search-txt {
    border: none;
    outline: none;
    background: none;
    float: left;
    color: #fff;
    transition: 0.4s;
    line-height: 40px;
    width: 0;
    &:focus {
      width: 200px;
      padding-left: 30px;
    }
  }
  .search-btn {
    cursor: pointer;
    float: right;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      color: #34b334;
      font-size: 20px;
    }
  }
  &:hover {
    .search-btn {
      background: #fff;
    }
  }
  &:hover > .search-txt {
    width: 200px;
    padding-left: 30px;
  }
  .search-txt:focus .search-box {
    width: 270px;
    .search-btn {
      background: #fff;
    }
  }
}
</style>