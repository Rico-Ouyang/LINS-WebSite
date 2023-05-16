<template>
  <el-container id="mainpage">
    
    <el-aside width="260px">
      <!-- 侧边栏菜单 -->
      <el-menu
        class="el-menu-vertical-demo"
        text-color="#fff">
        <!-- 卡片 -->
        <div class="lab-card">
            <img :src="logoUrl" class="labLogo"
            style="width:150px;height:150px;border-radius:50%">
            <h2 style="font-size:20px;
              margin: 10px 0px 0px 0px;
              color:#e8e8e8 ">泛在边缘网络研究组</h2>
            <h3 style="font-size:16px;
              line-height:24px;
              margin:10px 0px 25px;
              color:#e8e8e8 ">
              LINS研究室
            </h3>
        </div>
        <hr>
        <!-- 菜单内容 -->
        <!-- click实现动态路由导航 -->
        <el-menu-item @click="clickMenu(item)" v-for="item of menu" :index="item.path" :key="item.path">
            <!-- menu图标 -->
            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
            <div style="display:inline">
              <i :class="'el-icon-' + item.icon" style="color:#fff;margin-left:10px"></i>
            </div>
            <div style="display:inline">
              <span slot="title" style="font-size: 15px">&nbsp&nbsp{{item.label}}</span>
            </div>
            
        </el-menu-item>
      </el-menu>
    </el-aside>
    <!-- 页面展示部分,包括页头 -->
    <el-container class="content-display">

      <!----- 小屏幕<1200px时，显示的页头上面的菜单 ----->
        <div class="small-nav-lab-card small-nav-box"> <!-- 动态显示头上的名片 -->
          <!-- 老师名片 -->
          <div style="display:flex;align-items:center">
            <img :src="logoUrl" class="labLogo"
              style="width:50px;height:50px;border-radius:50%">
            <h2 style="font-size:16px;
              color:#fff;margin-left:10px">
              泛在边缘网络研究组LINS研究室
            </h2>
          </div>
          <!-- 名片结束 -->

          <!-- 小屏时响应式菜单按钮和内容 -->
          <div class="small-nav-menu"
              @mouseover="showSmallMenu"
              @mouseleave="closeSmallMenu">
            <div class="dropbtn-box show-small-nav-button dropbtn">
              <i class="el-icon-menu"
                style="font-size:24px">
              </i>
              
              <transition name="el-zoom-in-top">
              <!-- 响应式菜单下拉框 -->
              <div class="dropdown-content-box" v-if="showSmallMenuContent"
                @mouseover="showSmallMenu"
                @mouseleave="closeSmallMenu"
                @click="closeSmallMenu">
                <ul class="dropdown-content">
                  <li @click="clickMenu(item)" v-for="item of menu" :index="item.path" :key="item.path">
                    {{item.label}}
                  </li>
                </ul>
              </div>
              </transition>
            </div>
          </div>
        </div>
      <!-- 小屏幕菜单结束 -->


      <!-- 页头 -->
      <!-- particles动态粒子特效背景 -->
      <!-- linesColor:#8DD1FE;  粒子连线颜色 -->
      <!-- <particles class="header-bg"></particles> -->
      <vue-particles
          class="header-bg"
          color="#fff"
          :particleOpacity="0.6"
          :particlesNumber="220"
          shapeType="circle"
          :particleSize="4"
          linesColor="#8DD1FE"
          :linesWidth="1"
          :lineLinked="true"
          :lineOpacity="0.5"
          :linesDistance="150"
          :moveSpeed="1.5"
          :hoverEffect="true"
          hoverMode="grab"
          :clickEffect="true"
          clickMode="push"
          >
      </vue-particles>

      <!-- 页头内容 -->
      <el-header>
        <!-- 标题 -->
        <!-- 页头标题左边的内容（用来展示当前的组件位置） -->
        <div class="l-content">
          <h3 class="mytitle" style="color: #fff">{{newTitle}}</h3>  <!--大标题-->
        </div>
        <!--面包屑显示当前页面的路径，快速返回之前的任意页面-->
        <div class="r-content">
          <div>
            <el-breadcrumb
              style="color:#fff"
              separator-class="el-icon-arrow-right"
              v-if="this.$router.currentRoute.path != '/'">
              <el-breadcrumb-item :to="{ path: '/' } " class="breadColor">Home</el-breadcrumb-item>
              <el-breadcrumb-item class="breadColor">{{this.$router.currentRoute.name}}</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </div>
      </el-header>

      <!-- 头部title下面的横线 为了好看,在非首页时显示 -->
      <div class="header-lines" v-if="this.$router.currentRoute.path != '/'"></div>


      <!-- 内容页，包含显示内容和页脚内容 -->
      <el-main class="mainPart">
        <!-- 组件在这里显示 -->
        <div class="content">
          <!-- 路由为/时展示commonhome组件，其余由routerview展示别的组件 -->
          <common-home v-if="this.$router.currentRoute.path == '/'"></common-home>
          <!-- 路由展示 -->
          <router-view></router-view> 
          <!-- 返回顶部按钮，绑定target为class名 -->
          <el-backtop target=".mainPart" :bottom="120" :right="100"></el-backtop>
        </div>
        <!-- 页脚在这里 -->
        <common-footer></common-footer>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonFooter from '../components/CommonFooter.vue'
