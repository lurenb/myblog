<template>
  <div class="bstage">
    <div class="container">
      <div class="panel">
        <div class="content">
          <div class="switch">
            <h1 id="login">登录</h1>
          </div>
          <div class="aform" action>
            <div id="userName" class="input" aria-placeholder="用户名">
              <input type="text" v-model="userName" />
            </div>
            <div id="password" class="input" aria-placeholder="密码">
              <input type="password" v-model="password" />
            </div>
            <button class="button" @click="login">登录</button>
          </div>
        </div>
      </div>
      <span @click="tohome">返回首页</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      password: ""
    };
  },
  mounted() {
    this.fetch();
  },
  methods: {
    login() {
      if (this.userName == "" || this.password == "") {
        this.$alert("嗯？没有账号密码还想进？(￣^￣)");
      } else {
        this.$http
          .post("login", {
            userName: this.userName,
            password: this.password
          })
          .then(res => {
            if (!res.data.error) {
              this.$router.push("/blog/backstage");
            } else {
              this.$alert("我怀疑，你是不是瞎按的啊（⊙.⊙）");
            }
          });
      }
    },
    fetch() {
      this.$http.get("userid").then(res => {
        if (res.data.code == 200) {
          this.$router.push("/blog/backstage");
        }
      });
    },
    tohome() {
      this.$router.push("/blog/home");
    }
  }
};
</script>

<style lang="scss" scoped>
.bstage {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(182, 206, 182);
  .container {
    position: relative;
    width: 24rem;
    font-family: mengqucct;
    span {
      font-family: mengqucct;
      position: absolute;
      top: -120px;
      left: -20px;
      color: rgba(125, 116, 255, 0.8);
      font-size: 12px;
      cursor: pointer;
    }
    .panel {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      justify-content: center;
      width: 400px;
      padding: 40px;
      box-sizing: border-box;
      box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
      border-radius: 10px;
    }
  }
}

.switch h1 {
  text-align: center;
  font-size: 1.4rem;
  color: rgba(125, 116, 255, 0.8);
  border-bottom: rgba(125, 116, 255, 0.8) solid 2px;
  cursor: default;
}

.input input {
  outline: none;
  width: 100%;
  border: none;
  background: none;
  border-bottom: 0.1rem solid #7d74ff;
  color: rgba(37, 215, 202, 0.84);
  font-size: 1rem;
}

.input::after {
  content: attr(aria-placeholder);
  position: absolute;
  left: 0;
  top: -20%;
  font-size: 1.1rem;
  color: rgba(125, 116, 255, 0.44);
  transition: 0.3s;
}

.input.focus::after {
  top: -70%;
  font-size: 1rem;
}

.input#signUp {
  color: #7d74ff;
  font-size: 0.8rem;
  text-decoration: none;
}

.input#signUp:hover {
  color: rgba(138, 143, 255, 0.4);
}

.aform {
  width: 12rem;
  margin: 1rem 0 0;
}

.aform .input {
  position: relative;
  opacity: 1;
  width: 100%;
  margin: 2rem 0 0;
  height: 42px;
}

.aform .input#userName {
  margin: 3rem 0 0;
}

.aform .input#password {
  height: 1.6rem;
}

.aform button {
  display: block;
  border: none;
  outline: none;
  margin: 2rem 61px 0;
  margin-left: 50px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(90deg, #8a8fff, rgb(216, 174, 255));
  box-shadow: 0 0 8px #8a8fff;
  cursor: pointer;
  &:hover {
    border: none;
    outline: none;
    margin: 2rem -7px 0;
    width: 100%;
    height: 3.5rem;
    border-radius: 3rem;
    background: linear-gradient(
      90deg,
      rgba(138, 143, 255, 0.75),
      rgba(216, 174, 255, 0.75)
    );
    box-shadow: 0 0 8px #8a8fff;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.6);
    transition: 0.4s;
  }
}
</style>