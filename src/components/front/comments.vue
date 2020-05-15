<template>
  <div class="comments">
    <h1>留言板</h1>
    <div class="write">
      <el-input
        type="text"
        v-model="input.name"
        placeholder="给自己起个好听的名字吧"
        maxlength="10"
        show-word-limit
      ></el-input>
      <el-input
        type="textarea"
        v-model="input.comment"
        placeholder="留言..."
        maxlength="50"
        show-word-limit
        rows="3"
      ></el-input>
      <el-button type="success" plain @click="submit">发表</el-button>
    </div>
    <div class="content">
      <div class="comment" v-for="(item, index) in comments" :key="index">
        <h4>{{item.name}}说：</h4>
        <div>{{item.comment}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: {},
      comments: []
    };
  },
  mounted() {
    this.getcomments();
  },
  methods: {
    submit() {
      this.$http.post("comments", this.input).then(() => {
        this.input = {};
        this.getcomments();
      });
    },
    getcomments() {
      this.$http.get("comments").then(res => {
        this.comments = res.data;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.comments {
  height: 600px;
  width: 340px;
  margin-right: 50px;
  margin-top: 40px;
  border-radius: 30px;
  background-color: rgb(216, 241, 216);
  overflow: auto;
  h1 {
    font-family: mengqucct;
    margin-top: 20px;
    text-align: center;
    font-size: 36px;
  }
  .write {
    margin: 10px 10px;
    .el-input {
      margin-bottom: 5px;
    }
    .el-button {
      margin-top: 5px;
      float: right;
    }
  }
  .content {
    margin-top: 50px;
  }
  .comment {
    margin: 10px 10px;
    padding: 10px 10px;
    background-color: #fff;
    border-radius: 5px;
    div {
      text-indent: 2em;
    }
  }
}
</style>