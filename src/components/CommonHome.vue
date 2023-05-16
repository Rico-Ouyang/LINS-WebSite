<template>
  <div>
    <el-row :gutter="60">
      <!-- 分成24等分 -->
      <!-- 自我介绍 -->
      <el-col :md="24" :sm="24" :xs="24">
        <div class="col-md-8">
          <div>
            <br />
            <h2> 欢迎访问泛在边缘网络研究组 · LINS研究室！ </h2><br />
            <p style="line-height:32px;font-size:17px">
              研究室聚焦智能无线资源管理与网络优化方面的研究，以未来超密度网络和泛在边缘网络为对象，围绕无线多维资源(频谱、能量、时间、空间、计算、存储等)协同管理中的关键问题，开展原创性研究，基于多维异构网络资源的智能优化策略，构建网络感知、通信传输、高效计算和在线决策的闭环网络优化生态体系架构，促进跨领域跨行业的资源互通共享与应用协同，实现数字世界和物理世界的深度融合。
              <br><br>
              具体研究方向包括：泛在通信与计算理论、智慧车路协同网络、基于无人机辅助的通信与计算网络、基于区块链的车联网安全系统、智能医疗大健康、6G绿色通信网络、可重构智能超表面无线通信等。
            </p>
            <br>
            <p style="color:rgb(12, 112, 226);line-height:32px;font-size:17px">
              研究室常年招聘青年教师，欢迎志同道合的小伙伴们联系我们！招聘待遇请见文档。
              <a href="http://iicns.cqupt.edu.cn/#/./Recruit" style="font-size:10px">招聘待遇</a>
              <br>
              研究室招募有志向逆袭的博士生和研究生，数学和编程基础功底很重要，但更重要的是有决心、有想法、有执行力！有意者请查阅研究室各位老师的联系方式。
            </p>
            <!-- <p style="color:blue;line-height:32px;font-size:17px">
                &#9835; 研究室招募有志向逆袭的博士生和研究生，数学和编程基础功底很重要，但更重要的是有决心、有想法、有执行力！有意者请查阅研究室各位老师的联系方式。
                <br />
            </p> -->
          </div>

          <!-- 分割线 -->
          <!-- <div class="emoji">🌝 🌞 ⭐ 🌟 🌠</div> -->
          <div class="dividing-lines"></div>

          <!-- news -->

          <br />
          <b>
            <div class="icon">🚀</div>
            最新动态
          </b>
          <br />
          <br />

          <p v-for="(item, index) of news" :key="index" class="news-content">
            👏
            <!-- {{ item.eng }}
            <br /> -->
            <a :href="item.newUrl" style="text-decoration: none; color: #000" target="blank">
              <b>
                {{ item.ch }}
              </b>
            </a>
          </p>

          ......
        </div>
      </el-col>

      <!-- 右边学术经历
      <el-col :md="8" :sm="12" :xs="24">
        <div class="academic-positions">
          <h4 class="with-underline">Academic Positions 学术经历</h4>
          <ul
            class="with-shaded-label"
            v-for="(academic, index) in positions"
            :key="index"
          >
            <li>
              <h3 class="title">
                <span class="shaded-label">{{ academic.year }}</span
                >{{ academic.position }}
              </h3>
              <div class="description">
                <p>
                  {{ academic.schoolEng }}, <b>{{ academic.universityEng }}</b
                  >, {{ academic.countryEng }}<br />
                  {{ academic.schoolCh }}，<b>{{ academic.universityCh }}</b
                  >，{{ academic.countryCh }}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </el-col> -->
    </el-row>

    <!-- 分割线 -->
    <div class="dividing-lines"></div>

    <!-- 荣誉奖励开始 -->
    <div class="subTitle">
      <h3>荣誉奖励</h3>
    </div>
    <el-row :gutter="30">
      <!-- 响应式布局，改变不同尺寸屏幕下span的大小，实现每行的不同显示结果
       :md 992 ="6":md="12" :sm 768 ="12" :xs <768 ="24" -->
      <el-col v-for="(award, index) in awards" :key="index" :lg="6" :sm="12" :xs="24">
        <!-- #####Begin iconbox v4-->
        <div class="icon-box ib-v4">
          <i class="el-icon-collection"></i>
          <h6 class="title with-shaded-label">
            <span class="shaded-label">{{ award.year }}</span>
            <!-- {{ award.titleEng }}
            <br /> -->
            {{ award.titleCh }}
          </h6>
          <!--<p>Phasellus lectus sem, egestas eget sollicitudin ut, lobortis ac nulla. Phasellus lectus sem, egestas eget sollicitudin ut.</p>-->
        </div>
        <!-- #####End iconbox v4-->
      </el-col>
    </el-row>
    <!-- 科研奖励结束 -->

    <!-- 分割线 -->
    <div class="dividing-lines"></div>

    <!-- 科研平台 -->
    <div class="subTitle">
      <h3>科研平台</h3>
    </div>
    <!-- 走马灯效果开始 -->
    <el-carousel :interval="3000" type="card" height="40vh" class="award-el-carousel">
      <el-carousel-item class="award-carousel-item" v-for="(item, index) in photos" :key="index" style="margin: 0px">
        <div class="awardPhoto-box">
          <el-image :src="item.photoUrl" :preview-src-list="Array(item.photoUrl)" class="image"></el-image>
          <!-- <img :src="item.photoUrl"/> -->
        </div>
      </el-carousel-item>
    </el-carousel>

    <!-- 屏幕小于450时显示基础走马灯效果 -->
    <el-carousel :interval="3000" class="small-award-el-carousel" arrow="always">
      <el-carousel-item class="award-carousel-item" v-for="(item, index) in photos" :key="index" style="margin: 0px">
        <div class="awardPhoto-box">
          <img :src="item.photoUrl" />
        </div>
      </el-carousel-item>
    </el-carousel>
    <!-- 小屏走马灯效果 -->
    <!-- 代表论文 -->
  </div>
