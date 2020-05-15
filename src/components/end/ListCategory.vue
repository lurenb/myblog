<template>
  <div class="category">
    <el-table :data="category" style="width: 100%">
      <el-table-column label="类型" width="300">
        <template slot-scope="scope">
          <i class="el-icon-edit-outline"></i>
          <span style="margin-left: 10px">{{ scope.row.title }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="handleDelete(scope.row._id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="newtype">
      <el-input placeholder="新建一个blog类型" v-model="input.title" size clearable></el-input>
      <el-button class="submit" type="success" icon="el-icon-check" circle @click="newtype"></el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      category: [],
      input: { model: "Category" }
    };
  },
  mounted() {
    this.getCategory();
  },
  methods: {
    handleDelete(id) {
      this.$http.delete(`category/${id}`).then(() => {
        this.$message({
          message: "删除成功",
          type: "success"
        });
        this.getCategory();
      });
    },
    getCategory() {
      this.$http.get("category").then(res => {
        this.category = res.data;
      });
    },
    newtype() {
      this.$http.post("category", this.input).then(() => {
        this.$message({
          message: "新建成功",
          type: "success"
        });
        this.getCategory();
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