import CommonHome from '../components/CommonHome.vue'
/* import particlesJs from "../components/particles/Particles.vue" */

// @ is an alias to /src
  export default {
    name: 'MainPage',
    components: {
      /* 首页内容 */
      CommonHome,
      CommonFooter,
      /* Particles: particlesJs */
    },
    data() {
      return {
        logoUrl: require('../assets/professor-NZL.jpg'), //返回用户图片地址
        /* 菜单 */
        menu: [
                {
                    path: '/',
                    name: '首页 Home',  //name用于简化路由名
                    label: '首页', //菜单的标签名
                    icon: 's-home',
                },
                {
                    path: '/member',
                    name: '成员 Member',
                    label: '成员',
                    icon: 's-custom',
                },
                {
                    path: '/research',
                    name: '科研 Research',
                    label: '科研',
                    icon: 's-promotion',
                },
                {
                    path: '/publication',
                    name: '论文 Publication',
                    label: '论文',
                    icon: 'reading',
                },
                {
                    path: '/gallery',
                    name: '图集 Gallery',
                    label: '图集',
                    icon: 'picture-outline',
                },
                {
                    path: '/contact',
                    name: '联系 Contact',
                    label: '联系',
                    icon: 'message',
                },
              ],
        /* 首页欢迎词 */
        title: 'Welcom to Lab of Intelligent Networking and Security, LINS',
        /* 跳转路由标题头 */
        newTitle: 'Welcom to Lab of Intelligent Networking and Security, LINS',
        /* 监视屏幕大小 */
        screenWidth: null, //屏幕尺寸,
        /* 控制显示小菜单的变量，v-if用到了 */
        showSmallMenuContent: false,

        currentRoute: this.$router.currentRoute.name
      }
    },

    methods: {
      /* 动态路由导航，点击左侧menu时调用 */
      clickMenu(item) {
        /* 编程式导航加载路由，将路由name push进router */
        this.$router.push({
          name: item.name
        })
        /* 路由变化时更新页头的title */
        this.initTitle()
        // if (this.$router.currentRoute.path == '/') {
        //   this.newTitle = this.title
        //   } else {
        //     console.log(this.$router.currentRoute)
        //     this.newTitle = this.$router.currentRoute.name
        // }


      },
      /* 初始化页头标题左边的内容（用来展示当前的组件位置） */
      initTitle() {
        /* 路由变化时更新页头的title */
        if (this.$router.currentRoute.path == '/') {
          this.newTitle = this.title
          } else {
          this.newTitle = this.$router.currentRoute.name
        }
      },

      /* 鼠标悬浮和离开时控制小菜单的显示 */
      showSmallMenu() {
        this.showSmallMenuContent = true
      },
      closeSmallMenu() {
        this.showSmallMenuContent = false
      }

    },
    mounted() {
      this.screenWidth = document.body.clientWidth
      window.onresize = () => {  //屏幕尺寸变化就重新赋值
        return ( () => {
          this.screenWidth = document.body.clientWidth
        })()
      },
      this.initTitle()
    },

    watch: {
      /* 监听屏幕尺寸大小,控制小菜单显示 */
      // screenWidth: {
      //   handler: function (val, oldVal) {
      //     if (val < 1200) {
      //       /* 路由变化时更新页头的老师头像卡片，非主页不显示 */
      //       if (this.$router.currentRoute.path == '/') {
      //         this.smallNavLabCard.display = "flex"
      //       } else {
      //         this.smallNavLabCard.display = "none"
      //       }
      //     } else {
      //       this.smallNavLabCard.display = "none"
      //     }
      //   },
      //   immediate: true
      // },
    }
  }