</template>

<script>
export default {
  name: "CommonHome",
  data() {
    return {
      /* 新闻 */
      news: [
        {
          newUrl: './static/51.TMC-Mean.pdf',
          ch: '2022年6月，祝贺我们关于移动区块链和边缘计算的论文："Mean-Field Learning for Edge Computing in Mobile Blockchain Networks"在IEEE TMC正式发表！',
        },
        {
          newUrl: 'https://rlsbj.cq.gov.cn/zwxx_182/gsxx/202204/t20220420_10635692.html',
          ch: '2022年5月，祝贺宁兆龙教授荣获获重庆青年五四奖章！',
        },
        {
          newUrl: 'https://xwzx.cqupt.edu.cn/cqupt_xwzx/news.jsp?id=145O4B4V62504K92',
          ch: '2022年4月，祝贺宁兆龙教授入选爱思唯尔2021年度中国高被引学者！',
        },
        {
          newUrl: 'https://xwzx.cqupt.edu.cn/cqupt_xwzx/news.jsp?id=145O4B4V62504K92',
          ch: '2022年4月，祝贺宁兆龙教授入选2022 AI 2000 Most Influential Scholar Honorable Mention in Internet of Things（物联网领域全球排名前100位）！',
        },
        {
          newUrl: './static/50.TMC-Partial-2022.pdf',
          ch: '2022年4月，祝贺我们关于5G车联网中部分计算卸载和自适应调度的论文: "Partial Computation Offloading and Adaptive Task Scheduling for 5G-Enabled Vehicular Networks"在IEEE TMC正式发表！',
        },
        {
          newUrl: './static/49.Online_Scheduling_and_Route_Planning_for_Shared_Buses_in_Urban_Traffic_Networks.pdf',
          ch: '2022年4月，祝贺我们的论文: "Online Scheduling and Route Planning for Shared Buses in Urban Traffic Networks"在IEEE TITS正式发表！',
        },
        {
          newUrl: './static/48.TMC-XJ-Imitation.pdf',
          ch: '2022年2月，祝贺我们基于模仿学习的在线车辆边缘计算任务调度的论文: "lmitation Learning Enabled Task Scheduling for Online Vehicular Edge Computing"在IEEE TMC正式发表！',
        },
        {
          newUrl: './static/44.JSTSP-Blockchain.pdf',
          ch: '2022年1月，祝贺我们关于区块链的智能电网安全传输的论文: "Blockchain-Enabled Electrical Fault Inspection and Secure Transmission in 5G Smart Grids"在IEEE JSTSP正式发表！',
        },
        {
          newUrl: './static/47.Online_Learning_for_Distributed_Computation_Offloading_in_Wireless_Powered_Mobile_Edge_Computing_Networks.pdf',
          ch: '2021年11月，祝贺我们关于无线协能边缘计算网络分布式卸载的论文: "Online Learning for Distributed Computation Offloading in Wireless Powered Mobile EdgeComputing Networks"被IEEE TPDS录用！',
        },
        {
          newUrl: './static/41.TMC-Dynamic.pdf',
          ch: '2021年11月，祝贺我们的论文: "Dynamic Computation Offloading and Server Deployment for UAV-Enabled Multi-Access Edge Computing"在IEEE TMC正式发表！',
        },
        {
          newUrl: './static/35.Dynamic_UAV_Deployment_for_Differentiated_Services_A_Multi-Agent_Imitation_Learning_Based_Approach.pdf',
          ch: '2021年11月，祝贺我们的论文: "Dynamic UAV Deployment for Differentiated Services: A Multi-Agent Imitation Learning Based Approach"在IEEE TMC正式发表！',
        },
        {
          newUrl: './static/42.JSAC-5G.pdf',
          ch: '2021年11月，祝贺我们的论文: "5G-Enabled UAV-to-Community Offloading: Joint Trajectory Design and Task Scheduling"在IEEE Journal on Selected Areas in Communications正式发表！',
        },
        {
          newUrl: '',
          ch: '2021年11月，祝贺宁兆龙教授入选2021年度科睿唯安全球高被引科学家！',
        },
        {
          newUrl: './static/TITS-Joint Computing.pdf',
          ch: '2021年8月，祝贺我们的论文: "Joint Computing and Caching in 5G-Envisioned Internet of Vehicles: A Deep Reinforcement Learning-Based Traffic Control System"在IEEE TITS正式发表！',
        },
        {
          newUrl: './static/40.TPDS-Ning.pdf',
          ch: '2021年6月，祝贺我们的论文: "Distributed and Dynamic Service Placement in Pervasive Edge Computing Networks"在IEEE TPDS正式发表！',
        },
        {
          newUrl: './static/39.TMC-Blockchain.pdf',
          ch: '2021年5月，祝贺我们的论文: "Blockchain-enabled Intelligent Transportation Systems: A Distributed Crowdsensing Framework"在IEEE TMC正式发表！',
        },
        {
          newUrl: './static/37.TITS-Intelligent.pdf',
          ch: '2021年4月，祝贺我们的论文: "Intelligent Edge Computing in Internet of Vehicles: A Joint Computation Offloading and Caching Solution"在IEEE TITS正式发表！',
        },
        {
          newUrl: './static/34.TPDS-XJ.pdf',
          ch: '2021年2月，祝贺我们的论文: "Multi-Agent Imitation Learning for Pervasive Edge Computing: A Decentralized Computation Offloading Algorithm"在IEEE TPDS正式发表！',
        },
        {
          newUrl: './static/43.JSAC-Mobile.pdf',
          ch: '2021年2月，祝贺我们的论文: "Mobile Edge Computing Enabled 5G Health Monitoring for Internet of Medical Things: A Decentralized Game Theoretic Approach"在IEEE Journal on Selected Areas in Communications正式发表！',
        },
        {
          newUrl: './static/33.TMC-Minimizing2.pdf',
          ch: '2021年1月，祝贺我们的论文: "Minimizing the Age-of-Critical-Information: An Imitation Learning-based Scheduling Approach Under Partial Observations"在IEEE TMC正式发表！',
        },
      ],
      /* 学术经历 */
      positions: [
        {
          year: "2021-Present",
          position: "Prefessor 教授",
          schoolEng: "School of Communication and Information Engineering",
          schoolCh: "通信与信息工程学院",
          universityEng: "Chongqing University of Post and Telecommunication",
          universityCh: "重庆邮电大学",
          nationEng: "China",
          nationCh: "中国",
        },
      ],
      /* 科研奖励 */
      awards: [
        {
          year: "2022",
          titleCh: "宁兆龙教授荣获重庆青年五四奖章",
        },
        {
          year: "2020-2021",
          titleCh: "宁兆龙教授入选2020和2021年度全球高被引科学家（Clarivate）",
        },
        {
          year: "2020-2021",
          titleCh:
            "宁兆龙教授入选2020和2021年度中国高被引（Elsevier）",
        },
        {
          year: "2021",
          titleCh: "王小洁教授入选2021年度中国科协青年人才托举工程",
        },
        {
          year: "2020",
          titleCh: "宁兆龙教授入选2020年度重庆英才—青年拔尖人才",
        },
        {
          year: "2019",
          titleCh: "王小洁教授获2019年度ACM中国优秀博士论文奖（大连分会）",
        },
        {
          year: "2018",
          titleCh: "宁兆龙教授入选2018年度中国科协青年人才托举工程",
        },
        {
          year: "2015",
          titleCh: "宁兆龙教授获2015年度ACM中国优秀博士论文奖（大连分会）",
        },
        {
          year: "2012",
          titleCh: "宋清洋教授入选2012年度教育部新世纪优秀人才",
        },
      ],
      /* 走马灯图片 */
      /* 科研奖励 */
      photos: [
        {
          photoUrl: require("../assets/platform/基于USRP的信号发射和接收模块.jpg"),
        },
        {
          photoUrl: require("../assets/platform/无人机通信与计算原型系统示意图.png"),
        },
        {
          photoUrl: require("../assets/platform/智能车联网资源调度原型系统示意图.png"),
        },
        {
          photoUrl: require("../assets/platform/无线智能通信实验平台.jpg"),
        },
        {
          photoUrl: require("../assets/platform/FPGA辅助的光电混合人工智能加速平台.jpg"),
        },
      ],
      /* isSmallScreen: false */
    };
  },
};
</script>

