<template>
  <div class="diary">
    <el-table :data="comments" style="width: 100%">
      <el-table-column label="名称" width="220">
        <template slot-scope="scope">
          <i class="el-icon-date"></i>
          <span style="margin-left: 10px">{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="评论内容" width="440">
        <template slot-scope="scope">
          <i class="el-icon-edit-outline"></i>
          <span style="margin-left: 10px">{{ scope.row.comment }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="handleDelete(scope.row._id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comments: []
    };
  },
  mounted() {
    this.getcomments();
  },
  methods: {
    handleDelete(id) {
      this.$http.delete(`comments/${id}`).then(() => {
        this.$message({
          message: "删除成功",
          type: "success"
        });
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
.newtype {
  margin-top: 20px;
  display: flex;
  width: 260px;
  .submit {
    margin-left: 10px;
  }
}
</style>