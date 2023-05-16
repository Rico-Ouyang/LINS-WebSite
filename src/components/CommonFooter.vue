<template>
    <footer id="footer">
        <div id="footer-main" class="text-center bg-gray">
          <div class="footer-container">
            <div class="footer-box">
                <ul class="social-icons m-top-20">
                  <li><a href="http://www.cqupt.edu.cn/" target="blank"><i class="fa fa-building"></i></a></li>
                  <li><a href="http://hurrypay123.com/" target="blank"><i class="fa fa-laptop"></i></a></li>
                  <li><a href="http://scie.cqupt.edu.cn/" target="blank"><i class="fa fa-leaf"></i></a></li>
                  <li><a href="http://" target="blank"><i class="fa fa-home"></i></a></li>
                </ul>
              <div class="copyright">All rights reserved @ Zhaolong Ning, 2022, 版权所有ICP证: <a href="https://beian.miit.gov.cn/">皖ICP备2022005550号-1</a></div>
            </div>
          </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'CommonFooter'
}
</script>

<style>
  /* footer整体位置，字体大小 */
  #footer {
    position: relative;
    bottom: 0px;
    z-index: 5;
    font-size: 13px;
    text-align: center;
  }
  #footer #footer-main {
    padding: 20px 0;
  }
  /* 背景色 */
  .bg-gray {
    background-color: #e4e4e450 !important;
  }
  /* 所有内容容器 */
  .footer-container {
    width: 100%;
    height: 50px;
  }
  /* 图标链接 */
  .social-icons {
      font-size: 10pxs;
      padding: 0;
      color: #000;
      width: 100;
      text-align: center;
  }
  .m-top-20 {
      margin-top: 20px !important;
  }
  .footer-box li{
    /* 并列显示 */
    display: inline;
    /* 无顺序样式 */
    list-style: none;
    margin-right: 15px;
  }
  .footer-box li:last-child{
    margin-right: 0px;
  }

  .footer-box a {
    /* 去掉超链接下划线  */
    text-decoration: none;
    color: black;
  }

</style>