<style scoped>

/* 横线上方的emoji */
.emoji {
  margin-top: 40px;
}
/* 分割线 */
.dividing-lines {
  position: relative;
  height: 20px;
  margin-bottom: 20px;
  color: rgb(12, 112, 226)
}
/* 伪元素画横线 */
.dividing-lines::after {
  bottom: -20px;
  width: 100%;
  display: block;
  height: 20px;
  opacity: 0.4;
  background-image: url(../assets/logo/line-shadow.png);
  background-color: transparent;

  content: "";
  position: absolute;
  background-repeat: no-repeat;
  background-position: top center;
  background-size: contain;
}
/* 小标题前面的icon框框，font-size可以设置emoji大小 */
.icon {
  font-size: 26px;
  display: inline-block;
  width: 36px;
  height: 36px;
  line-height: 33px;
  text-align: center;
  margin-right: 10px;
  border: 1px solid #636363;
  margin-top: 8px;
}

/* 学术经历标题 */
.with-underline {
  font-size: 14px;
  text-transform: uppercase;
  margin-bottom: 30px;
  position: relative;
  border-bottom: 1px solid #dedede;
  padding-bottom: 5px;
}
/* 学术经历的ul */
.with-shaded-label {
  position: relative;
  z-index: 1;
  line-height: 1.5;
  margin-top: 0;
}
/* 每一条学术经历 */
.with-shaded-label li {
  /* 不显示点 */
  list-style: none;
  padding-top: 10px;
  margin-top: 30px;
  margin-bottom: 30px;
  display: block;
  text-align: -webkit-match-parent;
}
.title {
  margin-top: 40px 0 0 0;
}
/* 年份，阴影错位效果 */
.shaded-label {
  font-size: 180%;
  margin-left: 0px;
  bottom: 2px;
  position: absolute !important;
  top: 0px;
  left: 0;
  z-index: -1;
  color: #cecece;
}

