<template>
  <div>
    <div class="page">
      <!-- 头部 -->
      <header class="headCon">
        <go-back></go-back>
        <h1>登录</h1>
        <span @click="$router.push('/register')" class="menu">注册</span>
      </header>
      <div class="main">
        <van-form>
          <van-field
            v-model="loginList.phone"
            name="手机号"
            label="手机号"
            placeholder="手机号"
            :rules="[{ required: true, message: '请填写手机号' }]"
          />
          <van-field
            v-model="loginList.password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
          <div style="margin: 16px">
            <van-button
              @click="login"
              round
              block
              type="info"
              native-type="submit"
            >
              提交
            </van-button>
          </div>
        </van-form>
      </div>
    </div>
  </div>
</template>

<script>
import { getMenuDelete } from '../../../../../day10/后台管理/backmag/src/util/axios';
import {getLogin} from '../../util/axios'
import {Toast} from 'vant'
export default {
  data() {
    return {
      loginList: {
        phone:'',
        password:''
      },
    };
  },
  methods: {
    login() {
     getLogin(this.loginList)
     .then(res=>{
       if(res.code==200){
          Toast.success(res.msg)
         this.$router.push("/mine");
         sessionStorage.setItem('userInfo',JSON.stringify(res.list))
       }else{
          Toast.fail(res.msg)
       }
     })
      
    },
  },
};
</script>

<style lang="" scoped>
.van-button--info {
  background: #f26b11;
  border: 1px solid #f26b11;
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
.headCon .menu {
  color: #fff;
  font-size: 0.28rem;
}

.main {
  padding: 0.7rem 0.7rem;
}
.main li {
  border-bottom: 1px solid #a3a3a3;
  width: 5.8rem;
  font: 0.3rem/.7rem "微软雅黑";
  color: #333333;
  padding-top: 0.3rem;
}
.main .btn {
  border-bottom: none;
}
.main .btn a {
  display: inline-block;
  width: 5.8rem;
  height: 0.75rem;
  text-align: center;
  font: 0.3rem/.75rem "微软雅黑";
  color: #fff;
  background: #f26b11;
  border-radius: 0.05rem;
}
.main .forget {
  border-bottom: none;
  font-size: 0.2rem;
}
.main .forget span {
  float: right;
}
</style>
