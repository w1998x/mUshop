<template>
  <div>
    <div class="page">
      <v-header></v-header>
      
      <div class="main" v-if="goodsInfo">
        <div class="top">
          <div class="maBan">
            <img :src="$imgUrl+goodsInfo.img" alt="picDetail_8" />
            
          </div>
          <div class="cont">
            <h4 v-html="goodsInfo.description"></h4>
            <p>&yen;{{goodsInfo.market_price.toFixed(2)}}<span>（此价格不与套装优惠同时享受）</span></p>
          </div>
        </div>
        <div class="cent">
          <div class="cenTo">
            <a>
              促销：
              <span class="redu">满 减</span>
              <span class="dis">满2件9折；3件8折</span>
            </a>
          </div>
          <div class="cenCe">
            <p class="buNu">购买数量</p>
            <p class="but">
              <van-stepper v-model="value" />
            </p>
          </div>
          <div class="cenBo">
            <div class="top">
              <h5>商品属性</h5>
              <a href="#">
                <img src="../../assets/images/detalis/arrow.jpg" alt="arrow" />
                </a>
            </div>
            <p>
              {{goodsInfo.specsname}}
              <van-tag type="warning" v-for="item in specsAttr" :key="item.id">{{item}}</van-tag>
            </p>
          </div>
        </div>
        <div class="bott">
          <h2>商品详情</h2>
          <div class="pic">
            <img src="../../assets/images/detalis/picDetail_3.jpg" alt="picDetail_3" />
            <img src="../../assets/images/detalis/picDetail_4 .jpg" alt="picDetail_4" />
            <img src="../../assets/images/detalis/picDetail_5.jpg" alt="picDetail_5" />
            <img src="../../assets/images/detalis/picDetail_6.jpg" alt="picDetail_6" />
            <img src="../../assets/images/detalis/picDetail_7.jpg" alt="picDetail_7" />
          </div>
        </div>
        <div class="eva">
          <h2>商品评价</h2>
          <div class="det">
            <p class="uname">123456fg</p>
            <p class="ucon">效果很好，物流到位，下次继续来！</p>
            <div class="pic clearfix">
              <div>
                <img src="../../assets/images/detalis/picDetail_8.jpg" alt="picDetail_9" />
              </div>
              <div>
                <img src="../../assets/images/detalis/picDetail_9.jpg" alt="picDetail_8" />
              </div>
              <div>
                <img src="../../assets/images/detalis/picDetail_10.jpg" alt="picDetail_10" />
              </div>
            </div>
            <p class="time">2020-01-13</p>
          </div>
          <div class="eBo">
            <p>共<span>1000+</span>条评论</p>
            <a href="#">查看更多</a>
          </div>
        </div>
      </div>

      <footer class="fotbar">
        <a class="active" href="cart.html">
          <div class="icCa">
            <img src="../../assets/images/iconCart.jpg" alt="iconCart" />
            <span>2</span>
          </div>
          <p>购物车</p>
        </a>
        <a class="car" href="#" @click="goCart"> 加入购物车 </a>
        <a class="buy" href="conOr.html"> 立即购买 </a>
      </footer>
    </div>
  </div>
</template>

<script>
import vHeader from '../../commen/header'
import {getGoodsDetial,getCartAdd} from '../../util/axios'
import {Toast} from 'vant'
export default {
  data() {
    return {
      goodsInfo:'',
      value:1,
      specsAttr:[]
    };
  },
  components:{
    vHeader
  },
  mounted() {
    this.getGoodsInfo()
  },
  methods: {
    getGoodsInfo(){
      getGoodsDetial({
        id:this.$route.query.id
      })
      .then(res=>{
        this.goodsInfo = res.list[0];
        this.specsAttr = res.list[0].specsattr?res.list[0].specsattr.split(','):[]
      })
    },
    goCart(){
      if(sessionStorage.getItem('userInfo')){
        //调用加入购物车接口
        getCartAdd({
          uid:JSON.parse(sessionStorage.getItem('userInfo')).uid,
          goodsid:this.goodsInfo.id,
          num:this.value
        })
        .then(res=>{
          if(res.code==200){
            Toast.success(res.msg);
            this.$router.push({
              path:'/cart',
              query:{
                id:JSON.parse(sessionStorage.getItem('userInfo')).uid,
              }
            })
          }
        })
      }else{
        Toast.fail('请先登录')
        this.$router.push('/login')
      }
    }
  },
  
};
</script>

<style lang="" scoped>
.page {
  max-width: 7.5rem;
  margin: 0 auto;
}
.van-tag{
  margin-left: 5px;
}
.fotbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  height: 1.2rem;
  padding: 0 .5rem;
  border-top: 1px solid #ebebeb;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
}

.fotbar a {
  display: block;
  text-align: center;
}

.fotbar a img {
  width: auto;
  height: .53rem;
}

.fotbar a p {
  font: 0.2rem "微软雅黑";
  margin-top: .12rem;
  color: #878787;
}
.main {
  background: #f0f0f0;
  margin-bottom: 1.2rem;
}

.main .top {
  background: #fff;
  margin-bottom: .17rem;
}
.main .top .maBan img {
  width: 100%;
  height: auto;
}
.main .top .cont {
  padding: .23rem .23rem 0;
}
.main .top .cont h4 {
  font: 0.3rem/0.48rem "微软雅黑";
  color: #343434;
}
.main .top .cont p {
  font: 0.3rem/0.79rem Arial;
  color: #e43a3d;
}
.main .top .cont p span {
  font: 0.22rem "微软雅黑";
  color: #888888;
}

