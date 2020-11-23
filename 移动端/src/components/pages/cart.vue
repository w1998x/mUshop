<template>
  <div>
    <div class="page" id="app">
      <!-- 头部 -->
      <header class="headCon">
        <go-back></go-back>

        <h1>购物车</h1>
        <p class="menu">
          <span></span>
          <span></span>
          <span></span>
        </p>
      </header>
      <div class="main">
        <form action="#">
          <ul>
            <!-- <li
              class="fir"
              :class="[index == inx ? 'act' : '']"
              v-for="(item, index) in cartList"
              :key="item.id"
            >
              <div class="cont clearfix">
                <div class="pic fl">
                  <input
                    type="checkbox"
                    v-model="item.checked"
                    @change="checkOne"
                  />
                  <img :src="item.cartList_imgSrc" alt="shopCart" />
                </div>
                <div class="txt fl">
                  <h4>{{ item.cartList_txtTit }}</h4>
                  <p class="wei">
                    规格:<span>{{ item.cartList_txtWig }}</span>
                  </p>
                  <p class="pric">&yen;{{ item.cartList_txtPrice }}</p>
                </div>
                <div class="btn fl">
                  <p class="but">
                    <button type="button" @click="sub(index)">-</button>
                    <span class="num">{{ item.cartList_num }}</span>
                    <button type="button" @click="add(index)">+</button>
                  </p>
                </div>
              </div>
              <div class="hid">
                <a href="#">{{ item.cartList_hide }}</a>
              </div>
            </li> -->
            <div class="cartInfo" v-for="item in cartList" :key="item.id">
              <div class="checked">
                <van-checkbox v-model="checked" @change="checkOne"></van-checkbox>
              </div>
              <van-swipe-cell>
                <van-card
                  :num="item.num"
                  :price="item.price" 
                  :title="item.goodsname"
                  class="goods-card"
                  :thumb="$imgUrl + item.img"
                >
                  <template #footer>
                    <div>
                      <van-stepper
                        v-model="item.num"
                        theme="round"
                        button-size="22"
                        disable-input
                      />
                    </div>
                  </template>
                </van-card>
                <template #right>
                  <van-button
                    square
                    text="删除"
                    type="danger"
                    class="delete-button"
                    @click="del(item.id)"
                  />
                </template>
              </van-swipe-cell>
            </div>
          </ul>
        </form>
        <div class="bot">
          <div class="left">
            <input type="checkbox" v-model="allCheck" @change="checkAll" />
            <p>全选</p>
          </div>
          <div class="right">
            <div class="txt">
              <p class="tog">
                总计：<span>{{ allPrice }}</span>
              </p>
              <p class="no">不含运费，以优惠&yen;0.00</p>
            </div>
            <router-link to="/cartOrder">去结算（{{ allNum }}件）</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCartList, getCartDelete } from "../../util/axios";
export default {
  data() {
    return {
      allCheck: false,
      // inx: -1,
      value: 1,
      cartList: [],
      checked: false,
    };
  },
  mounted() {
    this.cartListInfo();
  },
  methods: {
    // add(index) {
    //   this.cartList[index].value++;
    // },
    // sub(index) {
    //   if (this.cartList[index].value <= 0) {
    //     return;
    //   }
    //   this.cartList[index].value--;
    // },
    checkAll() {
      this.cartList.map((item) => {
        item.checked = this.allCheck
        console.log(item);
      });
    },
    checkOne() {
      this.cartList.every((item) => {
        this.allCheck = item.checked
        console.log(item);
      });
    },
    cartListInfo() {
      getCartList({
        uid: this.$route.query.id,
      }).then((res) => {
        if (res.code == 200) {
          this.cartList = res.list;
          this.cartList.map(item=>{
            item.checked = this.checked
            console.log(item);
          })
        }
      });
    },
    del(id){
      getCartDelete({id})
      .then(res=>{
        this.cartListInfo()
      })
    }
  },
  computed: {
    allPrice() {
      let sum = 0;
      this.cartList.map((item) => {
        sum += item.num * item.price;
      });
      return sum;
    },
    allNum() {
      let num = 0;
      this.cartList.map((item) => {
        num += item.num;
      });
      return num;
    },
  },
};
</script>

