<template>
  <el-form @submit.native.prevent="saveArticle" ref="form" :model="article" label-width="100px">
    <el-form-item label="文章标题">
      <el-input v-model="article.title"></el-input>
    </el-form-item>
    <div class="type">
      <!-- 文章类型 -->
      <el-form-item label="分类">
        <el-select v-model="article.category" placeholder="请选择">
          <el-option
            v-for="item in category"
            :key="item._id"
            :label="item.title"
            :value="item.title"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="时间">
        <!-- 日期设置 -->
        <el-date-picker
          v-model="article.time"
          type="date"
          placeholder="选择日期"
          format="yyyy 年 MM 月 dd 日"
          value-format="yyyy-MM-dd"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="文章简介">
        <el-input style="width: 460px" type="textarea" v-model="article.introduce"></el-input>
      </el-form-item>
    </div>
    <el-form-item class="content" label="文章内容">
      <quill-editor v-model="article.content" :options="editorOption"></quill-editor>
    </el-form-item>
    <el-form-item class="submit">
      <el-button type="success" native-type="submit">确认修改</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import { quillEditor } from "vue-quill-editor";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import "highlight.js/styles/atom-one-dark.css";
import hljs from "highlight.js";
export default {
  data() {
    return {
      article: {}, //文章详情 title, category, content, time
      category: [],
      //编辑器和代码高亮
      editorOption: {
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"], //加粗，斜体，下划线，删除线
            ["blockquote", "code-block"], //引用，代码块
            [{ header: 1 }, { header: 2 }], // 标题，键值对的形式；1、2表示字体大小
            [{ list: "ordered" }, { list: "bullet" }], //列表
            [{ script: "sub" }, { script: "super" }], // 上下标
            [{ indent: "-1" }, { indent: "+1" }], // 缩进
            [{ direction: "rtl" }], // 文本方向
            [{ size: ["small", false, "large", "huge"] }], // 字体大小
            [{ header: [1, 2, 3, 4, 5, 6, false] }], //几级标题
            [{ color: [] }, { background: [] }], // 字体颜色，字体背景颜色
            [{ font: [] }], //字体
            [{ align: [] }], //对齐方式
            ["clean"], //清除字体样式
            ["image", "video"] //上传图片、上传视频
          ],
          syntax: {
            highlight: text => {
              return hljs.highlightAuto(text).value;
            }
          }
        }
      }
    };
  },
  components: {
    quillEditor
  },
  mounted() {
    this.fetch();
    this.getCategory();
  },
  methods: {
    saveArticle() {
      this.$http
        .put(`articles/${this.$route.params.id}`, this.article)
        .then(() => {
          this.$message({
            message: "修改成功",
            type: "success"
          });
          this.$router.push("/blog/backstage/index");
        });
    },
    getCategory() {
      this.$http.get("category").then(res => {
        this.category = res.data;
      });
    },
    fetch() {
      this.$http.get(`articles/${this.$route.params.id}`).then(res => {
        this.article = res.data;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.quill-editor {
  height: 300px;
}
.submit {
  position: absolute;
  bottom: -30px;
  right: 30px;
}
.type {
  display: flex;
  justify-content: left;
}
.my-autocomplete {
  li {
    line-height: normal;
    padding: 7px;

    .name {
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .addr {
      font-size: 12px;
      color: #b4b4b4;
    }

    .highlighted .addr {
      color: #ddd;
    }
  }
}
</style>