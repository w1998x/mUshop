<template>
  <div>
    <div class="page">
      <!-- 头部 -->
      <header class="headCon">
        <a class="arr" href="#" @click="$router.go(-1)">
          <img src="../../assets/images/arrowLeft.jpg" alt="arrowLeft" />
        </a>

        <a href="#" class="logo">
          <img src="../../assets/images/logo.jpg" alt="logo" />
        </a>
        <p class="menu">
          <span></span>
          <span></span>
          <span></span>
        </p>
      </header>
      <div class="main">
        <div class="top">
          <a href="#"> 搜索商品 </a>
        </div>
        <div class="bot">
          <ul>
            <li v-for="item in goodsList" :key="item.id" @click="toDetail(item.id)">
              <div class="pic">
                <a href="#">
                  <img :src="$imgUrl+item.img?$imgUrl+item.img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3379249214,480018957&fm=26&gp=0.jpg'" alt="pic" />
                </a>
              </div>
              <div class="txt">
                <p class="intr">
                  {{item.goodsname}}
                </p>
                <p class="pric"><em> &yen;</em>{{item.market_price}}</p>
                <p class="comNu">3625条评论</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      
    </div>
  </div>
</template>

<script>
import {getGoods} from '../../util/axios'
export default {
  data() {
    return {
      goodsList:[]
    };
  },
  mounted() {
    this.getGoodsList()
  },
  methods: {
     getGoodsList(){
      getGoods({
        fid:this.$route.query.id
      })
      .then(res=>{
        console.log(res);
        if(res.code==200){
          this.goodsList = res.list
        }
      })
    },
    toDetail(id){
      this.$router.push({ 
        path:'/goodsDetail',
        query:{
          id
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
  width: .59rem;
}
.headCon .menu span {
  display: block;
  width: .12rem;
  height: .12rem;
  background: #000000;
  border-radius: 50%;
}

.headCon {
  display: flex;
  justify-content: space-between;
  height: .88rem;
  background: #fff;
  align-items: center;
  padding: .4rem .23rem 0;
  border-bottom: 1px solid #e4e4e4;
}
.headCon .arr {
  display: block;
}
.headCon .arr img {
  width: .17rem;
  height: auto;
}
.headCon .logo {
  display: block;
}
.headCon .logo img {
  height: .29rem;
  width: auto;
}
.headCon .menu span {
  background-color: #000;
}
.main .top {
  margin-top: .22rem;
}
.main .top a {
  text-align: center;
  padding-left: .27rem;
  width: 6.23rem;
  margin: 0 auto;
  display: block;
  border-radius: .38rem;
  font: 0.26rem/0.77rem "微软雅黑";
  color: #f3f1f2;
  background: #f26b11 url(../../assets/images/proList/search.jpg) no-repeat 2.38rem 0.26rem;
  background-size: .26rem .27rem;
}
.main .bot ul {
  margin: .28rem .23rem 0;
}
.main .bot ul li {
  display: flex;
  justify-content: space-between;
  padding: .22rem .13rem .19rem .1rem;
  border-bottom: 1px solid #d1d1d1;
}
.main .bot ul li .pic a img {
  width: 1.47rem;
  height: auto;
}
.main .bot ul li .txt {
  width: 4.85rem;
}
.main .bot ul li .txt .intr {
  font: 0.26rem/0.36rem "微软雅黑";
  color: #343434;
}
.main .bot ul li .txt .pric {
  font: 0.3rem/0.55rem Arial;
  color: #e6393b;
}
.main .bot ul li .txt .pric em {
  font: 0.26rem "微软雅黑";
}
.main .bot ul li .txt .comNu {
  font: 0.26rem/0.39rem Arial, "微软雅黑";
  color: #989898;
}
.fotbar .active p {
  color: #ff5a05;
}

</style>
