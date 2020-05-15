<template>
  <el-table
    :data="articles"
    style="width: 100%">
    <el-table-column
      label="日期"
      width="200">
      <template slot-scope="scope">
        <i class="el-icon-date"></i>
        <span style="margin-left: 10px">{{ scope.row.time }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="分类"
      width="200">
      <template slot-scope="scope">
        <i class="el-icon-link"></i>
        <span style="margin-left: 10px">{{ scope.row.category }}</span>
      </template>
    </el-table-column>
     <el-table-column
      label="标题"
      width="440">
      <template slot-scope="scope">
        <i class="el-icon-edit-outline"></i>
        <span style="margin-left: 10px">{{ scope.row.title }}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作">
       <template slot-scope="scope">
           <el-button
          size="mini"
          @click="edit(scope.row._id)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="remove(scope.row._id)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      articles: []
    };
  },
  mounted() {
    this.fetch();
  },
  methods: {
    remove(id) {
      this.$http.delete(`articles/${id}`).then(() => {
        this.$message({
          message: "删除成功",
          type: "success"
        });
        this.fetch();
      });
    },
    fetch() {
      this.$http.get("articles").then(res => {
        this.articles = res.data;
      });
    },
    edit(id) {
      this.$router.push(`/blog/backstage/${id}/edit`);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>