.main .cent {
  background: #fff;
  margin-bottom: .21rem;
  padding-right: .23rem;
}

.main .cent .cenTo {
  padding-left: .23rem;
  border-bottom: 1px solid #f1f1f1;
}

.main .cent .cenTo a {
  display: block;
  padding: .3rem 0;
  font: 0.26rem/0.35rem "微软雅黑";
  color: #454545;
  background: url('../../assets/images/detalis/arrow.jpg') no-repeat right center;
  background-size: .35rem .21rem;
}

.main .cent .cenTo a .redu {
  display: inline-block;
  border: 1px solid #b02916;
  border-radius: .06rem;
  padding: 0 .08rem;
  font: 0.2rem/0.35rem "微软雅黑";
  color: #b02916;
}
.main .cent .cenTo a .dis {
  margin-left: .15rem;
}

.main .cent .cenCe {
  padding-left: .23rem;
  border-bottom: 1px solid #f1f1f1;
  display: flex;
  justify-content: space-between;
}
.main .cent .cenCe .buNu {
  font: 0.26rem/1.08rem "微软雅黑";
  color: #454545;
}
.main .cent .cenCe .but {
  border-radius: .05rem;
  height: .57rem;
  margin-top: .25rem;
}
.main .cent .cenBo {
  padding-left: .23rem;
  border-bottom: 1px solid #f1f1f1;
}
.main .cent .cenBo .top {
  display: flex;
  justify-content: space-between;
}
.main .cent .cenBo .top h5 {
  padding-top: .13rem;
  font: 0.26rem/0.8rem "微软雅黑";
  color: #464646;
}
.main .cent .cenBo .top a {
  display: block;
  margin-top: .42rem;
}
.main .cent .cenBo .top a img {
  width: .35rem;
  height: auto;
}
.main .cent .cenBo p {
  font: 0.24rem/0.59rem "微软雅黑";
  color: #b5b5b5;
  padding-bottom: .38rem;
}
.main .cent .cenBo p a {
  width: 1.17rem ;
  text-align: center;
  background: #e1e1e3;
  display: inline-block;
  border-radius: .05rem;
  font: 0.28rem/0.59rem "微软雅黑";
  color: #fff;
  padding: 0 ;
}

.main .cent .cenBo p .fir {
  width: 1.5rem;
  background: #e43a3d;
  margin-left: .7rem;
}
.main .bott {
  background: #fff;
}
.main .bott h2 {
  padding-left: .25rem;
  font: 0.3rem/1rem "微软雅黑";
  color: #444444;
}
.main .bott .pic img {
  width: 100%;
  height: auto;
}
.main .eva {
  padding: .0 .23rem ;
  margin-top: .3rem;
  background: #fff;
}
.main .eva h2 {
  padding-left: .03rem;
  font: 0.3rem/0.93rem "微软雅黑";
  color: #444444;
}
.main .eva .det {
  padding-left: .03rem;
  border-bottom: 1px solid #eeeeee;
}
.main .eva .det .uname {
  font: 0.26rem/0.6rem Arial;
  color: #666666;
}
.main .eva .det .ucon {
  font: 0.26rem/0.6rem "微软雅黑";
  color: #444444;
}
.main .eva .det .pic {
  margin: .16rem 0 .09rem .09rem;
}
.main .eva .det .pic > div {
  float: left;
  padding-right: .21rem;
}
.main .eva .det .pic > div img {
  width: 1.54rem;
  height: auto;
}
.main .eva .det .time {
  font: 0.26rem/0.76rem Arial;
  color: #999999;
}
.main .eva .eBo {
  padding-left: .03rem;
  display: flex;
  justify-content: space-between;
}
.main .eva .eBo p {
  font: 0.24rem/0.91rem "微软雅黑";
  color: #999999;
}
.main .eva .eBo p span {
  font: .26rem Arial;
}
.main .eva .eBo a {
  padding-right: .28rem;
  background: url("../../assets/images/detalis/arrowRight.jpg") no-repeat right center;
  background-size: .19rem .26rem;
  font: 0.24rem/0.91rem "微软雅黑";
  color: #999999;
}
.fotbar {
  padding: 0;
  align-items: stretch;
}
.fotbar a {
  text-align: center;
  color: #fff;
}
.fotbar .active {
  margin-top: .25rem;
  padding: 0 .65rem 0 .52rem;
}
.fotbar .active .icCa {
  position: relative;
}
.fotbar .active .icCa img {
  width: .56rem;
  height: auto;
}
.fotbar .active .icCa span {
  display: block;
  width: .24rem;
  height: .24rem;
  border-radius: 50%;
  background: #e13b3f;
  font: 0.19rem/0.24rem Arial;
  color: #fff;
  position: absolute;
  top: 0;
  right: -0.05rem;
}
.fotbar .active > p {
  font: 0.18rem/0.44rem "微软雅黑";
  color: #878787;
  margin-top: 0;
}
.fotbar .car {
  padding: 0 .71rem;
  font: 0.3rem/1.14rem "微软雅黑";
  background: #f26b11;
}
.fotbar .buy {
  padding: 0 .71rem;
  font: 0.3rem/1.14rem "微软雅黑";
  background: #e43a3d;
} 

</style>
