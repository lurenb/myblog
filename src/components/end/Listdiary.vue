<template>
  <div class="diary">
    <el-table :data="diary" style="width: 100%">
      <el-table-column label="时间" width="220">
        <template slot-scope="scope">
          <i class="el-icon-date"></i>
          <span style="margin-left: 10px">{{ scope.row.time }}</span>
        </template>
      </el-table-column>
      <el-table-column label="内容" width="440">
        <template slot-scope="scope">
          <i class="el-icon-edit-outline"></i>
          <span style="margin-left: 10px">{{ scope.row.content }}</span>
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
      diary: []
    };
  },
  mounted() {
    this.getdiary();
  },
  methods: {
    handleDelete(id) {
      this.$http.delete(`diary/${id}`).then(() => {
        this.$message({
          message: "删除成功",
          type: "success"
        });
        this.getdiary();
      });
    },
    getdiary() {
      this.$http.get("diary").then(res => {
        this.diary = res.data;
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