<template>
  <div>
    <div class="page">
      <v-header></v-header>
      <div class="main">
        <div class="list">
          <van-sidebar v-model="activeKey" @change="onChange">
            <van-sidebar-item
              :title="item.catename"
              v-for="item in firstList"
              :key="item.id"
            />
          </van-sidebar>
        </div>
        <div class="deti">
          <div class="sham">
            <div class="tit clearfix">
              <h2 class="fl">洗发类</h2>
              <a class="fr" href="proList.html">更多</a>
            </div>
            <van-grid :border="false" :column-num="3">
              <van-grid-item :to="'/goodsList?id='+item.id" v-for="item in secondList" :key="item.id">
                <van-image :src="$imgUrl+item.img" />
                <p>{{item.catename}}</p>
              </van-grid-item>
            </van-grid>
          </div>
          <div class="haCa">
            <div class="tit clearfix">
              <h2 class="fl">护发类</h2>
              <a class="fr" href="#">更多</a>
            </div>
            <ul>
              <li>
                <a href="#">
                  <img
                    src="../../assets/images/calFic/pic10.jpg"
                    alt="shopClassify_1"
                  />
                  <p>施华蔻染色</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="../../assets/images/calFic/pic8.jpg"
                    alt="shopClassify_1"
                  />
                  <p>施华蔻双氧乳</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="../../assets/images/calFic/pic9.jpg"
                    alt="shopClassify_1"
                  />
                  <p>施华蔻染发膏</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vHeader from "../../commen/header";
import { getCateTree} from "../../util/axios";
export default {
  data() {
    return {
      activeKey: 0,
      firstList: [],
      secondList: [],
    };
  },
  components: {
    vHeader,
  },
  mounted() {
    this.cateTree();
  },
  methods: {
    onChange(e) {
      console.log(e);
      this.secondList = this.firstList[e].children;
      // console.log(this.secondList);
    },
    cateTree() {
      getCateTree().then((res) => {
        console.log(res);
        this.firstList = res.list;
        this.secondList = res.list[this.activeKey].children;
      });
    },
   
  },
};
</script>

<style lang="" scoped>
.page {
  max-width: 7.5rem;
  margin: 0 auto;
}
.main {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.2rem;
}
.main .list ul {
  width: 1.55rem;
  border-right: 1px solid #d9d9d9;
}
.main .list ul li {
  padding: 0.32rem 0;
}
.main .list ul li a {
  padding-left: 0.38rem;
  font: 0.26rem/0.52rem "微软雅黑";
  color: #666666;
  border-left: 0.08rem solid transparent;
}
.main .list ul .act a {
  border-left-color: #f26b11;
}
.main .list ul .last {
  padding-bottom: 1rem;
}
.main .deti {
  padding-left: 0.26rem;
  padding-right: 0.37rem;
  width: 100%;
}
.main .deti .sham .tit,
.main .deti .haCa .tit {
  padding-top: 0.14rem;
}
.main .deti .sham .tit h2,
.main .deti .haCa .tit h2 {
  font: 0.26rem/1.05rem "微软雅黑";
  color: #454545;
  padding-left: 0.29rem;
}
.main .deti .sham .tit a,
.main .deti .haCa .tit a {
  font: 0.24rem/1.05rem "微软雅黑";
  color: #454545;
  padding-right: 0.6rem;
  background: url("../../assets/images/calFic/arrowRight.jpg") no-repeat 0.5rem
    0.39rem;
  background-size: 0.19rem 0.25rem;
}
.main .deti .sham ul,
.main .deti .haCa ul {
  display: flex;
  justify-content: space-between;
}
.main .deti .sham ul li,
.main .deti .haCa ul li {
  margin-top: 0.13rem;
}
.main .deti .sham ul li a,
.main .deti .haCa ul li a {
  display: block;
  font: 0.24rem/0.67rem "微软雅黑";
  color: #868686;
  text-align: center;
}
.main .deti .sham ul li a img,
.main .deti .haCa ul li a img {
  width: 1.54rem;
  height: auto;
}
.fotbar .active p {
  color: #ff5a05;
}
</style>
