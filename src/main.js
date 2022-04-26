/*
  整个项目的入口文件
*/
import Vue from 'vue'
//引入APP组件，是所有组件的父组件

import App from './App.vue'
/* 引入particles，动态背景图 */
import VueParticles from 'vue-particles'
Vue.use(VueParticles);
// 引入路由器
import router from './router'

/* import particles from 'particles.js'
Vue.use(particles) */

// 按需引入import ElementUI from 'element-ui';
import {
  Container,
  Aside,
  Menu,
  MenuItem,
  Header,
  Main,
  Backtop,
  Row,
  Col,
  Carousel,
  CarouselItem,
  Collapse,
  CollapseItem,
  Card,
  Image,
  Form,
  FormItem,
  Input,
  Checkbox,
  Button,
  Icon,
  Breadcrumb,
  BreadcrumbItem,
  Loading,
  Pagination
} from 'element-ui';

Vue.use(Pagination);
Vue.use(Container);
Vue.use(Aside);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Header);
Vue.use(Main);
Vue.use(Backtop);
Vue.use(Row);
Vue.use(Col);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Card);
Vue.use(Image);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Checkbox);
Vue.use(Button);
Vue.use(Icon);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Loading)


import 'element-ui/lib/theme-chalk/index.css';
// 引入less css框架，以元素的样式写css格式
import less from 'less'
// 引入font-awesome，图标字体可使用
import 'font-awesome/css/font-awesome.css'


// 引入vuex的核心文件，实现组件间通信
import store from './store'

// 引入写的各种请求方式
import { postRequest } from "./utils/api";
import { putRequest } from "./utils/api";
import { getRequest } from "./utils/api";
import { deleteRequest } from "./utils/api";
// 将各种请求方式写入vue原型，可以全局使用，如this.postRequest
Vue.prototype.postRequest = postRequest;
Vue.prototype.putRequest = putRequest;
Vue.prototype.getRequest = getRequest;
Vue.prototype.deleteRequest = deleteRequest;

//关闭Vue的生产提示
Vue.config.productionTip = false
Vue.use(less);




//创建Vue的实例对象--vm
new Vue({
  store,  // 配置项添加store
  router,
  //将app组件放入容器中
  render: h => h(App),
}).$mount('#app')
