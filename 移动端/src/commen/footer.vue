<template>
  <div>
    <footer class="fotbar">
      <router-link to="/home" active-class="active">
        <span class="iconfont icon-shouye"></span>
        <p>首页</p>
      </router-link>
      <router-link to="/cart" active-class="active">
        <span class="iconfont icon-gouwuche"></span>
        <p>购物车</p>
      </router-link>
      <router-link to="/mine" active-class="active">
        <span class="iconfont icon-wode2"></span>
        <p>我的</p>
      </router-link>
    </footer>
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
.fotbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  height: 1.2rem;
  padding: 0 0.5rem;
  border-top: 1px solid #ebebeb;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
}
.fotbar span {
  display: block;
  font-size: 0.6rem;
  color: #666;
  
}
.fotbar  p {
  font: 0.2rem "微软雅黑";
  margin-top: 0.12rem;
  color: #4b2a2a;
  text-align: center;
}
.active p,
.active span{
  color: #ff5a05 !important;
}
</style>
