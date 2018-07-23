<template>
    <div class="wrap">
        <div class="header">
            <!-- <div @click="changeFan"><img src="../../assets/images/icon/shang/zou.png" alt="" class="headerImg"></div> -->
            商品
        </div>
        <div class="container">
            <div class="left">
                <ul>
                  <li @click="changeModel(1)">
                    <img src="../../assets/images/icon/gong/bao.png" alt=""  v-if="active === 1">
                    <img src="../../assets/images/icon/gong/bao2.png" alt=""  v-else>
                    <span>商品</span>
                  </li>
                  <li @click="changeModel(2)">
                    <img src="../../assets/images/icon/gong/bao.png" alt=""  v-if="active === 2">
                    <img src="../../assets/images/icon/gong/bao2.png" alt=""  v-else>
                    <span>库存</span>
                  </li>
                  <li @click="changeModel(3)">
                    <img src="../../assets/images/icon/gong/bao.png" alt=""  v-if="active === 3">
                    <img src="../../assets/images/icon/gong/bao2.png" alt=""  v-else>
                    <span>供应商</span>
                  </li>
                </ul>
            </div>
            <div class="right">
                <div class="rightCenter">
                  <div v-show="active === 1">
                   <div>1111</div>
                  </div>
                  <div v-show="active === 2">
                    <div>2222</div>
                  </div>
                  <div v-show="active === 3">
                    <div>3333</div>
                  </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <ul>
                <li>
                    <img src="../../assets/images/icon/gong/shou.png" alt="">
                    <span>首页</span>
                </li>
                <li>
                    <img src="../../assets/images/icon/gong/shou.png" alt="">
                    <span>商品</span>
                </li>
                <li><img src="../../assets/images/icon/gong/shou.png" alt="">
                    <span>仓配</span>
                </li>
                <li><img src="../../assets/images/icon/gong/shou.png" alt="">
                    <span>订单</span>
                </li>
                <li><img src="../../assets/images/icon/gong/shou.png" alt="">
                    <span>我的</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      active: 3
    };
  },
  methods: {
    changeFan() {
      this.$router.push({
        path: "/"
      });
    },
    changeModel(index) {
      this.active = index;
    }
  }
};
</script>

<style scoped>
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.header {
  width: 100%;
  height: 0.9rem;
  background: skyblue;
  font-size: 0.48rem;
  color: #fff;
  line-height: 0.9rem;
  text-align: center;
  position: relative;
}
.headerImg {
  position: absolute;
  right: 0;
  top: 25%;
}
.container {
  width: 100%;
  background: #fff;
  flex: 1;
  display: flex;
  justify-content: space-between;
}
.left {
  width: 25%;
  height: 100%;
}
.left ul li {
  width: 1.2rem;
  height: 1.6rem;
  margin: 0 auto;
  padding: 0.2rem;
  border-bottom: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.left ul li img {
  width:80%;
  height:70%;
}
.right {
  width: 75%;
  height: 100%;
  background: #e5e5e5;
}
.rightCenter {
  width: 96%;
  height: 100%;
  background: #fff;
  margin: 0.1rem 0.1rem 0 0.1rem;
}
.footer {
  width: 100%;
  height: 0.9rem;
  background: #fff;
  border-top: 1px solid #ccc;
}
.footer ul {
  width: 100%;
  height: 0.9rem;
  display: flex;
  justify-content: space-around;
}
.footer ul li {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}
.footer ul li img {
  width: 0.6rem;
  height: 0.6rem;
}
</style>
