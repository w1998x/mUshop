import http from './axios'

//封装接口
//封装一个轮播图接口
export function getBanner(){
  return  http.get('/getbanner')
}

//封装一个获取商品信息(首页)接口
export function getIndexList(){
  return http.get('/getindexgoods')
}

//封装一个获取分类树形结构接口
export function getCateTree(){
  return http.get('/getcatetree')
}

//封装一个分类商品的接口
export function getGoods(params){
  return http.get('/getgoods',{
    params
  })
}

//封装一个商品详情接口
export function getGoodsDetial(params){
  return http.get('/getgoodsinfo',{
    params
  })
}

//封装一个登录接口
export function getLogin(data){
  return http.post('/login',data)
}

//封装一个注册接口
export function getRegister(data){
  return http.post('/register',data)
}

//封装一个购物车列表的接口
export function getCartList(params){
  return http.get('/cartlist',{
    params
  })
}

//封装一个购物车添加的接口
export function getCartAdd(data){
  return http.post('/cartadd',data)
}

//封装一个购物车删除的接口
export function getCartDelete(post){
  return http.post('/cartdelete',post)
}