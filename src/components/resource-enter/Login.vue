<template>
  <div>
    <!-- 页头 -->
    <!-- particles动态粒子特效背景 -->
    <!-- linesColor:#8DD1FE;  粒子连线颜色 -->
    <!-- <vue-particles
      class="header-bg"
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
    </vue-particles> -->
    <el-form
      :rules="rules"
      v-loading="loading"
      element-loading-text="正在登录..."
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(240, 240, 240, 0.8)"
      ref="loginForm"
      :model="loginForm"
      class="loginContainer"
    >
      <h3 class="loginTitle">系统登录</h3>
      <el-form-item prop="username">
        <el-input
          type="text"
          v-model="loginForm.username"
          placeholder="请输入用户名"
          @keyup.enter="submitlogin"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          v-model="loginForm.password"
          placeholder="请输入密码"
          @keyup.enter="submitlogin"
        ></el-input>
      </el-form-item>
      <el-checkbox v-model="checked" class="loginRemember">记住我</el-checkbox>
      <el-button type="primary" style="width: 100%" @click="submitlogin"
        >登录</el-button
      >
    </el-form>
  </div>
</template>

<script>
import qs from 'qs';
export default {
  name: "Login",
  data() {
    return {
      captchaUrl: "",
      // 记录用户名和密码
      loginForm: {
        username: "",
        password: "",
      },
      loading: false,
      checked: true,
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 1, max: 100, message: "长度大于一个字符", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitlogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true;
          this.postRequest("/login", qs.stringify(this.loginForm)).then((resp) => {
            this.loading = false;
            if (resp) {
              // 存储用户token
               
              // 存储用户登陆状态
              // console.log(resp.code);
              const code = resp.code;
              window.sessionStorage.setItem("code", code);
              // 页面跳转,redirect在页面输入的地址，
              let path = this.$route.query.redirect;
              this.$router.replace(
                path == "/" || path == undefined ? "resource" : path
              );
              // 跳转首页
              // this.$router.push("/home");
            }
          });
        } else {
          // 弹窗提示错误的两种形式
          this.$message.error("请输入登录信息！");
          return false;
        }
      });
    },
  },
};
</script>

<style>
.loginContainer {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  height: 40%;
  padding: 15px 35px 15px 35px;
  background: #fff;
  border: 1px solid rgb(203, 212, 218);
  box-shadow: 0 0 25px #e4e9eb;
}
.loginTitle {
  margin: 0px auto 40px auto;
  text-align: center;
}
.loginRemember {
  text-align: left;
  margin: 0px 0px 15px 0px;
}
@media (max-width:500px) {
  .loginContainer{
    height: 70%;
    width: 70%;
  }
}
</style>