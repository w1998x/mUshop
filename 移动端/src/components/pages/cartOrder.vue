<template>
  <div>
      <div class="page">
        <!-- 头部 -->
       <header class="headCon">
        
            <go-back></go-back>
            
            <h1>确认订单</h1>
            <p class="menu">
                <span></span>
                <span></span>
                <span></span>
            </p>
       </header>
      <div class="main">
          <div class="add">
             <div class="info">
                <p class="top">
                    <span>收货人：YoSu</span>
                    <span>10000000000</span>
                </p>
                <p class="bot">
                    收货地址：<span>北京市海淀区隐泉路清林苑6号楼中公优就业总部3层</span>
                </p>
             </div>
              <a href="#">
                  <img src="../../assets/images/conOr/arrowRight.jpg" alt="arrowRight">
              </a>
          </div>
          <div class="com">
              <div class="coTop">
                  <div class="le clearfix">
                      <div class="pic fl">
                          <img src="../../assets/images/conOr/shop_4.jpg" alt="shop_4">
                      </div>
                      <div class="txt fl">
                          <h4>雅诗兰黛护肤霜</h4>
                          <p>规格：50g</p>
                      </div>
                  </div>
                  <div class="rig">
                      <span>&yen;</span>123.00
                  </div>
              </div>
              <div class="coCen">
                    <p class="le">购买数量</p>
                    <div class="rig">
                        <input type="button" value="-">
                        <input type="text" value="1">
                        <input type="button" value="+">
                    </div>
              </div>
              <div class="coBot">
                  <p>配送方式</p>
                  <p>XX快递</p>
              </div>
          </div>
          <div class="inte">
              <div class="inTop">
                  <p>优惠券</p>
                  <p>无可用</p>
              </div>
              <div class="inBot">
                  <p>使用积分</p>
                  <div class="rig">
                      <input type="text" placeholder="输入积分">
                      <a href="#">使用</a>
                      <p>可用<span>50</span>积分</p>
                  </div>
              </div>
          </div>
          <div class="amo">
              <p>
                  <span>商品金额</span>
                  <span class="act">&yen;123.00</span>
              </p>
              <p>
                <span>运费</span>
                <span class="act">+&yen;0.00</span>
            </p>
            <p>
                <span>优惠券</span>
                <span class="act">-&yen;0.00</span>
            </p>
            <p>
                <span>会员优惠</span>
                <span class="act">-&yen;0.00</span>
            </p>
            <p>
                <span>积分抵扣</span>
                <span class="act">-&yen;0.00</span>
            </p>
          </div>
          <div class="sub">
              <p>实付金额：<span>&yen;123.00</span></p>
              <a href="#">
                  提交订单
              </a>
          </div>
      </div>
     <v-footer></v-footer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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
  background: #f26b11;
  align-items: center;
  padding: .4rem .23rem 0;
  border-bottom: 1px solid #e4e4e4;
}
.headCon a {
  display: block;
}
.headCon a img {
  width: .17rem;
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
  margin-bottom: 1.37rem;
}
.main .add {
  padding: .04rem .26rem .24rem .29rem;
  background: #fff;
  display: flex;
  justify-content: space-between;
}
.main .add .info .top {
  width: 6.36rem;
  padding-top: .18rem;
  display: flex;
  justify-content: space-between;
}
.main .add .info .top span {
  font: 0.24rem/0.29rem "微软雅黑";
  color: #616161;
}
.main .add .info .bot {
  font: 0.24rem/0.29rem "微软雅黑";
  color: #616161;
  display: flex;
  align-items: baseline;
  padding-top: .18rem;
}
.main .add .info .bot span {
  display: inline-block;
  width: 5.30rem;
}
.main .add a {
  margin-top: .65rem;
}
.main .add a img {
  width: .19rem;
}
.main .com {
  background: #fff;
  margin-top: .1rem ;
  padding: .23rem .26rem 0 .23rem;
}
.main .com .coTop {
  display: flex;
  justify-content: space-between;
}
.main .com .coTop .le .pic img {
  width: 1.03rem;
  height: auto;
  padding-left: .1rem;
}
.main .com .coTop .le .txt {
  padding-left: .29rem;
  padding-top: .06rem;
}
.main .com .coTop .le .txt h4 {
  font: 0.24rem/0.47rem "微软雅黑";
  color: #606060;
}
.main .com .coTop .le .txt p {
  font: 0.24rem/0.47rem "微软雅黑";
  color: #b0b0b0;
}
.main .com .coTop .rig {
  font: 0.36rem/1.14rem "微软雅黑";
  color: #de3031;
}
.main .com .coTop .rig span {
  font-size: .24rem;
}
.main .com .coCen {
  padding-left: .03rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f0f0f0;
}
.main .com .coCen p {
  font: 0.24rem/1.42rem "微软雅黑";
  color: #696969;
}
.main .com .coCen div input[type=text] {
  width: 1.17rem;
  height: .64rem;
  border: 1px solid #525252;
  border-radius: .05rem;
  text-align: center;
  font: 0.3rem "微软雅黑";
  color: #454545;
}
.main .com .coCen div input[type=button] {
  width: .64rem;
  height: .64rem;
  border: 1px solid #525252;
  border-radius: .05rem;
  text-align: center;
  font: 0.3rem "微软雅黑";
  color: #454545;
}
.main .com .coBot {
  display: flex;
  justify-content: space-between;
}
.main .com .coBot p {
  font: 0.24rem/0.97rem "微软雅黑";
  color: #6f6f6f;
}
.main .inte {
  background: #fff;
  margin-top: .1rem;
  padding: 0 .26rem 0 .23rem;
}
.main .inte .inTop {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f1f1f1;
}
.main .inte .inTop p {
  font: 0.24rem/1.01rem "微软雅黑";
  color: #676767;
}
.main .inte .inBot {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.main .inte .inBot > p {
  font: 0.24rem/1.01rem "微软雅黑";
  color: #676767;
}
.main .inte .inBot .rig {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.main .inte .inBot .rig input {
  width: 1.49rem;
  height: .7rem;
  text-align: center;
  border: .02rem solid #d9d9d9;
  border-radius: .06rem;
}
.main .inte .inBot .rig input::-webkit-input-placeholder {
  font: 0.24rem/0.7rem "微软雅黑";
  color: #e4e4e4;
}
.main .inte .inBot .rig a {
  margin-left: .09rem;
  font: 0.24rem/0.7rem "微软雅黑";
  color: #fff;
  display: inline-block;
  background: #f26b11;
  border: .02rem solid #faa42d;
  border-radius: .05rem;
  text-align: center;
  width: .7rem;
}
.main .inte .inBot .rig p {
  font: 0.24rem "微软雅黑";
  color: #989898;
  padding-left: .19rem;
}
.main .inte .inBot .rig p span {
  color: #e73452;
}
.main .amo {
  background: #fff;
  margin-top: .08rem;
  border-top: .02rem solid #eeeeee;
  padding: .26rem .26rem .14rem .23rem;
  border-bottom: 1px solid #efefef;
}
.main .amo p {
  display: flex;
  justify-content: space-between;
}
.main .amo p span {
  display: inline-block;
  font: 0.24rem/0.44rem "微软雅黑";
  color: #5e5e5e;
}
.main .amo p .act {
  color: #e04553;
}
.main .sub {
  background: #fff;
  padding: .07rem .26rem 0 .23rem;
}
.main .sub p {
  text-align: right;
  width: 100%;
  font: 0.34rem/1.25rem "微软雅黑";
  color: #626262;
}
.main .sub p span {
  color: #de3842;
}
.main .sub a {
  display: inline-block;
  width: 3.55rem;
  margin: 0 auto;
  text-align: center;
  margin-left: 1.71rem;
  border-radius: .05rem;
  font: 0.24rem/1.12rem "微软雅黑";
  color: #fff;
  background: #f26b11;
}
.fotbar .sec p {
  color: #ff5a05;
}

</style>
