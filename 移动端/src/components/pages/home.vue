<template>
  <div>
    <div class="page" id="app">
      <!-- 头部 -->
      <header class="headCon">
        <a href="#"><img src="../../assets/images/logo.jpg" alt="logp" /></a>
        <input class="search" type="search" placeholder="寻找商品" />
        <p class="menu">
          <span></span>
          <span></span>
          <span></span>
        </p>
      </header>
      <!-- 导航 -->
      <nav class="navbar">
        <ul class="clearfix">
          <li class="fir"><a href="#">推荐</a></li>
          <li><a href="#">女装</a></li>
          <li><a href="#">鞋包</a></li>
          <li><a href="#">居家</a></li>
          <li><a href="#">母婴儿童</a></li>
          <li><a href="#">美食</a></li>
          <li><a href="#">果蔬</a></li>
          <li><a href="#">推荐</a></li>
          <li><a href="#">推荐</a></li>
        </ul>
        <p></p>
      </nav>
      <!-- banner -->
      <div class="banner">
        <!-- <a href="#">
          <img src="../../assets/images/index/banner.jpg" alt="banner" />
        </a> -->
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="item in bannerList" :key="item.id">
            <img :src="$imgUrl + item.img" alt="banner" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- icons -->
      <ul class="icons">
        <li>
          <a href="#">
            <img src="../../assets/images/index/indexicon1.jpg" alt="icons" />
            <p>限时抢购</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../../assets/images/index/indexicon2.jpg" alt="icons" />
            <p>积分商城</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../../assets/images/index/indexicon3.jpg" alt="icons" />
            <p>联系我们</p>
          </a>
        </li>
        <li>
          <router-link to="goodsClass">
            <img src="../../assets/images/index/indexicon4.jpg" alt="icons" />
            <p>商品分类</p>
          </router-link>
        </li>
      </ul>
      <!-- 限时秒杀-->
      <div class="time">
        <div class="tiLe">
          <div class="lecon">
            <h2>限时秒杀</h2>
            <p>每天零点场 好货秒不断</p>
            <div class="seck">
              <span class="one">02</span>
              <span class="two">16</span>
              <span>45</span>
              <p class="bg">秒杀</p>
            </div>
            <div class="pic">
              <img src="../../assets/images/index/shop_5.jpg" alt="shop_5" />
              <p><em>&yen;</em>14.8</p>
            </div>
          </div>
        </div>
        <div class="tiRig">
          <div class="top">
            <div class="txt">
              <h2>品牌上新</h2>
              <p>每日九点 抢大牌</p>
              <img src="../../assets/images/index/brand.jpg" alt="brand" />
            </div>
            <div class="pic">
              <img
                src="../../assets/images/index/indexshop.jpg"
                alt="indexshop"
              />
            </div>
          </div>
          <div class="bot">
            <div class="day">
              <div class="con">
                <h2>每日十件</h2>
                <p>只为你选好货</p>
              </div>
              <div class="pic">
                <img src="../../assets/images/index/shop_2.jpg" alt="shop_2" />
              </div>
            </div>
            <div class="col">
              <div class="con">
                <h2>拼啊</h2>
                <p>超级好价拼团</p>
              </div>
              <div class="pic">
                <img src="../../assets/images/index/shop_3.jpg" alt="shop_3" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 广告 -->
      <div class="adv">
        <img src="../../assets/images/index/bar.jpg" alt="bar" />
      </div>
      <!-- 详情 -->
      <div class="items">
        <van-tabs type="card">
          <van-tab title="精品热卖">
            <ul class="con">
              <li class="clearfix" v-for="item in hotsList" :key="item.id">
                <div class="fl pic">
                  <img :src="$imgUrl+item.img" alt="shop_4" />
                </div>
                <div class="fl del">
                  <h4>{{ item.goodsname }}</h4>
                  <p class="pri">&yen;{{ item.market_price }}</p>
                  <!-- <p class="num">已售{{ item.goodsList_num }}件</p>
                  <a href="details.html">{{ item.goodsList_buy }}</a> -->
                </div>
              </li>
            </ul>
          </van-tab>
          <van-tab title="好物上新">
            <ul class="con">
              <li class="clearfix" v-for="item in newsList" :key="item.id">
                <div class="fl pic">
                  <img :src="$imgUrl+item.img" alt="shop_4" />
                </div>
                <div class="fl del">
                  <h4>{{ item.goodsname }}</h4>
                  <p class="pri">&yen;{{ item.market_price }}</p>
                  <!-- <p class="num">已售{{ item.goodsList_num }}件</p>
                  <a href="details.html">{{ item.goodsList_buy }}</a> -->
                </div>
              </li>
            </ul>
          </van-tab>
          <van-tab title="所有商品">
            <ul class="con">
              <li class="clearfix" v-for="item in goodsList" :key="item.id">
                <div class="fl pic">
                  <img :src="$imgUrl+item.img" alt="shop_4" />
                </div>
                <div class="fl del">
                  <h4>{{ item.goodsname }}</h4>
                  <p class="pri">&yen;{{ item.market_price }}</p>
                  <!-- <p class="num">已售{{ item.goodsList_num }}件</p>
                  <a href="details.html">{{ item.goodsList_buy }}</a> -->
                </div>
              </li>
            </ul>
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import { getBanner,getIndexList } from "../../util/axios";
export default {
  data() {
    return {
      bannerList: [],
      newsList:[],
      hotsList:[],
      goodsList:[],
      num: 0,
     
    };
  },
  mounted() {
    this.getBannerList();
    this.indexList()
  },
  methods: {
    getBannerList() {
      getBanner().then((res) => {
        if (res.code == 200) {
          this.bannerList = res.list;
        }
      });
    },
    indexList(){
      getIndexList()
      .then(res=>{
        if(res.code==200){
          this.hotsList = res.list[0].content
          this.newsList = res.list[1].content
          this.goodsList = res.list[2].content
        }
      })
    }
  },
};
</script>

