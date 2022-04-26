<template>
  <div>
    <!-- 页面标题 -->
    <div>
      <div>
        <h2>Publication 论文</h2>
      </div>
      <hr />
    </div>

    <!-- 期刊主题内容-->
    <div class="container-main">
      <!-- 期刊论文标题 -->
      <h3>
        <br />
        Journal Papers 期刊论文 (近5年发表的50篇代表性论文)
      </h3>
      <!-- 期刊内容信息 -->
      <!-- 著作一 -->
      <div
        v-for="(journalPaper, index) in journalPapers"
        :key="index"
        v-if="index < currentPage * 10 && index > (currentPage - 1) * 10 - 1"
      >
        <!-- 图书标签 -->
        <div class="sp-blank-50">
          <img src="../assets/logo/资料库.png" alt="图示表情" />
        </div>
        <!-- 书籍内容信息 -->
        <div class="content-wrapper">
          <p>
            {{ 50 - index }}. <b>{{ journalPaper.name }}</b> , "<u
              >{{ journalPaper.paper }} </u
            >" {{ journalPaper.in }}
            <font color="darkred">
              <i>{{ journalPaper.publication }}</i>
            </font>
            {{ journalPaper.volumeNumber }}{{ journalPaper.time }}.{{
              journalPaper.position
            }}
          </p>
          <!-- 分享标签 -->
          <div class="journalbottom">
            <div class="share">
              <a href="#">
                <img
                  src="../assets/logo/分享.png"
                  alt="分享"
                  text-decoration:none
                />
                &nbsp; "Publisher's Link"
              </a>
            </div>
            <!-- 下载链接 -->
            <div class="share">
              <a :href="journalPaper.src" download>
                <img
                  src="../assets/logo/下载.png"
                  alt="分享"
                  text-decoration:none
                />
                &nbsp; "Download"
              </a>
            </div>
            <div>
              <p>{{ journalPaper.cite }}</p>
            </div>
          </div>
          <div
            class="dividing-lines"
            :class="index === journalPapers.length - 1 ? 'journal' : ''"
          ></div>
        </div>
      </div>
      <br />
      <hr />
    </div>
    <div class="block">
      <el-pagination
        align="center"
        @current-change="handleCurrentChange"
        v-model="currentPage"
        :page-size="pageSize"
        layout="prev, pager, next"
        :total="total"
      ></el-pagination>
    </div>
    <!-- 会议论文主题内容-->
    <!-- <div class="container-main"> -->
    <!-- 期刊论文标题 -->
    <!-- <h3>
        <br />
        Conference Papers 会议论文
      </h3> -->
    <!-- 著作内容信息 -->
    <!-- 著作一 -->
    <!-- <div> -->
    <!-- 图书标签 -->
    <!-- <div class="sp-blank-50">
          <img src="../assets/logo/资料库.png" alt="图示表情" />
        </div> -->
    <!-- 书籍内容信息 -->
    <!-- <div class="content-wrapper">
          <p>
            1. Shangxuan Cai, Yunfeng Zhao, Zhicheng Liu, Chao Qiu,<b>
              <font color="darkred">Xiaofei Wang</font> </b
            >, Qinghua Hu,"
            <u
              >Sleeping Cell Detection for Resiliency Enhancements in 5G/B5G
              Mobile Edge-Cloud Computing Networks</u
            >
            ," in
            <b
              ><font color="darkblue">
                International Conference on Distributed Computing Systems
                (ICDCS)</font
              ></b
            >
            , 2022. (CCF-B类).
          </p> -->
    <!-- 分享标签 -->
    <!-- <div>
            <div class="share">
              <a href="#">
                <img
                  src="../assets/logo/分享.png"
                  alt="分享"
                  text-decoration:none
                />
                &nbsp; "Publisher's Link"
              </a>
            </div> -->
    <!-- 下载链接 -->
    <!-- <div class="share">
              <a href="./static/论文.pdf" download>
                <img
                  src="../assets/logo/下载.png"
                  alt="分享"
                  text-decoration:none
                />
                &nbsp; "Download"
              </a>
            </div>
          </div>
        </div>
        <br />
        <hr />
      </div>
    </div> -->
    <!-- 专利主题 -->
    <!-- <div class="container-main"> -->
    <!-- 期刊论文标题 -->
    <!-- <h3>
        <br />
        Patents 专利
      </h3> -->
    <!-- 著作内容信息 -->
    <!-- 著作一 -->
    <!-- <div> -->
    <!-- 图书标签 -->
    <!-- <div class="sp-blank-50">
          <img src="../assets/logo/资料库.png" alt="图示表情" />
        </div> -->
    <!-- 书籍内容信息 -->
    <!-- <div class="content-wrapper">
          <p>
            1. 王晓飞， 赵云凤， 刘志成， 仇超，胡清华, "
            <u>一种面向智慧城市的社会化学习方法</u>
            "，公开实审，申请号：202111425250.6
          </p> -->
    <!-- 分享标签 -->
    <!-- <div>
            <div class="share">
              <a href="#">
                <img
                  src="../assets/logo/分享.png"
                  alt="分享"
                  text-decoration:none
                />
                &nbsp; "Publisher's Link"
              </a>
            </div> -->
    <!-- 下载链接 -->
    <!-- <div class="share">
              <a href="./static/双向循环链表编程作业.pdf" download>
                <img
                  src="../assets/logo/下载.png"
                  alt="分享"
                  text-decoration:none
                />
                &nbsp; "Download"
              </a>
            </div>
          </div>
        </div>
        <br />
        <hr />
      </div>
    </div> -->
  </div>
