<template>
  <div>
    <el-form @submit.native.prevent="saveDiary" ref="form" :model="diary" label-width="100px">
      <el-form-item label="时间">
        <!-- 日期设置 -->
        <el-date-picker
          v-model="diary.time"
          type="date"
          placeholder="选择日期"
          format="yyyy 年 MM 月 dd 日"
          value-format="yyyy-MM-dd"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="内容">
        <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4}"
          placeholder="随笔..."
          v-model="diary.content"
        ></el-input>
      </el-form-item>
          <el-form-item class="submit">
      <el-button type="primary" native-type="submit">立即创建</el-button>
    </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      diary: {}
    };
  },
  methods: {
    saveDiary() {
      this.$http.post("diary", this.diary).then(() => {
        this.$message({
          message: "成功记录自己的生活(●’◡’●)ﾉ",
          type: "success"
        });
        this.$router.push("/blog/backstage/diary");
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>