<style lang="" scoped>
.page {
  max-width: 7.5rem;
  margin: 0 auto;
}
.headCon .menu {
  display: flex;
  justify-content: space-between;
  width: 0.59rem;
}
.headCon .menu span {
  display: block;
  width: 0.12rem;
  height: 0.12rem;
  background: #000000;
  border-radius: 50%;
}

body {
  background: #f1f1f1;
}
.headCon {
  display: flex;
  justify-content: space-between;
  height: 0.88rem;
  background: #fff;
  align-items: center;
  padding: 0.4rem 0.23rem 0;
  border-bottom: 1px solid #e4e4e4;
}
.headCon a img {
  height: 0.29rem;
  width: auto;
}
.headCon .search {
  width: 3.04rem;
  height: 0.39rem;
  background: #eeeeee;
  text-align: center;
  border-radius: 0.06rem;
  font: 0.16rem/0.39rem "微软雅黑";
}
.headCon input::-webkit-input-placeholder {
  color: #bfbfbf;
}
.navbar {
  overflow: hidden;
  background: #fff;
  position: relative;
}
.navbar ul {
  width: 20rem;
  padding-top: 0.23rem;
  padding-left: 0.12rem;
}
.navbar ul li {
  float: left;
  margin: 0 0.2rem;
}
.navbar ul li a {
  display: block;
  font: 0.28rem/0.332rem "微软雅黑";
  color: #1e1e1e;
  border-bottom: 0.04rem solid transparent;
  padding-bottom: 0.18rem;
}
.navbar ul li a:hover {
  border-bottom-color: #ff003d;
  color: #f00044;
}
.navbar ul .fir {
  position: relative;
}
.navbar ul .fir:after {
  content: "";
  width: 1px;
  height: 0.323rem;
  background: #f1f1f1;
  position: absolute;
  top: 0;
  right: -0.2rem;
}
.navbar ul .fir a {
  border-bottom-color: #ff003d;
  color: #f00044;
}
.navbar p {
  position: absolute;
  top: 0.06rem;
  right: 0;
  width: 0.75rem;
  height: 0.69rem;
  background: #ffffff url(../../assets/images/index/arrow.jpg) no-repeat center;
  background-size: 0.35rem 0.21rem;
}
.banner img {
  width: 100%;
  height: auto;
}
.icons {
  display: flex;
  height: 1.79rem;
  align-items: center;
  justify-content: space-around;
  background: #fff;
  border-bottom: 1px solid #ebebeb;
  margin-bottom: 0.29rem;
}
.icons li {
  text-align: center;
}
.icons li a img {
  width: 0.64rem;
  height: 0.62rem;
}
.icons li a p {
  font: 0.28rem/0.69rem "微软雅黑";
  color: #6b6b6b;
}
.time {
  display: flex;
  background: #fff;
  border-bottom: 1px solid #ededed;
  margin-bottom: 0.28rem;
}
.time > div {
  flex: 1;
}
.time .tiLe {
  border-right: 1px solid #f0f0f0;
}
.time .tiLe .lecon {
  margin-left: 0.17rem;
  padding-top: 0.14rem;
  margin-right: 0.3rem;
}
.time .tiLe .lecon h2 {
  font: 0.3rem/0.37rem "微软雅黑";
  color: #fb3274;
  padding-left: 0.45rem;
  background: url(../../assets/images/index/timer.jpg) no-repeat 0.03rem 0.04rem;
  background-size: 0.33rem 0.31rem;
}
.time .tiLe .lecon > p {
  font: 0.22rem/0.29rem "微软雅黑";
  color: #8a8a8a;
}
.time .tiLe .lecon .seck {
  margin-left: 0.04rem;
  margin-top: 0.04rem;
}
.time .tiLe .lecon .seck span {
  display: inline-block;
  width: 0.43rem;
  height: 0.43rem;
  background: #262630;
  font: 0.22rem/0.43rem "微软雅黑";
  color: #fff;
  text-align: center;
  border-radius: 8px;
  margin-right: 0.17rem;
  position: relative;
}
.time .tiLe .lecon .seck .one:after,
.time .tiLe .lecon .seck .two:after {
  content: "";
  width: 0.04rem;
  height: 0.04rem;
  background: #262630;
  border-radius: 50%;
  position: absolute;
  top: 0.16rem;
  right: 0rem;
}
.time .tiLe .lecon .seck .one:before,
.time .tiLe .lecon .seck .two:before {
  content: "";
  width: 0.04rem;
  height: 0.04rem;
  background: #262630;
  border-radius: 50%;
  position: absolute;
  bottom: 0.16rem;
  right: -0.12rem;
}
.time .tiLe .lecon .seck .bg {
  background: url(../../assets/images/index/bg.jpg) no-repeat 0px 0px;
  font: 0.25rem/0.4rem "微软雅黑";
  color: #26210b;
  padding-left: 0.2rem;
  margin-left: 1.91rem;
  margin-top: -0.4rem;
  background-size: 0.96rem 0.4rem;
}
.time .tiLe .lecon .pic {
  padding-top: 0.3rem;
  padding-left: 0.43rem;
  position: relative;
}
.time .tiLe .lecon .pic img {
  width: 2.36rem;
  height: auto;
}
.time .tiLe .lecon .pic p {
  width: 0.84rem;
  height: 0.84rem;
  border-radius: 50%;
  background: #ff3179;
  font: 0.28rem/0.84rem "微软雅黑";
  color: #fff;
  position: absolute;
  bottom: 0.11rem;
  right: 0rem;
  text-align: center;
}
.time .tiLe .lecon .pic p em {
  font-size: 0.2rem;
}
.time .tiRig > div {
  flex: 1;
}
.time .tiRig .top {
  display: flex;
  justify-content: space-between;
  padding: 0.04rem 0.29rem 0.05rem 0.18rem;
}
.time .tiRig .top .txt h2 {
  padding-top: 0.1rem;
  font: 0.3rem/0.37rem "微软雅黑";
  color: #fb3274;
}
.time .tiRig .top .txt p {
  font: 0.22rem/0.29rem "微软雅黑";
  color: #8a8a8a;
}
.time .tiRig .top .txt img {
  display: block;
  margin-top: 0.23rem;
  width: 0.93rem;
  height: auto;
}
.time .tiRig .top .pic img {
  width: 1.28rem;
  height: auto;
}
.time .tiRig .bot {
  border-top: 1px solid #eeeeee;
  display: flex;
  justify-content: space-between;
}
.time .tiRig .bot > div {
  flex: 1;
  padding: 0.14rem 0 0.03rem;
}
.time .tiRig .bot > div .con {
  padding-left: 0.18rem;
}
.time .tiRig .bot > div .con h2 {
  font: 0.3rem/0.37rem "微软雅黑";
  color: #fb3274;
}
.time .tiRig .bot > div .con p {
  font: 0.22rem/0.29rem "微软雅黑";
  color: #8a8a8a;
}
.time .tiRig .bot > div .pic {
  text-align: center;
  margin-top: 0.04rem;
}
.time .tiRig .bot .day {
  border-right: 1px solid #f0f0f0;
}
.time .tiRig .bot .day .pic img {
  width: 0.64rem;
  height: auto;
}
.time .tiRig .bot .col .pic img {
  width: 1.04rem;
  height: auto;
}
.items {
  background: #fff;
  padding-bottom: 1.2rem;
}
.items .li {
  padding: 0.2rem;
}
.items .li .top {
  display: flex;
  justify-content: space-between;
  background: #fff;
  border: 1px solid #e4e4e4;
  border-left: none;
}
.items .li .top li {
  text-align: center;
  border-left: 1px solid #e4e4e4;
  flex: 1;
}
.items .li .top li a {
  display: block;
  font: 0.28rem/0.68rem "微软雅黑";
  color: #272727;
}
.items .li .top .act a {
  background: #f26b11;
  color: #fff;
  border: 1px solid #f26b11;
}
.items .con li {
  height: 3rem;
  margin: 0 0.23rem;
  padding: 0.33rem 0 0 0.37rem;
  background: #ffffff;
  box-shadow: 0 0 0.1rem #eaeaea;
  margin-bottom: 0.32rem;
}
.items .con li .pic {
  padding-top: 0.2rem;
}
.items .con li .pic img {
  width: 2.16rem;
  height: auto;
}
.items .con li .del {
  padding-left: 0.5rem;
}
.items .con li .del h4 {
  font: 0.3rem/0.53rem "微软雅黑";
  color: #3a3a3a;
}
.items .con li .del .pri {
  font: 0.3rem/0.55rem "微软雅黑";
  color: #e0363f;
}
.items .con li .del .num {
  font: 0.24rem/0.55rem "微软雅黑";
  color: #989898;
}
.items .con li .del a {
  width: 1.64rem;
  text-align: center;
  display: block;
  font: 0.24rem/0.52rem "微软雅黑";
  color: #fff;
  background: #f26b11;
  border-radius: 0.06rem;
}
.adv {
  margin-bottom: 0.29rem;
}
.adv img {
  width: 100%;
  height: auto;
}
.fotbar .active p {
  color: #ff5a05;
}
</style>
