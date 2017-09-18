import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Selection from '@/components/Selection/Selection'
import Discover from '@/components/Discover/Discover'
import Login from '@/components/Login/Login'
import Setting from '@/components/Setting/Setting'
import Goods from '@/components/Selection/Goods'
import Picture from '@/components/Selection/Picture'
import Detail from '@/components/Commons/Detail'

export default new Router({
  routes: [
   	{
   		path:'/',
   		component:Discover
   	},
   	{
   		path:'/discover',
   		component:Discover
   	},
   	{
   		path:'/selection',
   		component:Selection,
          children:[
            {
               path:'goods',
               component:Goods
            },
            {
               path:'picture',
               component:Picture
            },
         ]
   	},
   	{
   		path:'/login',
   		component:Login
   	},
   	{
   		path:'/setting',
   		component:Setting,
   	},
      {
         path:'/detail',
         component:Detail
      }
  ]
})

