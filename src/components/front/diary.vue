<template>
  <div class="diaryList">
    <div class="diary" v-for="(item, index) in diary" :key="index">
      <div class="content">{{item.content}}</div>
      <span class="time">
        <i class="el-icon-date"></i>
        {{item.time}}
      </span>
    </div>
    <el-pagination
      class="page"
      background
      layout="prev, pager, next"
      :total="count"
      :page-size="8"
      @current-change="currentPage"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      diary: [],
      count: 8
    };
  },
  mounted() {
    window.scroll(0, 370);
    this.getTotalPage(), this.currentPage(1);
  },
  methods: {
    currentPage(page) {
      this.$http.get(`diarypage/${page}`).then(res => {
        this.diary = res.data;
        window.scroll(0, 370);
      });
    },
    getTotalPage() {
      this.$http.get("diarypage").then(res => {
        this.count = res.data;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.diaryList {
  font-family: mengqucct;
  position: relative;
  margin: 50px;
  margin-left: 100px;
  .diary {
    position: relative;
    border-radius: 10px;
    width: 600px;
    box-shadow: 0 0 4px 3px #333;
    background-color: rgb(216, 241, 216);
    margin: 50px 10px;
    .content {
      padding: 20px 20px;
      font-size: 17px;
    }
    .time {
      float: right;
      color: #fff;
      font-size: 13px;
      i {
        color: rgb(42, 235, 130);
      }
    }
  }
}
</style>