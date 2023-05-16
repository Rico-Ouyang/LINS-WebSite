<template>
<!--     原始html使用a标签跳转链接
    这里使用特殊的router-link实现跳转，跳转到to=“xxx” active-class实现高亮展示-->
<!--     <router-link to="/" active-class="active">Home</router-link> |
    <router-link to="/User" active-class="active">User</router-link> -->
    <!--使用router-view展示出现的组件-->
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import Home from './views/Home.vue'
// @ is an alias to /src
  export default {
    name: 'App',
    components: {
      Home,
    },
  };
</script>
<style>
  html, body {
    margin: 0;
    padding: 0;
  }
  #app {
    height: 100vh;
  }
</style>
