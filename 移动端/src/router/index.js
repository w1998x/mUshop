import Vue from 'vue'
import Router from 'vue-router'
//引入一级路由
import Index from '../components/views/index'
import GoodsClass from '../components/views/goodsClass'
import GoodsDetail from '../components/views/goodsDetail'
import Login from '../components/views/login'
import Register from '../components/views/register'

//引入二级路由
import Home from '../components/pages/home'
import Cart from '../components/pages/cart'
import GoodsList from '../components/pages/goodsList'
import Mine from '../components/pages/mine'
import CartOrder from '../components/pages/cartOrder'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/index',
      component:Index,
      children:[
        {
          path:'/home',
          component:Home
        },
        {
          path:'/cart',
          component:Cart,
          meta:{
            name:"购物车"
          }
        },
        {
          path:'/goodsList',
          component:GoodsList,
          meta:{
            name:"购物车"
          }
        },
        {
          path:'/mine',
          component:Mine,
          meta:{
            name:"关于我的"
          }
        },
        {
          path:'/cartOrder',
          component:CartOrder,
          meta:{
            name:"购物车确认"
          }
        },
        {
          path:'',
          redirect:'/home'
        }
      ]
    },
    {
      path:'/goodsClass',
      component:GoodsClass,
      meta:{
        name:"商品分类"
      }
    },
    {
      path:'/goodsDetail',
      component:GoodsDetail,
      meta:{
        name:"商品详情"
      }
    },
    {
      path:'/login',
      component:Login,
      meta:{
        name:"登录"
      }
    },
    {
      path:'/register',
      component:Register,
      meta:{
        name:"注册"
      }
    },
    {
      path:'*',
      redirect:'/index'
    }
  ]
})
