<template>
  <div class="introduce">
    <div class="tou">
      <img src="../../assets/img/tou.jpg" alt />
    </div>
    <h1>路人丙：一枚前端小白</h1>
    <div class="link">
      <el-tooltip class="item" effect="dark" content="CSDN社区" placement="bottom">
        <a href="https://blog.csdn.net/weixin_42194736" target="_blank">
          <i class="el-icon-user-solid"></i>
        </a>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="邮箱1192827722@qq.com" placement="bottom">
        <a href="javascript:;">
          <i class="el-icon-message"></i>
        </a>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="手机号17660951280" placement="bottom">
        <a href="javascript:;">
          <i class="el-icon-mobile"></i>
        </a>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="微信sxsxsyeran" placement="bottom">
        <a href="javascript:;">
          <i class="el-icon-chat-line-round"></i>
        </a>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="Github" placement="bottom">
        <a href="https://github.com/lurenb" target="_blank">
          <i class="el-icon-document"></i>
        </a>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.introduce {
  position: relative;
  margin-top: 60px;
  margin-left: 17px;
  height: 300px;
  width: 300px;
  background-color: #fff;
  border-radius: 30px;
  background-color: rgb(216, 241, 216);
  .tou {
    height: 180px;
  }
  img {
    position: absolute;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
    width: 150px;
    height: 150px;
    border-radius: 150px;
  }
  h1 {
    font-family: mengqucct;
    text-align: center;
    font-size: 20px;
  }
  .link {
    margin: 20px;
  }
  a {
    display: inline-block;
    margin: 5px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 40px;
    background-color: #fff;
  }
  i {
    font-size: 16px;
  }
}
</style>