</script>

<style lang="less" scoped>
#mainpage {
    height: 100%;
    /* font-family: 楷体; */
  }
  
  /* 大屏幕时隐藏响应式小导航栏和头部的老师照片 */
  .small-nav-box {
    display: none;
  }

  /* 动态粒子背景样式 */
  #particles-js {
    /* 相对位置，相对于上一个元素的位置 */
    position: relative !important;
    /* 固定设置高度，important声明的样式会覆盖所有其他的声明样式 */
    height: 90px;
    /* background-image: linear-gradient(rgb(21, 30, 44), #294364, rgba(96, 125, 165, 0.966), rgba(105, 161, 230, 0.171)); */
    background-color: rgb(28, 36, 61);  /* 粒子背景色 */
  }
  /* 与粒子背景重合的页头 */
  .el-header {
    color: #e8e8e8 ;
    /* background-color: #2c416e; */
    display: flex;
    align-items: center;
    height: 0px !important;
    /* 相对位置，使其与背景图片的relaive position配和实现重叠 */
    position: relative;
    left: 0px;
    right: 0px;
    top: -45px;
    justify-content: space-between;

    /* 面包屑颜色 */
    .el-breadcrumb /deep/ .el-breadcrumb__inner {
      color: rgb(255, 255, 255) !important;
    }
  }

  /* 页头内部下方横线样式 */
  .header-lines {
    display: inline-block;
    position: relative;
    top: 0px;
    height: 8px;
  }
  /* 伪元素画横线，absolute配合header-line的relative进行位置显示 */
  .header-lines::after {
    content: '';
    position: absolute;
    left: 50px;
    top: -5px;
    bottom: 0px;
    height: 6px;
    width: 60px;
    background-color: #ffffff;
  }

  /********** 中间全部主体的样式 **********/
  .el-main {
    background-color: rgb(250, 250, 250);
    /* text-align: center; */
    width: 100%;
    height: 100%;
    /* 内边距，强制修改el-main自带的边距 */
    padding: 0px !important;
  }
  .mainPart:last-child, #footer:last-child {
    margin-bottom: 0 !important;
  }

  /******* 内容页 *******/
  /* 内容展示部分的样式 */
  /* 全局主页展示的字体样式及颜色 */
  .content {
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 50px;
    font-size: 15px;
    color: #636363;
    padding: 20px 20px 0px 20px;
  }

  /******* 侧边栏样式 *******/
  .el-aside {
    background-image: url('http://link.lins-cqupt.cn/backgroundimg.jpg');
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .el-menu {
    color: rgb(215, 234, 250);
    /* menu背景色透明，透过el-aside的背景图片 */
    background-color: rgba(255, 255, 255, 0);
    /* background-image: url('../assets/backgroundimg.jpg'); */
    /* overflow: hidden; */
    height: 100%;
    border: none;
    /* 卡片和文字 */
    .lab-card {
      width: 100%;
      margin: 30px 0px 0px 0px;
      text-align: center;
      color: #e8e8e8 ;
      .labLogo {
        height: 140px;
        /* border-radius: 50%; */
      }
    }
  }
  .el-menu-item {
    align-items: center;
    align-content: center;
    justify-content: space-around;
  }
  /* 悬浮时菜单item样式 */
  .el-menu-item:hover{
    outline: 0 !important;
    color: #409EFF !important;
    background-color: rgba(48, 122, 184, 0.281);
  }
  /* 被点击时菜单样式 */
  .el-menu-item.is-active {
    background-color: rgba(11, 96, 153, 0.04);
  }

  /* 滚动条样式 */
  /* 设置滚动条的样式
  定义滚动条高宽及背景
  高宽分别对应横竖滚动条的尺寸 */
  ::-webkit-scrollbar {
      width: 8px;
  }
  /* 滚动槽  内阴影+圆角*/
  ::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.089);
      box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.068);
      border-radius: 5px;
  }
  /* 滚动条滑块 */
  ::-webkit-scrollbar-thumb {
      border-radius: 5px;/* rgba(32, 58, 138, 0.171) */
      background: #086eb341;
      -webkit-box-shadow: inset 0 0 3px rgba(90, 90, 90, 0.11);
      box-shadow: inset 0 0 3px rgba(90, 90, 90, 0.089);
  }
  ::-webkit-scrollbar-thumb:window-inactive {
      background: rgba(238, 238, 238, 0.281);
  }

  /*********屏幕小于1200px时的样式 **********/
  @media (max-width:1200px) {
    /* 隐藏原来的侧边栏菜单 */
    .el-aside {
      display: none;
    }

    /* 显示头部上面的整体，设置背景色*/
    .small-nav-box {
      background-color: rgb(28, 36, 61);
      border-style: none;
    }
    /* 设置头部上面的整体的排列方式，居中排列 */
    .small-nav-lab-card {
      display: flex;
      align-items: center;
      justify-content: space-around;
    }

    /******* 小屏响应菜单的整体 *******/
    .small-nav-menu{
      /* 按钮背景透明色 */
      background-color: #156f9900;
      color: rgb(255, 255, 255);
    }
    /*div容器放置下拉内容*/
    .dropdown-content-box {
      display: block;
      position: relative;
      text-align: center;
      /* 层级为2，显示在上层 */
      z-index: 2;
    }
    /*下拉框内容的位置*/
    .dropdown-content{
      /* 相对于.dropdown-content-box的位置的绝对位置 */
      position: absolute;
      top: 0;
      right: -20px;
      /* 层级更高 */
      z-index: 2;
    }
    /*无序列表装导航栏：下拉框列表样式，内部边框等样式*/
    .dropdown-content{
      list-style-type: none;  /*清除列表标号样式*/
      margin: 0;
      padding: 0;
      border-radius: 10px 10px 10px 10px;  /*圆角边框*/
      overflow: hidden;
      background-color: #156f99c4;
      width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    }
    /*下拉列表*/
    .dropdown-content li{
      display: block;
      padding: 10px 10px;
      text-decoration: none;
      text-align: center;
    }
    /*悬停下拉内容时时改变下拉内容颜色*/
    .dropdown-content li:hover{
      background-color: #ccebff;
      color: black;
    }

    /* 小菜单样式结束 */

    /* 内容展示页面宽度 */
    .content-display {
      width: 100%;
    }

    /* 页脚居中 */
    #footer {
      position:initial;
    }
  }

  /******手机屏幕样式，继承小于1200px的基础上，
  修改了页头标题的高度和字体大小 ******/
  @media (max-width:450px) {
    .small-nav-box {
      display: flex;
    }
    .dropdown-content {
      right: -10px;
      font-size: 14px;
    }
    /* 粒子特效高度 */
    .header-bg {
      height: 50px !important;
    }
    /* 页头标题位于粒子特效的一半高度的位置 */
    .el-header {
      top: -25px;
    }
    .el-header .l-content{
      font-size: 12px;
    }
    .el-breadcrumb /deep/ .el-breadcrumb__inner {
      font-size: 12px !important;
    }
  }
</style>
