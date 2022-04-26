<template>
  <div>
    <div>
      <div>
        <h1>Contact Me 联系</h1>
      </div>
      <hr />
    </div>
    <section class="scetion">
      <div class="contact-content">
        <p>
          🤝 If you are interested in communication and computing theory, smart
          vehicle-road collaborative network, UAV-assisted communication and
          computing network, blockchain-based vehicle networking security
          system, intelligent medical health, 6G green communication network,
          reconfigurable intelligent hyper-surface wireless communication, etc.,
          Why not contact me now? And if you want, I'd love to be able to
          discuss things with you about studying, working, and even living!
        </p>
        <p>
          🤝
          如果你对泛在通信与计算理论、智慧车路协同网络、基于无人机辅助的通信与计算网络、基于区块链的车联网安全系统、智能医疗大健康、6G绿色通信网络、可重构智能超表面无线通信等方面感兴趣，
          何不现在就联系我？另外如果你愿意，我也很开心能和你一起探讨有关学习、工作、甚至生活的各种事情！
        </p>
        <div class="xialakuang">
          <el-collapse
            v-model="activeName"
            v-for="(message, index) in messages"
            :key="index"
            accordion
          >
            <el-collapse-item
              :title="message.title"
              :name="index"
              class="itemColor"
            >
              <hr />
              <div class="contact-card">
                <div class="big">
                  <img :src="message.url1" alt="邮件图标" />
                </div>
                <div class="font">
                  {{ message.content1 }}
                </div>

                <div class="big" v-if="message.content2">
                  <img :src="message.url2" />
                </div>
                <div class="font">{{ message.content2 }}</div>
              </div>

            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      activeName: ["1"],
      messages: [
        {
          title: "Office Address 办公地址",
          content2: "重庆市南岸区重庆邮电大学数字图书馆B1层",
          content1:
            "B1 floor of Digital Library,Chongqing University of Posts and Telecommunications,Nanan,Chongqing, P. R. China",
          url1: require("../assets/logo/定位.png"),
          url2: require("../assets/logo/定位.png"),
        },
        {
          title: "Emails 电子邮件",
          content1: "z.ning@ieee.org",
          url1: require("../assets/logo/邮件.png"),
        },
        {
          title: "Phone 电话",
          content1: "+86-19115620816",
          url1: require("../assets/logo/手机.png"),
        },
      ],
    };
  },
};
</script>

<style scoped>
.xialakuang {
  margin-top: 100px;
}
.scetion {
  margin: 40px 0;
}

.contact-content p {
  margin-bottom: 30px;
}
/* .contact-card {
  background-color: rgba(127, 166, 202, 0.096);
  margin: -6.5px 0 0 0;
  height: 100%;
} */
.el-collapse-item__content {
  padding: 0px;
}

.big {
  float: left;
  margin-right: 10px;
}

.big img {
  padding-left: 10px;
  border: 0px;
  width: 25px;
  height: 25px;
  display: flex;
}
.font {
  font-size: 15px;
  line-height: 30px;
}
a:hover {
  width: 100px;
  height: 100px;
}

@media (max-width:450px) {
  .big img {
    padding: 5px 0 5px 10px;
    border: 0px;
    width: 20px;
    height: 20px;
    display: flex;
  }
  .font {
    font-size: 14px;
    line-height: 30px;
  }
}
</style>
