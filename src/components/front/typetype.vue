<template>
  <!-- 打字 -->
  <div class="typewriting">
    <span ref="type1" class="typing"></span>
    <span class="mark"></span>
  </div>
</template>

<script>
export default {
  name: "type",
  data() {
    return {
      texts: [
        "热爱生活，热爱编程！",
        "欢迎来到我的小站...",
        "Love little, love long."
      ],
      // appear: false,
      typedata: {
        count: 0,
        index: 0,
        currentText: "",
        letter: "",
        flag: 1
      }
      // go: true
    };
  },
  mounted() {
    this.type();
  },
  watch: {
    $route() {}
  },
  methods: {
    //打字
    type() {
      this.typedata.currentText = this.texts[this.typedata.count]; //数组里的值
      if (this.typedata.letter.length === this.typedata.currentText.length) {
        //如果一个值打印完毕
        //判断是否整个数组循环完毕
        if (this.typedata.count + 1 === this.texts.length) {
          // this.appear = true;
          clearTimeout(back);
          return;
        }
        this.typedata.flag = 0;
      }
      if (this.typedata.flag) {
        //如果是打字状态
        this.typedata.letter = this.typedata.currentText.slice(
          0,
          ++this.typedata.index
        );
        this.$refs.type1.innerHTML = this.typedata.letter;
      } else {
        //删除状态
        this.typedata.letter = this.typedata.currentText.slice(
          0,
          --this.typedata.index
        );
        this.$refs.type1.innerHTML = this.typedata.letter;
        if (!this.typedata.index) {
          this.typedata.count++;
          this.typedata.flag = 1;
        }
      }
      var back = setTimeout(this.type, parseInt(Math.random() * 200 + 80));
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/mixin.scss";
.typewriting {
  font-family: mengqucct;
  margin-top: 160px;
  margin-left: 70px;
  font-size: 100px;
  .typing {
    color: rgb(169, 226, 161);
  }
  span.mark {
    color: #333333;
    border-right: 4px solid rgba(148, 214, 127, 0.87);
    animation: blink 0.6s step-end infinite;
  }
}
//文本闪烁
@keyframes blink {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: white;
  }
}
// .button {
//   .tointro {
//     @include center(50%, 55%);
//     display: inline-block;
//     padding: 12px 20px;
//     color: #2196f3;
//     text-transform: uppercase;
//     letter-spacing: 4px;
//     text-decoration: none;
//     font-size: 24px;
//     overflow: hidden;
//     transition: 0.2s;
//     &:hover {
//       color: #255784;
//       background-color: #2196f3;
//       box-shadow: 0 0 10px #2196f3, 0 0 40px #2196f3, 0 0 80px #2196f3;
//       transition-delay: 1s;
//       span:nth-child(1) {
//         left: 100%;
//         transition: 1s;
//       }

//       span:nth-child(3) {
//         right: 100%;
//         transition: 1s;
//         transition-delay: 0.5s;
//       }

//       span:nth-child(2) {
//         top: 100%;
//         transition: 1s;
//         transition-delay: 0.25s;
//       }

//       span:nth-child(4) {
//         bottom: 100%;
//         transition: 1s;
//         transition-delay: 0.75s;
//       }
//     }
//     span {
//       position: absolute;
//       display: block;
//       &:nth-child(1) {
//         top: 0;
//         left: -100%;
//         width: 100%;
//         height: 2px;
//         background: linear-gradient(90deg, transparent, #2196f3);
//       }
//       &:nth-child(3) {
//         bottom: 0;
//         right: -100%;
//         width: 100%;
//         height: 2px;
//         background: linear-gradient(270deg, transparent, #2196f3);
//       }
//       &:nth-child(2) {
//         top: -100%;
//         right: 0;
//         width: 2px;
//         height: 100%;
//         background: linear-gradient(180deg, transparent, #2196f3);
//       }
//       &:nth-child(4) {
//         bottom: -100%;
//         left: 0;
//         width: 2px;
//         height: 100%;
//         background: linear-gradient(360deg, transparent, #2196f3);
//       }
//     }
//   }
// }

@keyframes goo {
  from {
    background-color: #333333;
  }
  to {
    background: linear-gradient(90deg, #333333 30%, #b0b0b0 10%, #000000 100%);
  }
}
</style>