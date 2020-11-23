<template>
  <div>
    <header class="headCon">
      <go-back></go-back>
      <h1>{{$route.meta.name}}</h1>
      <p class="menu">
        <span></span>
        <span></span>
        <span></span>
      </p>
    </header>
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
</style>
