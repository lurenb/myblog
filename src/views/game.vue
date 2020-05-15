<template>
  <div class="gameplay">
    <div class="game">
      <div @dragover="over" @drop="drop">
        <div id="z-1" class="mode" draggable="true" @dragstart="start"></div>
      </div>
      <div @dragover="over" @drop="drop">
        <div id="z-2" class="mode" draggable="true" @dragstart="start"></div>
      </div>
      <div @dragover="over" @drop="drop">
        <div id="z-3" class="mode" draggable="true" @dragstart="start"></div>
      </div>
      <div @dragover="over" @drop="drop">
        <div id="z-4" class="mode" draggable="true" @dragstart="start"></div>
      </div>
      <div @dragover="over" @drop="drop">
        <div id="z-5" class="mode" draggable="true" @dragstart="start"></div>
      </div>
      <div @dragover="over" @drop="drop">
        <div id="z-6" class="mode" draggable="true" @dragstart="start"></div>
      </div>
      <div @dragover="over" @drop="drop">
        <div id="z-7" class="mode" draggable="true" @dragstart="start"></div>
      </div>
      <div @dragover="over" @drop="drop">
        <div id="z-8" class="mode" draggable="true" @dragstart="start"></div>
      </div>
      <div @dragover="over" @drop="drop">
        <div id="z-9" class="mode" draggable="true" @dragstart="start"></div>
      </div>
    </div>
    <a href="javscript:;" class="try" @click="again">try again</a>
    <router-link class="project" to="/mi/index">一个小米商城首页</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swift: false
    };
  },
  created() {
    document.title = "拼图小游戏";
  },
  mounted() {
    this.again();
  },
  methods: {
    over(e) {
      e.preventDefault();
    },
    start(e) {
      let id = e.target.id;
      //传输拖拽元素的id值
      e.dataTransfer.setData("id", id);
    },
    drop(e) {
      //获取拖拽的元素id
      let dragID = e.dataTransfer.getData("id");
      //通过id获取拖拽元素
      let drag = document.getElementById(dragID);
      //获取当前元素的id
      let currentID = e.target.id;
      //获取当前元素
      let current = document.getElementById(currentID);
      //获取父节点
      let dragparent = drag.parentNode;
      let currentparent = current.parentNode;
      //互换
      currentparent.appendChild(drag);
      dragparent.appendChild(current);
      //校验
      this.success();
    },
    //校验
    success() {
      let mode = document.querySelectorAll(".mode");
      let game = document.querySelector(".game");
      let flag = 0;
      for (let i = 0; i < mode.length; i++) {
        let lastStr = mode[i].getAttribute("id").substr(2, 1);
        if (lastStr != i + 1) {
          return;
        } else {
          flag += 1;
        }
      }
      if (flag == 9) {
        game.className = "game gameSuccess";
      }
    },
    // 重新布局
    again() {
      //获取所有图片div
      let mode = document.querySelectorAll(".mode");
      let game = document.querySelector(".game");
      game.className = "game";
      for (let i = 0; i < 20; i++) {
        let m = parseInt(Math.random() * 9);
        let n = parseInt(Math.random() * 9);

        let modem = mode[m].parentNode;
        let moden = mode[n].parentNode;
        modem.appendChild(mode[n]);
        moden.appendChild(mode[m]);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.gameplay {
  height: 100vh;
  background-color: #000000;
  .game {
    position: fixed;
    z-index: 1;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 500px;
    height: 500px;
    div {
      width: 160px;
      height: 160px;
    }
    #z-1 {
      background: url("/imgs/manweii.png");
    }

    #z-2 {
      background: url("/imgs/manweii.png") top;
    }

    #z-3 {
      background: url("/imgs/manweii.png") top right;
    }

    #z-4 {
      background: url("/imgs/manweii.png") left;
    }

    #z-5 {
      background: url("/imgs/manweii.png") center;
    }

    #z-6 {
      background: url("/imgs/manweii.png") right;
    }

    #z-7 {
      background: url("/imgs/manweii.png") bottom left;
    }

    #z-8 {
      background: url("/imgs/manweii.png") bottom;
    }

    #z-9 {
      background: url("/imgs/manweii.png") bottom right;
    }
  }
  .gameSuccess {
    width: 480px !important;
    height: 480px !important;
  }
  @mixin button1 {
    padding: 3px 5px;
    position: fixed;
    height: 30px;
    line-height: 30px;
    border-radius: 4px;
    border: 1px solid #e0e0e0;
    box-shadow: 0 0 3px 3px #e0e0e0;
    cursor: pointer;
    color: #ffffff;
  }
  .try {
    @include button1();
    top: 70%;
    left: 25%;
    text-align: center;
  }
  .project {
    @include button1();
    bottom: 15%;
    left: 22%;
    text-align: center;
  }
}
</style>