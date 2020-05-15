<template>
  <div class="articleList">
    <div class="article" v-for="(item, index) in articles" :key="index">
      <h1>{{item.title}}</h1>
      <div class="introduce">{{item.introduce}}</div>
      <span class="time">
        <i class="el-icon-date"></i>
        {{item.time}}
      </span>
      <span class="type">
        <i class="el-icon-menu"></i>
        {{item.category}}
      </span>
      <a href="javascript:;" @click="toContent(item._id)">阅读全文</a>
    </div>
    <el-pagination
      class="page"
      background
      layout="prev, pager, next"
      :total="count"
      :page-size="5"
      @current-change="ispage"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  mounted() {
    if (this.$route.params.title) {
      this.getTotalPageType(this.$route.params.title);
      this.currentPageType(1);
      window.scroll(0, 370);
    } else if (this.$route.params.content) {
      const articles = this.$store.state.articles;
      this.articles = articles;
      this.count = articles.length;
      window.scroll(0, 370);
    } else {
      this.getTotalPage();
      this.currentPage(1);
    }
  },
  watch: {
    $route(to) {
      if (to.path.slice(0, 17) == "/blog/articletype") {
        this.getTotalPageType(to.params.title);
        this.currentPageType(1);
        window.scroll(0, 370);
      } else if (to.path.slice(0, 12) == "/blog/search") {
        const articles = this.$store.state.articles;
        this.articles = articles;
        this.count = articles.length;
        window.scroll(0, 370);
      } else {
        window.scroll(0, 370);
        this.getTotalPage();
        this.currentPage(1);
      }
    }
  },
  data() {
    return {
      articles: [],
      count: 5
    };
  },
  methods: {
    currentPageType(page) {
      this.$http
        .get("blogpagetype", {
          params: {
            page: page,
            type: this.$route.params.title
          }
        })
        .then(res => {
          this.articles = res.data;
          window.scroll(0, 370);
        });
    },
    currentPage(page) {
      this.$http.get(`blogpage/${page}`).then(res => {
        this.articles = res.data;
        window.scroll(0, 370);
      });
    },
    getTotalPage() {
      this.$http.get("totalpage").then(res => {
        this.count = res.data;
      });
    },
    getTotalPageType(type) {
      this.$http.get(`totalpagetype/${type}`).then(res => {
        this.count = res.data;
      });
    },
    toContent(id) {
      this.$router.push(`/blog/article/${id}`);
    },
    //判断是否分页
    ispage(page) {
      if (this.$route.params.title) {
        this.currentPageType(page);
      } else {
        this.currentPage(page);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.articleList {
  position: relative;
  margin: 50px;
  margin-left: 100px;
  .article {
    position: relative;
    border-radius: 30px;
    width: 600px;
    box-shadow: 0 0 4px 3px #333;
    background-color: rgb(216, 241, 216);
    margin: 60px 10px;
    h1 {
      font-family: mengqucct;
      font-size: 20px;
      padding: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .introduce {
      margin: 0 40px 0;
      padding-left: 2px;
      line-height: 20px;
      border-left: rgb(87, 85, 85) solid 5px;
    }
    span {
      font-family: mengqucct;
      font-size: 16px;
      display: inline-block;
      padding: 20px 0 10px 20px;
      // text-align: left;
      i {
        color: rgb(155, 231, 140);
        padding-right: 2px;
      }
    }
    a {
      font-family: mengqucct;
      font-size: 16px;
      position: absolute;
      display: block;
      bottom: 10px;
      right: 30px;
    }
  }
}
</style>