<template>
  <div class="oneArticle">
    <span class="back" @click="$router.go(-1)">
      <i class="el-icon-back"></i>
    </span>
    <h1 class="title">{{article.title}}</h1>
    <span class="time">
      <i class="el-icon-date"></i>
      {{article.time}}
    </span>
    <span class="category">
      <i class="el-icon-menu"></i>
      {{article.category}}
    </span>
    <div class="ql-container ql-snow content">
      <div class="ql-editor" v-html="article.content" v-highlight></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      article: {}
    };
  },
  mounted() {
    window.scroll(0, 370);
    this.fetch();
  },
  methods: {
    fetch() {
      this.$http.get(`articles/${this.$route.params.id}`).then(res => {
        this.article = res.data;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.oneArticle {
  margin: 100px 10px 100px 0;
  padding: 30px 40px;
  width: 800px;
  border-radius: 26px;
  box-shadow: 0 0 7px 5px #333;
  background-color: rgb(216, 241, 216);
  color: #fff;
  .back {
    display: inline-block;
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    border-radius: 40px;
    background-color: rgb(109, 106, 106);
    font-size: 30px;
    i {
      color: #fff;
    }
    cursor: pointer;
  }
  .title {
    font-family: mengqucct;
    font-size: 36px;
    text-align: center;
  }
  .time {
    i {
      color: rgb(42, 235, 130);
    }
    font-family: mengqucct;
    font-size: 16px;
    margin-right: 20px;
  }
  .category {
    i {
      color: rgb(42, 235, 130);
    }
    font-family: mengqucct;
    font-size: 16px;
  }
  .content {
    margin-top: 20px;
    padding: 5px 40px;
    border: none !important;
  }
}
</style>