.news-content {
  line-height: 22px;
}

/********** 荣誉奖励开始 ********/
.subTitle {
  margin: 30px 0 30px 0;
  font-size: 18px;
}
/* 科研奖励box */
.icon-box.ib-v4 .title.with-shaded-label {
  left: 20px;
}
/* 每个box */
.icon-box {
  float: left;
  width: 100%;
  height: 160px;
}
/* 侧边图标样式 */
.icon-box.ib-v4 > i {
  font-size: 35px;
  float: left;
  position: relative;
  top: 40px;
  line-height: 1px;
}
/* 具体内容 */
.icon-box.ib-v4 .title {
  margin-left: 30px;
  margin-bottom: 15px;
  position: relative;
  padding-top: 25px;
  font-size: 15px;
  text-transform: capitalize;
}
/* 年份阴影 */
.icon-box.ib-v4 .shaded-label {
  font-size: 180%;
  margin-left: 0px;
  bottom: 5px;
  position: absolute !important;
  top: -15px;
  left: 0;
  z-index: -1;
  color: #cecece;
}
/********** 科研奖励结束 ********/

/******* 科研平台走马灯效果 *********/
  .award-el-carousel {
    display: block;
    overflow: hidden;
  }
  .small-award-el-carousel{
    display: none;
  }
  .awardPhoto-box {
    width: 100%;
  }
  .awardPhoto-box .el-image {
    width: 100%;
    height: 25vw;
  }

@media (max-width: 1200px) {
  .icon-box {
    width: 100%;
    margin: 15px 0 0 0;
    height: auto;
  }

  /* 显示大的走马灯 */
  .award-el-carousel{
    display: block;
    width: 100%;
    height: 25vh;
    overflow: hidden;
  }
  /* 每个图片的box */
  .awardPhoto-box {
    width: 100%;
    height: 25vh;
  }
  /* box里面的图片 */
  .awardPhoto-box img {
    width: 100%;
    height: 100%;
  }

}

@media (max-width: 450px) {
  /* 隐藏大走马灯 */
  .award-el-carousel {
    display: none;
  }
  /* 显示小走马灯 */
  .small-award-el-carousel{
    display: block;
    width: 100%;
    height: 25vh;
    overflow: hidden;
  }
}
</style>