</template>

<script >
export default {
  name: "Publication",
  data() {
    return {
      // 期刊题目
      journalPapers: [
        {
          src: "./static/50.TMC-Partial-2022.pdf",
          paper:
            "Partial Computation Offloading and Adaptive Task Scheduling for 5G-enabled Vehicular Networks",
          name: "Zhaolong Ning, Peiran Dong, Xiaojie Wang, et al",
          publication: "IEEE Transactions on Mobile Computing",
          volumeNumber: " ,21(4): 1319-1333",
          in: "in",
          time: ",2022",
          position: " (中科院一区，CCF A)",
        },
        {
          src: "./static/49.Online_Scheduling_and_Route_Planning_for_Shared_Buses_in_Urban_Traffic_Networks.pdf",
          paper:
            "Online Scheduling and Route Planning for Shared Buses in Urban Traffic Networks",
          name: "Zhaolong Ning, Shouming Sun, Xiaojie Wang, et al",
          publication:
            "IEEE Transactions on Intelligent Transportation Systems",
          volumeNumber: ",23(4): 3430-3444",
          in: "in",
          time: ",2022",
          position: "(中科院一区，CCF B）",
        },
        {
          src: "./static/48.TMC-XJ-Imitation.pdf",
          paper:
            "Imitation Learning Enabled Task Scheduling for Online Vehicular Edge Computing",
          name: "Xiaojie Wang, Zhaolong Ning, Song Guo, Lei Wang",
          publication: "IEEE Transactions on Mobile Computing",
          volumeNumber: ",21(2): 598-611",
          in: "in",
          time: ",2022",
          position: "(CCF A)",
        },
        {
          src: "./static/47.Online_Learning_for_Distributed_Computation_Offloading_in_Wireless_Powered_Mobile_Edge_Computing_Networks.pdf",
          paper:
            "Online Learning for Distributed Computation Offloading in Wireless Powered Mobile Edge Computing Networks",
          name: "Xiaojie Wang, Zhaolong Ning, Lei Guo, Song Guo, Xinbo Gao, Guoyin Wang",
          publication: "IEEE Transactions on Parallel and Distributed Systems",
          volumeNumber: ",33(8): 1841-1855",
          in: "in",
          time: ",2022",
          position: "",
        },
        {
          src: "./static/46.Energy-Efficient_Resource_Allocation_for_UAV-Assisted_Vehicular_Networks_with_Spectrum_Sharing.pdf",
          paper:
            "Energy-Efficient Resource Allocation for UAV-Assisted Vehicular Networks with Spectrum Sharing",
          name: "Weijing Qi, Qingyang Song, Lei Guo, Abbas Jamalipour",
          publication: "IEEE Transactions on Vehicular Technology",
          volumeNumber: "",
          in: "in",
          time: ",2022",
          position: "",
        },

        {
          src: "./static/45.面向软件定义多模态车联网的双时间尺度RAN切片资源分配_亓伟敬.pdf",

          paper: "面向软件定义多模态车联网的双时间尺度RAN切片资源分配",
          name: "亓伟敬, 宋清洋, 郭磊",
          publication: "通信学报",
          volumeNumber: "",
          in: "在",
          time: ",2022",
          position: "",
        },
        {
          src: "./static/44.JSTSP-Blockchain.pdf",
          paper:
            "Blockchain-Enabled Electrical Fault Inspection and Secure Transmission in 5G Smart Grids",
          name: "Zhaolong Ning, Handi Chen, Xiaojie Wang, Shupeng Wang, Lei Guo",
          publication: "IEEE Journal of Selected Topics in Signal Processing",
          volumeNumber: "",
          in: "in",
          time: ",2022",
          position: "",
        },
        {
          src: "./static/43.JSAC-Mobile.pdf",
          paper:
            "Mobile Edge Computing Enabled 5G Health Monitoring for Internet of Medical Things: A Decentralized Game Theoretic Approach",
          name: "Zhaolong Ning, Peiran Dong, Xiaojie Wang, Xiping Hu, Lei Guo, Bin Hu, Yi Guo, Tie Qiu, Ricky Y. K. Kwok,",
          publication: "IEEE Journal on Selected Areas in Communications",
          volumeNumber: ",39(2): 463-478",
          in: "in",
          time: ",2021",
          position: "(ESI 0.1%热点论文，ESI 1%高被引论文，中科院一区，CCF A)",
        },
        {
          src: "./static/42.JSAC-5G.pdf",
          paper:
            "5G-Enabled UAV-to-Community Offloading: Joint Trajectory Design and Task Scheduling",
          name: "Zhaolong Ning, Peiran Dong, Miaowen Wen, Xiaojie Wang, Lei Guo, Ricky Kwok, H Vincent Poor",
          publication: "IEEE Journal on Selected Areas in Communications",
          volumeNumber: ",39(11): 3306-3320",
          in: "in",
          time: ",2021",
          position: "(中科院一区，CCF A)",
        },
        {
          src: "./static/41.TMC-Dynamic.pdf",
          paper:
            " Dynamic Computation Offloading and Server Deployment for UAV-Enabled Multi-Access Edge Computing",
          name: "Zhaolong Ning, Yuxuan Yang, Xiaojie Wang, Lei Guo, Xinbo Gao, Song Guo, Guoyin Wang",
          publication: "IEEE Transactions on Mobile Computing",
          in: "in",
          volumeNumber: ",Doi: 10.1109/TMC.2021.3129785",
          time: ",2021",
        },
        {
          src: "./static/40.TPDS-Ning.pdf",
          paper:
            "Distributed and Dynamic Service Placement in Pervasive Edge Computing Networks",
          name: "Zhaolong Ning, Peiran Dong, Xiaojie Wang, et al",
          publication: "IEEE Transactions on Parallel and Distributed Systems",
          in: "in",
          volumeNumber: ",32(6): 1277-1292",
          time: ",2021",
          position: "(CCF A)",
        },
        {
          src: "./static/39.TMC-Blockchain.pdf",
          paper:
            "Blockchain-enabled Intelligent Transportation Systems: A Distributed Crowdsensing Framework",
          name: "Zhaolong Ning, Shouming Sun, Xiaojie Wang, Lei Guo, Song Guo, Xiping Hu, Bin Hu, Ricky Y. K. Kwok",
          publication: "IEEE Transactions on Mobile Computing",
          volumeNumber: ",Doi: 10.1109/TMC.2021.3079984",
          in: "in",
          time: ",2021",
          position: "(CCF A)",
        },
        {
          src: "./static/TITS-Joint Computing.pdf",
          paper:
            "Joint Computing and Caching in 5G-Envisioned Internet of Vehicles: A Deep Reinforcement Learning based Traffic Control System",
          name: "Zhaolong Ning, Kaiyuan Zhang, Xiaojie Wang, et al",
          publication:
            "IEEE Transactions on Intelligent Transportation Systems",
          in: "in",
          volumeNumber: " ,22(8): 5201-5212",
          time: ",2021",
          position: " (ESI 1%热点论文，ESI 1%高被引论文)",
        },
        {
          src: "./static/37.TITS-Intelligent.pdf",
          paper:
            " Intelligent Edge Computing in Internet of Vehicles: A Joint Computation Offloading and Caching Solution",
          name: "Zhaolong Ning, Kaiyuan Zhang, Xiaojie Wang, et al",
          publication:
            "IEEE Transactions on Intelligent Transportation Systems",
          in: "in",
          volumeNumber: ",22(4): 2212 - 2225",
          time: ",2021",
          position: "(中科院一区, CCF B，ESI 1%高被引论文)",
        },
        {
          src: "./static/36.Ning2021_Article_IntelligentResourceAllocationI.pdf",
          paper:
            "Intelligent Resource Allocation in Mobile Blockchain for Privacy and Security Transactions: A Deep Reinforcement Learning based Approach",
          name: "Zhaolong Ning, Shouming Sun, Xiaojie Wang, et al",
          publication: "SCIENCE CHINA Information Sciences",
          in: "in",
          volumeNumber: ",64: 162303",
          time: ",June, 2021",
          position: "(CCF B)",
        },
        {
          src: "./static/35.Dynamic_UAV_Deployment_for_Differentiated_Services_A_Multi-Agent_Imitation_Learning_Based_Approach.pdf",
          paper:
            "Dynamic UAV Deployment for Differentiated Services: A Multi-Agent Imitation Learning Based Approach",
          name: "Xiaojie Wang, Zhaolong Ning, Song Guo, Miaowen Wen, Lei Guo, Poor Vincent",
          publication: "IEEE Transactions on Mobile Computing",
          in: "in",
          volumeNumber: ",Doi: 10.1109/TMC.2021.3116236",
          time: ",2021",
          position: "",
        },
        {
          src: "./static/34.TPDS-XJ.pdf",
          paper:
            "Multi-agent Imitation Learning for Pervasive Edge Computing: A Decentralized Computation Offloading Algorithm",
          name: "Xiaojie Wang, Zhaolong Ning, Song Guo",
          publication: "IEEE Transactions on Parallel and Distributed Systems",
          in: "in",
          volumeNumber: ",32 (2), 411-425",
          time: ",2021",
          position: "(CCF A, ESI 1%高被引论文)",
        },
        {
          src: "./static/33.TMC-Minimizing2.pdf",
          paper:
            "Minimizing the Age-of-Critical-Information: An Imitation Learning-based Scheduling Approach Under Partial Observations",
          name: "Xiaojie Wang, Zhaolong Ning, Song Guo, Miaowen Wen, H. Vincent Poor",
          publication: "IEEE Transactions on Mobile Computing",
          in: "in",
          volumeNumber: ",Doi: 10.1109/TMC.2021.3053136",
          time: ",2021",
          position: "",
        },
        {
          src: "./static/32.通信学报.pdf",
          paper: "基于多智能体元强化学习的车联网协同服务缓存和计算卸载",
          name: "宁兆龙，张凯源，王小洁，郭磊",
          publication: "通信学报",
          in: "在",
          volumeNumber: ",42（6）：118-130",
          time: ",2021",
          position: "",
        },
        {
          src: "./static/31.Wireless_Virtual_Reality_in_Beyond_5G_Systems_with_the_Internet_of_Intelligence.pdf",
          paper:
            "Wireless virtual reality in beyond 5G systems with the Internet of intelligence",
          name: "Peng Lin, Qingyang Song, F. Richard Yu, Dan Wang, Abbas Jamalipour, Lei Guo",
          publication: "IEEE Wireless Communications",
          in: "in",
          volumeNumber: ",vol. 28, no. 2, pp. 70-77",
          time: ",2021",
          position: "",
        },
        {
          src: "./static/30.Extensive_Edge_Intelligence_for_Future_Vehicular_Networks_in_6G.pdf",
          paper:
            "Extensive Edge Intelligence for Future Vehicular Networks in 6G",
          name: "Weijing Qi, Qian Li, Qingyang Song, Lei Guo, Abbas Jamalipour",
          publication: "IEEE Wireless Communications",
          in: "in",
          volumeNumber: ",vol. 28, no. 4, pp. 128-135",
          time: ",2021",
          position: "",
        },
        {
          src: "./static/29.Joint_User_Pairing_and_Resource_Allocation_in_a_SWIPT-Enabled_Cooperative_NOMA_System.pdf",
          paper:
            "Joint user pairing and resource allocation in a SWIPT-enabled cooperative NOMA system",
          name: "Mengru Wu, Qingyang Song, Lei Guo, Abbas Jamalipour",
          publication: "IEEE Transactions on Vehicular Technology",
          in: "in",
          volumeNumber: ",vol. 70, no. 7, pp. 6826-6840",
          time: ",2021",
          position: "",
        },
        {
          src: "./static/28.Distributed_Task_Scheduling_for_Wireless_Powered_Mobile_Edge_Computing_A_Federated-Learning-Enabled_Framework.pdf",
          paper:
            "Distributed Task Scheduling for Wireless Powered Mobile Edge Computing: A Federated-Learning-Enabled Framework",
          name: "Xiaojie Wang, Shupeng Wang, Yongjian Wang, Zhaolong Ning, Lei Guo",
          publication: "IEEE Network",
          in: "in",
          volumeNumber: ",35 (6), 27-33",
          time: ",2021",
          position: "",
        },
        {
          src: "./static/27、TII-Dong.pdf",
          paper:
            "When Deep Reinforcement Learning Meets 5G-enabled Vehicular Networks: A Distributed Offloading Framework for Traffic Big Data",
          name: "Zhaolong Ning, Peiran Dong, Xiaojie Wang, et al",
          publication: "IEEE Transactions on Industrial Informatics",
          in: "in",
          volumeNumber: ",16(2): 1352-1361",
          time: ",2020",
          position: "(ESI 1%高被引论文,中科院一区)",
        },
        {
          src: "./static/26.Network-Dong.pdf",
          paper:
            "Edge Computing based Healthcare Systems: Enabling Decentralized Health Monitoring in Internet of Medical Things",
          name: "Peiran Dong, Zhaolong Ning, M. Obaidat, et al",
          publication: "IEEE Network",
          in: "in",
          volumeNumber: ",34(5): 254-261",
          time: ",2020",
          position: "(中科院一区)",
        },
        {
          src: "./static/25.Edge_Computing_in_Industrial_Internet_of_Things_Architecture_Advances_and_Challenges.pdf",
          paper:
            "Edge Computing in Industrial Internet of Things: Architecture, Advances and Challenges",
          name: "Tie Qiu, Jing Chi, Xiaobo Zhou, Zhaolong Ning, et al",
          publication: "IEEE Communications Surveys & Tutorials",
          in: "in",
          volumeNumber: ",34(5): 254-261",
          time: ",2020",
          position: "(中科院一区)",
        },
        {
          src: "./static/24.Multidimensional_Cooperative_Caching_in_CoMP-Integrated_Ultra-Dense_Cellular_Networks.pdf",
          paper:
            "Multidimensional cooperative caching in CoMP-integrated ultra-dense cellular networks",
          name: "Peng Lin, Qingyang Song, Abbas Jamalipour",
          publication: "IEEE Transactions on Wireless Communications",
          in: "in",
          volumeNumber: ",vol. 19, no. 3, pp. 1977-1989",
          time: ",2020",
          position: "",
        },
        {
          src: "./static/23.Cooperative_Caching_and_Transmission_in_CoMP-Integrated_Cellular_Networks_Using_Reinforcement_Learning.pdf",
          paper:
            "Cooperative caching and transmission in CoMP-integrated cellular networks using reinforcement learning",
          name: "Peng Lin, Qingyang Song, Jing Song, Abbas Jamalipour, F. Richard Yu",
          publication: "IEEE Transactions on Vehicular Technology",
          in: "in",
          volumeNumber: ",vol. 69, no. 5, pp. 5508-5520",
          time: ",2020",
          position: "",
        },
        {
          src: "./static/22.Traffic_Differentiated_Clustering_Routing_in_DSRC_and_C-V2X_Hybrid_Vehicular_Networks.pdf",
          paper:
            "Traffic Differentiated Clustering Routing in DSRC and C-V2X Hybrid Vehicular Networks",
          name: "Weijing Qi, Björn Landfeldt, Qingyang Song, Lei Guo, Abbas Jamalipour",
          publication: "IEEE Transactions on Vehicular Technolog",
          in: "in",
          volumeNumber: " ,vol. 69, no, 7, pp. 7723-7734",
          time: ",2020",
          position: "",
        },
        {
          src: "./static/21.Deep Learning-based Network Traffic Prediction for Secure Backbone Networks in Internet of Vehicles.pdf",

          paper:
            "Deep Learning-based Network Traffic Prediction for Secure Backbone Networks in Internet of Vehicles",
          name: "Xiaojie Wang, Laisen Nie, Zhaolong Ning, Lei Guo, Guoyin Wang, Xinbo Gao, Neeraj Kumar",
          publication: "ACM Transactions on Internet Technology",
          in: "in",
          volumeNumber: ",1-24",
          time: ",2020",
          position: "",
        },
        {
          src: "./static/20.VTM-Ning.pdf",
          paper:
            " Mobile Edge Computing-Enabled 5G Vehicular Networks: Toward the Integration of Communication and Computing",
          name: "Zhaolong Ning, Xiaojie Wang, Jun Huang",
          publication: "IEEE Vehicular Technology Magazine",
          in: "in",
          volumeNumber: ",14(1): 54-61",
          time: ",2019",
          position:
            " (ESI 0.1%热点论文, ESI 1%高被引论文，入选期刊2019年度Top 50 Popular论文，中科院一区)",
        },
        {
          src: "./static/19.Future_Communications_and_Energy_Management_in_the_Internet_of_Vehicles_Toward_Intelligent_Energy-Harvesting.pdf",
          paper:
            " Future Communications and Energy Management in Internet of Vehicles: Toward Intelligent Energy-Harvesting",
          name: "Xiaojie Wang, Zhaolong Ning, Xiping Hu, Lei Wang, Lei Guo, Bin Hu",
          publication: " IEEE Wireless Communications",
          in: "in",
          volumeNumber: ",26(6): 87-93",
          time: ",2019",
          position: "(中科院一区)",
        },
        {
          src: "./static/18、TII-Ning-Joint.pdf",
          paper:
            " Joint Computation Offloading, Power Allocation, and Channel Assignment for 5G-enabled Traffic Management Systems",
          name: "Zhaolong Ning, Xiaojie Wang, Joel Rodrigues, Feng Xia",
          publication: "IEEE Transactions on Industrial Informatics",
          in: "in",
          volumeNumber: ",15(5): 3058-3067",
          time: ",2019",
          position:
            "(ESI 1%高被引论文，入选期刊2019年度Top 50 Popular论文，中科院一区)",
        },
        {
          src: "./static/17.Optimizing_Content_Dissemination_for_Real-Time_Traffic_Management_in_Large-Scale_Internet_of_Vehicle_Systems.pdf",
          paper:
            "Optimizing Content Dissemination for Real-time Traffic Management in Large-scale Internet of Vehicle Systems",
          name: "Xiaojie Wang, Zhaolong Ning, Xiping Hu, et al",
          publication: "IEEE Transactions on Vehicular Technology",
          in: "in",
          volumeNumber: ",68(2): 1093-1105",
          time: ",2019",
          position: "(ESI 1%高被引论文，期刊2019年度Top 50 Popular论文)",
        },
        {
          src: "./static/16.Vehicular_Fog_Computing_Enabling_Real-Time_Traffic_Management_for_Smart_Cities.pdf",
          paper:
            "Vehicular Fog Computing: Enabling Real-time Traffic Management for Smart Cities",
          name: "Zhaolong Ning, Jun Huang, Xiaojie Wang",
          publication: "IEEE Wireless Communications",
          in: "in",
          volumeNumber: ",26(1): 87-93",
          time: ",2019",
          position:
            "(ESI 1%高被引论文，入选期刊2019年度Top 50 Popular论文，中科院一区)",
        },
        {
          src: "./static/15、TII-Feng.pdf",
          paper:
            "Deep Learning in Edge of Vehicles: Exploring Tri-relationship for Data Transmission",
          name: "Zhaolong Ning, Yufan Feng, Mario Collotta, et al",
          publication: "IEEE Transactions on Industrial Informatics",
          in: "in",
          volumeNumber: ",15(10): 5737-5746",
          time: ",2019",
          position: "(ESI 1%高被引论文，中科院一区)",
        },
        {
          src: "./static/14.Network-Ning.pdf",
          paper:
            "Mobile Edge Computing-enabled Internet of Vehicles: Toward Energy-efficient Scheduling",
          name: "Zhaolong Ning, Jun Huang, Xiaojie Wang, Joel Rodrigues, Lei Guo",
          publication: "IEEE Network",
          in: "in",
          volumeNumber: ",33(5): 198-205",
          time: ",2019",
          position:
            "(入选ESI 1%高被引论文，入选期刊2019年度Top 50 Popular论文，中科院一区)",
        },
        {
          src: "./static/13.Deep Reinforcement Learning for Vehicular Edge Computing.pdf",
          paper:
            "Deep Reinforcement Learning for Vehicular Edge Computing: An Intelligent Offloading System",
          name: "Zhaolong Ning, Peiran Dong, Xiaojie Wang, Joel Rodrigues, Feng Xia",
          publication: "ACM Transactions on Intelligent Systems and Technology",
          in: "in",
          volumeNumber: ",10(6): 60",
          time: ",2019",
          position: "(ESI 1%高被引论文)",
        },
        {
          src: "./static/12、TCCN.pdf",
          paper:
            "Deep Reinforcement Learning for Intelligent Internet of Vehicles: An Energy-Efficient Computational Offloading Scheme",
          name: "Zhaolong Ning, Peiran Dong, Xiaojie Wang, et al",
          publication:
            "IEEE Transactions on Cognitive Communications and Networking",
          in: "in",
          volumeNumber: ",5(4): 1060-1072",
          time: ",2019",
          position: "(入选期刊2019年度Top 50 Popular论文)",
        },
        {
          src: "./static/11.Privacy-Preserving_Content_Dissemination_for_Vehicular_Social_Networks_Challenges_and_Solutions.pdf",
          paper:
            "Privacy-Preserving Content Dissemination for Vehicular Social Networks: Challenges and Solutions",
          name: "Xiaojie Wang, Zhaolong Ning, MengChu Zhou, et al",
          publication: "IEEE Communications Surveys and Tutorials",
          in: "in",
          volumeNumber: ",21(2): 1314-1345",
          time: ",2019",
          position: "(ESI 1%高被引论文，中科院一区)",
        },
        {
          src: "./static/10.Caching_in_Heterogeneous_Ultradense_5G_Networks_A_Comprehensive_Cooperation_Approach.pdf",
          paper:
            "Caching in Heterogeneous Ultra-Dense 5G Networks: A Comprehensive Cooperation Approach",
          name: "Peng Lin, Komal S. Khan, Qingyang Song ,Abbas Jamalipour",
          publication: " IEEE Vehicular Technology Magazine",
          in: "in",
          volumeNumber: ",vol. 14, no. 2, pp. 22-32",
          time: ",2019",
          position: "",
        },
        {
          src: "./static/9.Green_and_Sustainable_Cloud_of_Things_Enabling_Collaborative_Edge_Computing.pdf",
          paper:
            "Green and Sustainable Cloud of Things: Enabling Collaborative Edge Computing",
          name: "Zhaolong Ning, Xiangjie Kong, Feng Xia, et al",
          publication: "IEEE Communications Magazine",
          in: "in",
          volumeNumber: ",57(1): 72-78",
          time: ",2019",
          position:
            "(ESI 1%高被引论文，入选期刊2019年度Top 50 Popular论文，中科院一区)",
        },
        {
          src: "./static/8.A_City-Wide_Real-Time_Traffic_Management_System_Enabling_Crowdsensing_in_Social_Internet_of_Vehicles.pdf",
          paper:
            "A City-Wide Real-time Traffic Management System: Enabling Crowdsensing in Social Internet of Vehicles",
          name: "Xiaojie Wang, Zhaolong Ning, Xiping Hu, et al",
          publication: "IEEE Communications Magazine",
          in: "in",
          volumeNumber: " ,56(9):19-25",
          time: ",2018",
          position: "(ESI 1%高被引论文，中科院一区)",
        },
        {
          src: "./static/7、TII-XJ-2018.pdf",
          paper:
            "Offloading in Internet of Vehicles: A Fog-Enabled Real-Time Traffic Management System",
          name: "Xiaojie Wang, Zhaolong Ning, Lei Wang",
          publication: "IEEE Transactions on Industrial Informatics",
          in: "in",
          volumeNumber: ",14(10):4568-4578",
          time: ",2018",
          position:
            "(2018年中国百篇最具影响国际学术论文，ESI 0.1%热点论文，ESI 1%高被引论文，入选期刊2018、2019、2020年度Top 50 Popular论文，中科院一区)",
        },
        {
          src: "./static/6、TVT-Kong.pdf",
          paper:
            "Mobility Dataset Generation for Vehicular Social Networks Based on Floating Car Data",
          name: "Xiangjie Kong, Feng Xia, Zhaolong Ning, et al",
          publication: "IEEE Transactions on Vehicular Technology",
          in: "in",
          volumeNumber: ",67(5): 3874-3886",
          time: ",2018",
          position: "(期刊2019年度最佳论文，ESI 1%高被引论文)",
        },
        {
          src: "./static/5.A_Survey_on_Human-Centric_Communications_in_Non-Cooperative_Wireless_Relay_Networks.pdf",
          paper:
            "A Survey on Human-centric Communications in Non-cooperative Wireless Relay Networks",
          name: "Behrouz Jedari, Feng Xia, Zhaolong Ning",
          publication: "IEEE Communications Surveys and Tutorials",
          in: "in",
          volumeNumber: ",20(2): 914-944",
          time: ",2018",
          position: "(中科院一区)",
        },
        {
          src: "./static/4.TASE-Guo.pdf",
          paper:
            "Quick Answer for Big Data in Sharing Economy: Innovative Computer Architecture Design Facilitating Optimal Service-Demand Matching",
          name: "Lei Guo, Zhaolong Ning, Weigang Hou",
          publication:
            "IEEE Transactions on Automation Science and Engineering",
          in: "in",
          volumeNumber: ",15(4): 1494-1506",
          time: ",2018",
          position:
            " (ESI 1%高被引论文,入选期刊2018、2019年度Top 50 Popular论文)",
        },
        {
          src: "./static/3.Vehicular_Social_Networks_Enabling_Smart_Mobility.pdf",
          paper: "Vehicular Social Networks: Enabling Smart Mobility",
          name: "Zhaolong Ning, Feng Xia, Noor Ullah, et al",
          publication: "IEEE Communications Magazine",
          in: "in",
          volumeNumber: ",55(5): 49-55",
          time: ",2017",
          position: " (ESI 0.1%热点论文, ESI 1%高被引论文，中科院一区)",
        },
        {
          src: "./static/2、TII-Social.pdf",
          paper:
            "Social-oriented Adaptive Transmission in Opportunistic Internet of Smartphones",
          name: "	Zhaolong Ning, Feng Xia, Xiping Hu, et al",
          publication: "IEEE Transactions on Industrial Informatics",
          in: "in",
          volumeNumber: ",13(2): 810-820",
          time: ",2017",
          position: "(ESI 1%高被引论文, 中科院一区)",
        },
        {
          src: "./static/1、TVT-Ning-CAIS.pdf",
          paper:
            "CAIS: A Copy Adjustable Incentive Scheme in Community-based Socially-Aware Networking",
          name: "Zhaolong Ning, Li Liu, Feng Xia, et al",
          publication: "IEEE Transactions on Vehicular Technology",
          in: "in",
          volumeNumber: ",66(4): 3406-3419",
          time: ",2017",
          position: "(ESI 1%高被引论文)",
        },
      ],
      total: [],
      currentPage: 1, //当前页码
      total: 50,
      pageSize: 10,
    };
  },
  methods: {
    handleCurrentChange(val) {
      this.currentPage = val;
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  },
};
</script>

<style scoped>
/* 分割线 */
.dividing-lines {
  position: relative;
  height: 30px;
}
.journal {
  display: none;
}
/* 伪元素画横线 */
.dividing-lines::after {
  content: "";
  position: absolute;
  left: 0px;
  top: 15px;
  height: 1px;
  width: 100%;
  background-color: #bbbbbb;
}
.journalbottom {
  height: 10px;
  margin-bottom: 15px;
}
/* 各章节、论文前的图示 */
.sp-blank-50 img {
  height: 40px;
  width: 40px;
  float: left;
  position: relative;
}

.share {
  float: left;
  position: relative;
  margin-right: 50px;
}

.share a img {
  height: 20px;
  float: left;
  position: relative;
}

a {
  text-decoration: none;
  color: black;
}

a:hover {
  color: red;
}

/* 论文内容的总框架*/
.container-main {
  margin-left: 35px;
  margin-right: 35px;
  padding-left: 15px;
  padding-right: 15px;
  /* margin-bottom: 10px; */
}

/* 文字对齐，并举例左侧边缘70px的距离 */
.content-wrapper {
  margin-left: 70px;
}

@media (max-width: 450px) {
  .container-main {
    margin-left: 0px;
    margin-right: 0px;
    padding: 0px;
    /* padding-left: 5px;
    padding-right: 5px; */
    /* margin-bottom: 10px; */
  }
  /* 文字对齐，并举例左侧边缘70px的距离 */
  .content-wrapper {
    margin-left: 60px;
  }
}
</style>