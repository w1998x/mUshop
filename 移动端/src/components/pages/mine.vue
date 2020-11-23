<template>
  <div>
    <div class="page">
      <!-- 头部 -->
      <header class="headCon">
        <go-back></go-back>

        <h1>我的订单</h1>
        <p class="menu"  @click="logout">
          退出
        </p>
      </header>
      <div class="not_Login" v-if="!userInfo">
        <van-image
          round
          width="2rem"
          height="2rem"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <van-button color="#f26b11" @click="$router.push('/login')">未登录，点击登录</van-button>
      </div>
      <div class="main" v-else>
        <div class="about">
          <div class="abTop">
            <div class="hePor clearfix">
              <div class="pic fl">
                <img src="../../assets/images/mine/mine.png" alt="mine" />
              </div>
              <div class="txt fl">
                <p class="chi">悠溯</p>
                <p class="eng">V1</p>
              </div>
            </div>
            <a href="#">每日签到</a>
          </div>
          <ul class="abBot">
            <li>
              <a href="#">
                <img
                  src="../../assets/images/mine/iconMine_1.jpg"
                  alt="iconMine_1"
                />
                <p>全部订单</p>
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="../../assets/images/mine/iconMine_2.jpg"
                  alt="iconMine_2"
                />
                <p>待付款</p>
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="../../assets/images/mine/iconMine_3.jpg"
                  alt="iconMine_3"
                />
                <p>待收货</p>
              </a>
            </li>
          </ul>
        </div>
        <ul class="oth">
          <li>
            <div class="lef">
              <div class="pic">
                <img
                  src="../../assets/images/mine/iconMine_4.jpg"
                  alt="iconMine_4"
                />
              </div>
              <p>地址管理</p>
            </div>
            <a href="#">
              <img
                src="../../assets/images/mine/arrowRight.jpg"
                alt="arrowRight"
              />
            </a>
          </li>
          <li class="act">
            <div class="lef">
              <div class="pic">
                <img
                  src="../../assets/images/mine/iconMine_5.jpg"
                  alt="iconMine_5"
                />
              </div>
              <p>我的钱包</p>
            </div>
            <a href="#">
              200余额
              <img
                src="../../assets/images/mine/arrowRight.jpg"
                alt="arrowRight"
              />
            </a>
          </li>
          <li>
            <div class="lef">
              <div class="pic">
                <img
                  src="../../assets/images/mine/iconMine_6.jpg"
                  alt="iconMine_6"
                />
              </div>
              <p>我的优惠券</p>
            </div>
            <a href="#">
              <img
                src="../../assets/images/mine/arrowRight.jpg"
                alt="arrowRight"
              />
            </a>
          </li>
          <li>
            <div class="lef">
              <div class="pic">
                <img
                  src="../../assets/images/mine/iconMine_7.jpg"
                  alt="iconMine_7"
                />
              </div>
              <p>我的二维码</p>
            </div>
            <a href="#">
              <img
                src="../../assets/images/mine/arrowRight.jpg"
                alt="arrowRight"
              />
            </a>
          </li>
          <li>
            <div class="lef">
              <div class="pic">
                <img
                  src="../../assets/images/mine/iconMine_8.jpg"
                  alt="iconMine_8"
                />
              </div>
              <p>我的小伙伴</p>
            </div>
            <a href="#">
              <img
                src="../../assets/images/mine/arrowRight.jpg"
                alt="arrowRight"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo:''
    };
  },
  mounted() {
    this.userInfo = sessionStorage.getItem('userInfo')?sessionStorage.getItem('userInfo'):''
  },
  methods: {
    logout(){
      this.userInfo = sessionStorage.removeItem('userInfo')
      this.$router.push('/login')
    }
  },
};
</script>

<style lang="" scoped>
.not_Login{
  text-align: center;
}
.not_Login .van-button{
  display: block;
  margin:  0 auto;
}
.page {
  max-width: 7.5rem;
  margin: 0 auto;
}
.headCon .menu {
  display: flex;
  justify-content: space-between;
  width: 0.59rem;
  width: .8rem;
  font-size: .28rem;
  color: #fff;

}


.headCon {
  display: flex;
  justify-content: space-between;
  height: 0.88rem;
  background: #f26b11;
  align-items: center;
  padding: 0.4rem 0.23rem 0;
}
.headCon a {
  display: block;
}
.headCon a img {
  width: 0.17rem;
  height: auto;
}
.headCon h1 {
  font: 0.35rem "微软雅黑";
  color: #fff;
  display: block;
  text-align: center;
}
.headCon .menu span {
  background-color: #fff;
}
.main {
  background: #f1f1f1;
  margin-bottom: 1.2rem;
}
.main .about .abTop {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f26b11;
  padding: 0.28rem 0.23rem 0.27rem;
}
.main .about .abTop .hePor .pic {
  width: 1.42rem;
  height: 1.42rem;
  border-radius: 50%;
  border: 0.05rem solid #fffffd;
  overflow: hidden;
  background: #822e02;
  margin-left: 0.1rem;
}
.main .about .abTop .hePor .pic img {
  width: 1.3rem;
  height: auto;
}
.main .about .abTop .hePor .txt {
  padding: 0.28rem 0 0.24rem 0.26rem;
}
.main .about .abTop .hePor .txt .chi {
  font: 0.3rem/0.51rem "微软雅黑";
  color: #fff;
}
.main .about .abTop .hePor .txt .eng {
  font: 0.28rem/0.43rem "微软雅黑";
  color: #090816;
}
.main .about .abTop a {
  display: block;
  background: #fff;
  width: 1.6rem;
  height: 0.71rem;
  margin-right: 0.15rem;
  text-align: center;
  border-radius: 0.06rem;
  font: 0.26rem/0.71rem "微软雅黑";
  color: #f26a12;
}
.main .about .abBot {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1.42rem;
  background: #fff;
  padding: 0 0.55rem;
  margin-bottom: 0.21rem;
}
.main .about .abBot li {
  text-align: center;
}
.main .about .abBot li a img {
  width: 0.34rem;
  height: auto;
}
.main .about .abBot li a p {
  margin-top: 0.19rem;
  font: 0.24rem "微软雅黑";
  color: #656565;
}
.main .oth {
  background: #fff;
}
.main .oth li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.23rem;
  border-bottom: 1px solid #d9d9d9;
}
.main .oth li .lef {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1.11rem;
}
.main .oth li .lef .pic {
  width: 0.54rem;
  text-align: center;
}
.main .oth li .lef .pic img {
  width: auto;
  height: 0.4rem;
}
.main .oth li .lef p {
  font: 0.26rem "微软雅黑";
  color: #5f5f5f;
  padding-left: 0.2rem;
}
.main .oth li a img {
  width: 0.19rem;
  height: auto;
}
.main .oth .act a {
  font: 0.24rem "微软雅黑";
  color: #ea7118;
}
.main .oth .act a img {
  margin-left: 0.2rem;
  margin-top: 0.03rem;
}
.main .oth .act2 {
  border-bottom: none;
}
.fotbar .thr p {
  color: #ff5a05;
}
</style>
