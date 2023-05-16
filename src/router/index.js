import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../components/Contact.vue'
import Member from '../components/Member.vue'
import Research from '../components/Research.vue'
import Publication from '../components/Publication.vue'
import Gallery from '../components/Gallery.vue'
import Resource from '../components/Resource.vue'
import Login from '../components/resource-enter/Login.vue'

Vue.use(VueRouter)

/* 避免重复路由切换报警告 */
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    name: '首页 Home',  //路由path的简称
    label: '首页 Home',  //菜单的标签名
    component: Home,
    children: [
      {
        path: '/member',
        name: '成员 Member',
        label: '成员 Member',
        component: Member
      },
      {
        path: '/research',
        name: '科研 Research',
        label: '科研 Research',
        component: Research
      },
      {
        path: '/publication',
        name: '论文 Publication',
        label: '论文 Publication',
        component: Publication
      },
      {
        path: '/gallery',
        name: '图集 Gallery',
        label: '图集 Gallery',
        component: Gallery
      },
      {
        path: '/contact',
        name: '联系 Contact',
        label: '联系 Contact',
        component: Contact
      },
      {
        path: '/resource',
        name: '资源 Resource',
        label: '资源 Resource',
        component: Resource,
        /* 组件内路由守卫，没有登陆过就跳转到登录页 */
        beforeEnter: (to, from, next) => {
          if (window.sessionStorage.getItem('code') == 200) {
            console.log(window.sessionStorage.getItem('code'));
            next()
          } else {
            next('/login')
          }
        }
      },
      {
        path: '/login',
        name: 'Login Resource',
        label: 'Login Resource',  //login和resource组件共享一个label作为菜单名
        component: Login,
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

/* 全局路由守卫，不是跳转到login的路由直接next */
router.beforeEach((to, from, next) => {
  /* 判断本次是否登陆过，登陆过就有tokenstr存在，直接跳转到资源组件 */
  if (to.path == '/login') {
    if (window.sessionStorage.getItem('code') == 200) {
      next('/resource')
    } else {
      next()
    }
  } else {
    next()
  }
})

//全局路由改变后钩子
router.afterEach((to, from) => {
  //将滚动条恢复到最顶端
  window.scrollTo(0, 0);
})

export default router