<style lang="" scoped>
/* .tem{
  float: right;
} */
.cartInfo {
  display: flex;
}
.van-swipe-cell {
  flex: 1;
}
.van-checkbox {
  width: 0.4rem;
  padding: 0.8rem 0 0 0.15rem;
}
.goods-card {
  margin: 0;
  background-color: white;
}

.delete-button {
  height: 100%;
}
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

.headCon {
  display: flex;
  justify-content: space-between;
  height: 0.88rem;
  background: #f26b11;
  align-items: center;
  padding: 0.4rem 0.23rem 0;
  border-bottom: 1px solid #e4e4e4;
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
  background: #ffffff;
  margin-bottom: 1.2rem;
}
.main ul {
  width: 100%;
  height: 9.7rem;
  overflow: hidden;
}
.main ul li {
  display: flex;
  justify-content: space-between;
  width: calc(100% + 0.98rem);
  margin-top: 0.26rem;
  background: #fff;
  box-shadow: 0 0 0.1rem #f8f8f8;
}
.main ul li .cont .pic {
  padding-top: 0.3rem;
}
.main ul li .cont .pic input {
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 50%;
  display: inline-block;
  border: 1px solid #b22d1e;
  margin-top: 0.32rem;
  margin-left: 0.24rem;
}
.main ul li .cont .pic img {
  padding-left: 0.43rem;
  width: 1.02rem;
}
.main ul li .cont .txt {
  padding: 0.07rem 0 0.12rem;
  width: 2.4rem;
  padding-left: 0.35rem;
}
.main ul li .cont .txt h4 {
  font: 0.26rem/0.54rem "微软雅黑";
  color: #343434;
}
.main ul li .cont .txt .wei {
  font: 0.23rem/0.52rem "微软雅黑";
  color: #666666;
}
.main ul li .cont .txt .wei span {
  font: 0.24rem Arial;
}
.main ul li .cont .txt .pric {
  font: 0.32rem/0.47rem Arial;
  color: #e3393a;
}
.main ul li .cont .btn {
  margin-left: 0.09rem;
}
.main ul li .cont .btn .but {
  border: 1px solid #454545;
  border-radius: 0.05rem;
  margin-top: 0.9rem;
}
.main ul li .cont .btn .but button {
  width: 0.54rem;
  font: 0.28rem/0.54rem "微软雅黑";
  color: #454545;
  border: none;
  background-color: transparent;
}
.main ul li .cont .btn .but .num {
  display: inline-block;
  text-align: center;
  height: 0.54rem;
  width: 0.79rem;
  font: 0.28rem/0.54rem "微软雅黑";
  color: #454545;
  border-left: 1px solid #454545;
  border-right: 1px solid #454545;
}

.main ul li .hid {
  width: 0.98rem;
}
.main ul li .hid a {
  display: block;
  text-align: center;
  font: 0.24rem/1.72rem "微软雅黑";
  color: #ffffff;
  background: #e43a3d;
}
.main ul .act {
  transform: translate(-0.98rem);
}
.main ul .fir .cont .pic span {
  background: url("../../assets/images/cart/selectCart.jpg") no-repeat center;
  background-size: 0.17rem 0.13rem;
}
.main .bot {
  display: flex;
  justify-content: space-between;
  height: 1.14rem;
  border-top: 1px solid #ebebeb;
}
.main .bot .left {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.main .bot .left input {
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 50%;
  display: inline-block;
  border: 1px solid #b22d1e;
  margin-left: 0.22rem;
  background: url("../../assets/images/cart/selectCart.jpg") no-repeat center;
  background-size: 0.17rem 0.13rem;
}
.main .bot .left p {
  padding-left: 0.15rem;
  font: 0.24rem "微软雅黑";
  color: #666666;
}
.main .bot .right {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.main .bot .right .txt {
  margin-right: 0.38rem;
  text-align: right;
}
.main .bot .right .txt .tog {
  font: 0.3rem/0.48rem "微软雅黑";
  color: #333333;
}
.main .bot .right .txt .tog span {
  color: #e6393d;
}
.main .bot .right .txt .no {
  font: 0.2rem/0.33rem "微软雅黑";
  color: #bcbcbc;
}
.main .bot .right a {
  display: block;
  width: 2.47rem;
  text-align: center;
  font: 0.3rem/1.14rem "微软雅黑";
  color: #fff;
  background: #f26b11;
}
.fotbar .sec p {
  color: #ff5a05;
}
</style>
